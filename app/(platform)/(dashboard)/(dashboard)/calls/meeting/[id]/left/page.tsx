import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: PageProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-bold">Has abandonado esta reunión.</p>
      <Link
        href={`/calls/meeting/${id}`}
        className={cn(buttonClassName, "bg-gray-500 hover:bg-gray-600")}
      >
        Volver a unirme
      </Link>
    </div>
  );
}
