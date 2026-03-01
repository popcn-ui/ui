import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    clean: true,
    shims: true,
    banner: {
      js: "#!/usr/bin/env node",
    },
  },
  {
    entry: ["src/mcp/index.ts"],
    format: ["esm"],
    dts: true,
    clean: false,
    shims: true,
    outDir: "dist/mcp",
  },
])
