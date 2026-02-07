"use client"

import { TreeView, type TreeNode } from "@/components/ui/tree-view"

const treeData: TreeNode[] = [
  {
    id: "1",
    label: "Documents",
    children: [
      {
        id: "1-1",
        label: "Projects",
        children: [
          { id: "1-1-1", label: "Project A.pdf" },
          { id: "1-1-2", label: "Project B.pdf" },
        ],
      },
      {
        id: "1-2",
        label: "Reports",
        children: [
          { id: "1-2-1", label: "Q1 Report.pdf" },
          { id: "1-2-2", label: "Q2 Report.pdf" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Images",
    children: [
      { id: "2-1", label: "photo1.jpg" },
      { id: "2-2", label: "photo2.jpg" },
      { id: "2-3", label: "photo3.jpg" },
    ],
  },
  {
    id: "3",
    label: "Videos",
    children: [
      { id: "3-1", label: "video1.mp4" },
      { id: "3-2", label: "video2.mp4" },
    ],
  },
]

export function TreeViewDemo() {
  return (
    <div className="w-full max-w-md">
      <TreeView
        data={treeData}
        defaultExpanded={["1"]}
        onSelect={(nodeId) => {
          console.log("Selected:", nodeId)
        }}
      />
    </div>
  )
}
