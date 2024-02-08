"use client"

import { APP_STATUS, useStepsStore } from "@/stores/steps-store"
import ErrorStep from "./_components/error-step"
import LoadingStep from "./_components/loading-step"
import SuccessStep from "./_components/success-step"
import UploadStep from "./_components/upload-step"

export default function TextRecognitionPage() {
  const { status } = useStepsStore()

  return (
    <>
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
    </>
  )
}
