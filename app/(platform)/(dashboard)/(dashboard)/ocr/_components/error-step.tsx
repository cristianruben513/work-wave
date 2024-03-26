import { FileWarning } from "lucide-react";

export default function ErrorStep() {
  return (
    <div className="flex justify-center items-center gap-6 p-20">
      <FileWarning className="size-6" />
      Error
    </div>
  )
}