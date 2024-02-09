"use client"

import { APP_STATUS, useStepsStore } from "@/stores/steps-store"
import ErrorStep from "./_components/error-step"
import LoadingStep from "./_components/loading-step"
import SuccessStep from "./_components/success-step"
import UploadStep from "./_components/upload-step"
import { Info } from "@/components/info"

export default function TextRecognitionPage() {
  const { status } = useStepsStore()

  return (
    <div className="h-full flex flex-col gap-4">
      <Info title="Reconocimiento de texto" />

      <div className="flex justify-center items-center rounded-xl backdrop-blur-[1px] border-4 border-neutral-300/60 dark:border-neutral-700/40 bg-neutral-200/30 dark:bg-neutral-800/40 flex-1">
        {status === APP_STATUS.UPLOAD && (
          <UploadStep />
        )}
        {status === APP_STATUS.LOADING && (
          <LoadingStep />
        )}
        {status === APP_STATUS.SUCCESS && (
          <SuccessStep />
        )}
        {status === APP_STATUS.ERROR && (
          <ErrorStep />
        )}
      </div>
    </div>

  )
}
