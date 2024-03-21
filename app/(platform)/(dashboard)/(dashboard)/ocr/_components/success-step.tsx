"use client"

import { Button } from "@/components/ui/button";
import { useStepsStore } from "@/stores/steps-store";
import { CheckCheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SuccessStep() {
  const [text, setText] = useState<string | null>(null)
  const { ocrText } = useStepsStore()

  useEffect(() => {
    setText(null)
  }, [ocrText])

  const handleCopy = () => {
    navigator.clipboard.writeText(ocrText)
    setText(ocrText)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="bg-white border-4 rounded-xl border-neutral-200 p-5 dark:border-neutral-600">
        {ocrText}
      </div>

      <Button onClick={handleCopy}>
        {text ? (
          <>
            <CheckCheckIcon className="size-4 mr-2" />
            Texto Copiado
          </>
        ) : (
          <>
            <CopyIcon className="size-4 mr-2" />
            Copiar texto
          </>
        )}
      </Button>
    </div>
  )
}
