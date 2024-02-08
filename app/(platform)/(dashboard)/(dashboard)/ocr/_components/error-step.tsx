import { FileWarning } from "lucide-react";

export default function ErrorStep() {
  return (
    <div className="flex h-full justify-center items-center gap-6">
      <FileWarning className="size-6" />
      Error
    </div>
  )
}