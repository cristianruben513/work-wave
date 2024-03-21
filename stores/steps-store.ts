import { create } from "zustand"

type StepsStore = {
  status: number,
  setStatus: (status: number) => void
  ocrText : string
}

export const APP_STATUS = {
  UPLOAD: 1,
  LOADING: 2,
  SUCCESS: 3,
  ERROR: -1
}

export const useStepsStore = create<StepsStore>((set) => ({
  status: APP_STATUS.UPLOAD,
  setStatus: (status: number) => set({ status }),
  ocrText: ''
}))

export function setAppStatusUpload() {
  useStepsStore.getState().setStatus(APP_STATUS.UPLOAD)
  useStepsStore.getState().ocrText = ''
}

export function setAppStatusLoading() {
  useStepsStore.getState().setStatus(APP_STATUS.LOADING)
}

export function setAppStatusError() {
  useStepsStore.getState().setStatus(APP_STATUS.ERROR)
}

export function setAppStatusSuccess(ocrText: string) {
  useStepsStore.getState().setStatus(APP_STATUS.SUCCESS)
  useStepsStore.getState().ocrText = ocrText
}
