# A set of buildables we typically build for releases

{ hydraProject # as defined in default.nix
, system ? builtins.currentSystem
, pkgs
, cardano-node
}:
let
  nativePkgs = hydraProject.hsPkgs;
  # Allow reinstallation of terminfo as it's not installed with cross compilers.
  patchedForCrossProject = hydraProject.hsPkgs.appendModule
    ({ lib, ... }: { options.nonReinstallablePkgs = lib.mkOption { apply = lib.remove "terminfo"; }; });
  musl64Pkgs = patchedForCrossProject.projectCross.musl64.hsPkgs;
in
rec {
  hydra-node = nativePkgs.hydra-node.components.exes.hydra-node;
  hydra-node-static = musl64Pkgs.hydra-node.components.exes.hydra-node;
  hydra-tools-static = musl64Pkgs.hydra-node.components.exes.hydra-tools;
  hydra-tui = nativePkgs.hydra-tui.components.exes.hydra-tui;
  hydra-tui-static = musl64Pkgs.hydra-tui.components.exes.hydra-tui;
  hydraw = nativePkgs.hydraw.components.exes.hydraw;
  hydraw-static = musl64Pkgs.hydraw.components.exes.hydraw;
  tests = {
    hydra-node = nativePkgs.hydra-node.components.tests.tests;
    hydra-cluster = pkgs.buildEnv {
      name = "integration";
      paths = [
                nativePkgs.hydra-cluster.components.tests.integration
                cardano-node.packages.${system}.cardano-node
                hydra-node
              ];
    };
  };
}
