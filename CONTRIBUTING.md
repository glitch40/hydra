# Contributing to Hydra

Thanks for considering contributing and help us on creating the Hydra protocols! 

The best way to contribute right now is to try things out and provide feedback,
but we also accept contributions to the documentation and the obviously to the
code itself.

This document contains guidelines to help you get started and how to make sure
your contribution gets accepted, making you our newest Hydra contributor!

## Ask for help

See [`SUPPORT.md`](SUPPORT.md) should you have any questions or need some help in getting set up.

## Your first contribution 

Contributing to the documentation, its translation, reporting bugs or proposing features are awesome ways to get started.

### Documentation + translations

We host our documentation / user manual as a website [here](https://input-output-hk.github.io/hydra).

Each page has an "Edit this page" button which should take you to the source
file containing the markup. Should you want to extend the documentation or
find some errors, please file an issue pointing to the mistake or even better,
create a pull request with the changes directly!

The documentation is also available in multiple languages and we can easily add more languages. If you want to extend, update or contribute a new translation make sure to check out the instructions [in the docs component](./docs/README.md#Translating).

### Bug reports

[Submit an issue](https://github.com/input-output-hk/hydra/issues/new/choose)
using the "Bug report :bug:" template. It's very important that you fill the
template as thoroughly as possible.

### Feature ideas

Feature ideas are precursors to high-level features items, which will be
discussed and fleshed out to ideally become items on our feature roadmap.

We use the [Ideas discussions
category](https://github.com/input-output-hk/hydra/discussions/categories/ideas)
to discuss and vote on feature ideas, but you can also [submit an
issue](https://github.com/input-output-hk/hydra/issues/new/choose) using the
"Feature idea :thought_balloon:" template and we convert that to a discussion.

We expect a description of
* why you (or the user) need/want something (e.g. problem, challenge, pain, benefit), and
* what this is roughly about (e.g. description of a new API endpoint or message format).

Note that we do NOT require a detailed technical description, but are much more
interested in *why* a feature is needed. This also helps in understanding the
relevance and ultimately the priority of such an item.

## Making changes

When contributing code, it helps to have discussed the rationale and (ideally)
how something is implemented in a feature idea or bug ticket beforehand.

### Building & Testing

We use and require [nix](https://nixos.org/download.html) to provide a
consistent development environment via our `flake.nix`. So a simple call to `nix develop` should put everything in place for building, testing and general
development.

Before that, make sure the following caches are listed in your `nix.conf` for a speedy setup and that you have activated flakes:

```
substituters = https://cache.iog.io https://cache.nixos.org
trusted-public-keys = hydra.iohk.io:f/Ea+s+dFdN+3Y/G+FDgSq+a5NEWhJGzdjvKNGv0/EQ= cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY=
experimental-features = nix-command flakes
```

<details>
<summary>For Mac OS X users</summary>

Daemon mode is the recommended way to install and run nix on Mac OS. Therefore, you might want to add yourself as a _trusted user_ in order to ensure flake's substituters will be picked up:

```
build-users-group = nixbld
trusted-users = root pascal
```

</details>

From there you can:

- Build & run the `hydra-node`: `cabal build hydra-node && cabal exec hydra-node -- --version`
- Build & run all tests: `cabal test all`
- Build & run all benchmarks: `cabal bench all`
- Run `haskell-language-server` for an IDE experience
- Run `hoogle` for symbol & documentation lookup
- Build the `hydra-node` using nix: `nix build .#hydra-node`
- Build a statically linked `hydra-node` using nix: `nix build .#hydra-node-static`
- Build the `hydra-node` docker image: `nix build .#docker-hydra-node`
- Build the specification as pdf: `nix build .#spec`

Also, some of us use [direnv](https://direnv.net/) and
[nix-direnv](https://github.com/nix-community/nix-direnv) to automatically
import the nix environment into our favorite shell or editor and not need
explicit call to enter the nix shell.

Besides these general build instructions, some components might document
additional steps and useful tools in their `README.md` files, e.g. the
[docs](./docs/README.md) or the [hydra-cluster](./hydra-cluster/README.md)

### Coding standards

Make sure to follow our [Coding
Standards](https://github.com/input-output-hk/hydra/wiki/Coding-Standards).
It includes guidelines on Haskell code style, but also on Git commit messages
and some processes (TODO: clarify separation or unify with these guidelines). To
propose new standards or changes to the existing standards, file an issue.

### Creating a pull request

Thank you for contributing your changes by opening a pull requests! To get
something merged we usually require:
+ Description of the changes - if your commit messages are great, this is less important
+ Quality of changes is ensured - through new or updated automated tests
+ Change is related to an issue, feature (idea) or bug report - ideally discussed beforehand
+ Well-scoped - we prefer multiple PRs, rather than a big one

### Updating dependencies

#### From Hackage

Updating package dependencies from Hackage should work like normal in a Haskell
project. The most important thing to note is that we pin the `index-state` of
the Hackage package index in `cabal.project`. This means that cabal will always
see Hackage “as if” it was that time, ensuring reproducibility. But it also
means that if you need a package version that was released *after* that time,
you need to bump the `index-state` (and to run ``cabal update`` locally).

Because of how we use Nix to manage our Haskell build, whenever you do this you
will also need to pull in the Nix equivalent of the newer `index-state`. You can
do this by bumping the `haskellNix` to a newer tag in our `default.nix`.

#### From Cardano Haskell Packages (CHaP)

Many Cardano packages are not on Hackage and are instead in the [Cardano Haskell
Packages (CHaP)](https://github.com/input-output-hk/cardano-haskell-packages) see the
README for (lots) more information. Getting new packages from there works much
like getting them from Hackage. The differences are that it has an independent
`index-state`, and that there is the `CHaP` expression which you need to bump in
the `default.nix`.

#### Using unreleased versions of dependencies

Sometimes we need to use an unreleased version of one of our dependencies,
either to fix an issue in a package that is not under our control, or to
experiment with a pre-release version of one of our own packages. You can use a
`source-repository-package` stanza to pull in the unreleased version. Do this
**only** for a short period of time, and try to get your changes released
upstream. If that is (really) not possible, we can also release a patched
version into CHap, see their
[README](https://github.com/input-output-hk/cardano-haskell-packages) for
instructions.

### Versioning & Changelog

During development
+ Make sure `CHANGELOG.md` is kept up-to-date with high-level, technical, but user-focused list of changes according to [keepachangelog](https://keepachangelog.com/en/1.0.0/)
+ Bump `UNRELEASED` version in `CHANGELOG.md` according to [semver](https://semver.org/)
+ Ensure `unstable` version of docker images is used in demo
  - `sed -i -e "s,\(ghcr.io/input-output-hk/hydra-[^:]*\):[^[:space:]]*,\1:unstable," demo/*`
+ All `hydra-` packages are versioned the same, at latest on release their versions are aligned.
+ Other packages are versioned independently of `hydra-` packages and keep a dedicated changelog.

### Releasing

To perform a release of next `<version>`:

1. Publish hydra scripts onto `preview`, `pre-prod`, and `mainnet` using the
   [smoke test][smoke-test] and update transaction ids in our documentation,
   examples and `testnets/<network/hydra-scripts-tx-id` files. This will also be
   the green light for the next step.
2. Replace `UNRELEASED` with a date in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) in CHANGELOG.md
3. run `./release.sh` with `<version>` and the just published `hydra-scripts-tx-id` from step 1
4. Create a github release page containing
   - The released changes (formatted) and giving credit where credit is due
   - Attach static binaries to the release (or link the CI artifact)
   - The just published `hydra-scripts-tx-id` from step 1

[smoke-test]: https://github.com/input-output-hk/hydra/actions/workflows/smoke-test.yaml

## Communication

We have several reporting and communication practices within the Hydra project.
Becoming one of the core contributors of the project includes participation in
core communication processes.

### Weekly update

At the end of each week, we provide updates to
[cardano-updates](https://input-output-hk.github.io/cardano-updates/tags/hydra),
which also serve as a basis for our monthly reports.

To write such an update:

1. Use the contributors tactical meeting agenda to collect bullet points on
   - **What did the team achieve this week**: past tense summary of done things
     (good: "Implemented..", bad: "Started working on.."); use the backlog and
     calendars to collect

   - **What are the goals of next week**: a short look-out onto the backlog and/or
     roadmap; ask each contributor what they would like to get done next week

2. Enrich the content with useful links and write a high-level summary. This
   should use a passive or "they"-style of writing. Tip: check out older updates
   for examples and/or use an AI language model to write it.

3. Create a entry blog and pull request it on
   [cardano-updates](https://github.com/input-output-hk/cardano-updates),
   putting other Hydra contributors as reviewers.
   
   - Don't forget to add yourself as author in the `authors.yml`.
