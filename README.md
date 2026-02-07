# popcn/ui

**AuroraPop Design System** - A gradient-driven, motion-rich component library for modern React applications.

## Features

- Gradient-driven aesthetics with aurora-inspired color schemes
- Motion-rich components with pop, float, snap, and shine animations
- Theme presets: Cosmic (default), Sunset, Neon
- Light/Dark mode support
- CLI tool for easy component installation

## Getting Started

### Install the CLI

```bash
npm install -g popcn
```

### Initialize in your project

```bash
popcn init
```

### Add components

```bash
popcn add button
```

## Development

This is a monorepo managed with pnpm and Turborepo.

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build
```

## Structure

- `apps/v1` - Documentation site (popcnui.com)
- `packages/popcn` - CLI tool
- `templates/` - Starter templates

## License

MIT
