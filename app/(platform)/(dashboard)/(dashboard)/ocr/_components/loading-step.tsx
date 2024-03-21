import { Loader } from "lucide-react";

export default function LoadingStep() {
  return (
    <div className="flex justify-center items-center gap-6 p-20">
      <Loader className="size-16 animate-spin" />
    </div>
  )
}
