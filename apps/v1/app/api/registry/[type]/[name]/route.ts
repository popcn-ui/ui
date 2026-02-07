import { NextRequest, NextResponse } from "next/server"
import * as fs from "fs"
import * as path from "path"

type RouteParams = {
  params: Promise<{ type: string; name: string }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { type, name } = await params

  const validTypes = ["ui", "styles", "themes"]
  if (!validTypes.includes(type)) {
    return NextResponse.json(
      { error: `Invalid type: ${type}. Must be one of: ${validTypes.join(", ")}` },
      { status: 400 }
    )
  }

  const filePath = path.join(process.cwd(), "public", "r", type, `${name}.json`)

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: `Component "${name}" not found in ${type}` },
      { status: 404 }
    )
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  return NextResponse.json(data)
}
