"use client"

import { FileUpload } from "@/components/ui/file-upload"

export function FileUploadDemo() {
  return (
    <div className="w-full max-w-md">
      <FileUpload
        accept="image/*,.pdf,.doc,.docx"
        multiple
        maxSize={5 * 1024 * 1024} // 5MB
        onFilesChange={(files) => {
          console.log("Files changed:", files)
        }}
      />
    </div>
  )
}
