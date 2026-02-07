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
          <tr className="border-b border-border/50">
            <th className="text-left py-3 px-4 font-semibold">Prop</th>
            <th className="text-left py-3 px-4 font-semibold">Type</th>
            <th className="text-left py-3 px-4 font-semibold">Default</th>
            <th className="text-left py-3 px-4 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="py-3 px-4 font-mono text-primary">{prop.name}</td>
              <td className="py-3 px-4 font-mono text-muted-foreground">
                {prop.type}
              </td>
              <td className="py-3 px-4 font-mono text-muted-foreground">
                {prop.default || "-"}
              </td>
              <td className="py-3 px-4 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
