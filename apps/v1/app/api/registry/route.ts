import { NextResponse } from "next/server"
import * as fs from "fs"
import * as path from "path"

export async function GET() {
  const indexPath = path.join(process.cwd(), "public", "r", "index.json")

  if (!fs.existsSync(indexPath)) {
    return NextResponse.json(
      { error: "Registry not built. Run `pnpm build:registry` first." },
      { status: 404 }
    )
  }

  const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"))
  return NextResponse.json(index)
}
