"use client"

interface PropDef {
  name: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  props: PropDef[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-border/50 border-b">
            <th className="px-4 py-3 text-left font-semibold">Prop</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Default</th>
            <th className="px-4 py-3 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-border/50 divide-y">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="text-primary px-4 py-3 font-mono">{prop.name}</td>
              <td className="text-muted-foreground px-4 py-3 font-mono">{prop.type}</td>
              <td className="text-muted-foreground px-4 py-3 font-mono">{prop.default || "-"}</td>
              <td className="text-muted-foreground px-4 py-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
