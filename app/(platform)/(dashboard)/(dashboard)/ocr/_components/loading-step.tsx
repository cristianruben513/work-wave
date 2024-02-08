import { Loader } from "lucide-react";

export default function LoadingStep() {
  return (
    <div className="flex justify-center items-center gap-6">
      <Loader className="size-6 animate-spin" />
      Cargando
    </div>
  )
}