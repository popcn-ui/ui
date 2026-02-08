# Contributing

Thanks for your interest in contributing to popcn/ui. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.

## Structure

This repository is structured as follows:

```
popcn-ui/
├── apps/v1/          # Next.js 15 documentation & showcase site
├── packages/popcn/   # CLI tool (popcn init / add / list)
├── turbo.json        # Turborepo config
└── package.json      # pnpm workspaces
```

| Path               | Description                                  |
| ------------------ | -------------------------------------------- |
| `apps/v1/app`      | The Next.js application for the website.     |
| `apps/v1/components` | The React components for the website.      |
| `apps/v1/registry` | The registry for the components.             |
| `packages/popcn`   | The `popcn` CLI package.                     |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/popcn-ui.git
```

### Navigate to project directory

```bash
cd popcn-ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the documentation site:

```bash
pnpm --filter=v1 dev
```

2. To run the `popcn` CLI package:

```bash
pnpm --filter=popcn dev
```

## Running the CLI Locally

To run the CLI locally, you can follow this workflow:

1. Start the dev server:

   ```bash
   pnpm dev
   ```

2. In another terminal tab, test the CLI by running:

   ```bash
   pnpm --filter=popcn dev
   ```

   To test the CLI in a specific app, use a command like:

   ```bash
   pnpm popcn <init | add | list> -c ~/Desktop/my-app
   ```

## Components

We use a registry system for developing components. You can find the source code for the components under `apps/v1/registry`. The components are organized by type (ui, blocks, examples).

When adding or modifying components, please ensure that:

1. You update the registry metadata in `registry/ui/*.json`.
2. You run `pnpm build:registry` to update the registry.
3. You keep `packages/popcn/src/utils/templates.ts` in sync with `apps/v1/styles/globals.css`.

### Design System: AuroraPop

popcn/ui uses the AuroraPop design system with gradient-driven, motion-rich components. Key concepts:

- **CSS Tokens**: Colors (`--ap-primary`, `--ap-aurora-{1,2,3}`), gradients, and animation variables
- **Theme Presets**: Cosmic, Sunset, Neon, Mono
- **Motion System**: `--ap-motion` toggle, `prefers-reduced-motion` support
- **Utility Classes**: `.bg-aurora`, `.shine-effect`, `.ap-hover-*`, `.ap-enter-*`

Please ensure all components respect `prefers-reduced-motion`.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation
- `build`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e. GitHub Actions)
- `chore`: all changes to the repository that do not fit into any of the above categories

e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.

## Linting & Formatting

```bash
pnpm lint          # Run ESLint
pnpm lint:fix      # Fix ESLint issues
pnpm format        # Format with Prettier
pnpm format:check  # Check formatting
```

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
