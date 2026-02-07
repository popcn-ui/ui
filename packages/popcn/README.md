# popcn

A CLI for adding components to your project.

## init

Use the `init` command to initialize popcn/ui in your project.

```bash
npx popcn init
```

### Options

- `-y, --yes` — Skip confirmation prompts
- `-d, --defaults` — Use default configuration
- `-f, --force` — Force overwrite existing files

## add

Use the `add` command to add components to your project.

```bash
npx popcn add button
npx popcn add card badge avatar
```

### Options

- `-y, --yes` — Skip confirmation prompts
- `-o, --overwrite` — Overwrite existing files
- `-p, --path <path>` — Custom path for components

## list

Use the `list` command to list all available components.

```bash
npx popcn list
npx popcn list --json
```

## Documentation

Visit [https://popcnui.com/docs/cli](https://popcnui.com/docs/cli) to view the documentation.

## License

Licensed under the [MIT license](https://github.com/popcn/ui/blob/main/LICENSE.md).
