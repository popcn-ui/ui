import type { Metadata } from "next"
import { FileUploadDemo } from "@/components/showcase/file-upload-demo"

export const metadata: Metadata = {
  title: "File Upload",
  description: "File upload component with drag and drop support",
}

export default function FileUploadPage() {
  return (
    <div className="relative">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">File Upload</h1>
          <p className="text-muted-foreground text-lg">
            A file upload component with drag and drop support, file validation, and preview.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Example</h2>
            <div className="border-border/60 bg-background/60 rounded-lg border p-6 backdrop-blur-md">
              <FileUploadDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
