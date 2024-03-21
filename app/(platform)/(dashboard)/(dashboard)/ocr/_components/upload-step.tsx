"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  setAppStatusError,
  setAppStatusLoading,
  setAppStatusSuccess
} from "@/stores/steps-store"
import { Sparkles, UploadCloud } from "lucide-react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

export default function UploadStep() {

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (acceptedFiles.length > 0) {
      setAppStatusLoading()

      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);

      const res = await fetch('http://localhost:3000/api/ocr', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        setAppStatusError()
        return
      }

      const { id, url, text } = await res.json()

      // aqui podriamos pasar la informacion para mostrarla al usuario
      setAppStatusSuccess(text)
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('acceptedFiles', acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, isDragReject } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg"], "image/png": [".png"], "image/jpg": [".jpg"],
    }
  })

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center mb-5">
      <form className="w-full md:w-7/12 p-6 py-1 relative" onSubmit={handleSubmit}>
        <div
          className={cn(
            "p-10 w-full h-40 py-2 border-4 border-dotted bg-white/60 dark:bg-neutral-700/40 backdrop-blur-lg  rounded-xl flex flex-col gap-3 justify-center items-center cursor-pointer transition-transform duration-300",
            !isDragActive && "border-neutral-400/80 dark:border-neutral-600/80 hover:bg-neutral-200/60",
            isDragActive && "border-purple-400 dark:border-purple-600/80 dark:bg-purple-800/20 bg-purple-100/80",
            isDragReject && "border-red-500 dark:border-red-800 dark:bg-red-800/20 bg-red-100"
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} />

          <UploadCloud className="text-neutral-500/70 absolute top-3 left-3" size={34} />

          <div className={cn(
            "flex items-center gap-2 font-bold",
            isDragActive && "text-amber-500"
          )}>
            <Sparkles className="size-5" />
            <span>Extraccion de texto en imagenes</span>
          </div>

          {!isDragActive && (
            <p className="text-center text-xs opacity-60">
              Suelta y arrastra tu imagen aqui o haz clic para seleccionar una, formatos aceptados: .png, .jpg, .jpeg
            </p>
          )}

          {isDragActive && !isDragReject && (
            <p className="text-center text-sm opacity-60">Suelta tu Imagen aqui</p>
          )}

          {isDragReject && (
            <>
              <p className="text-center text-sm font-bold text-red-500">
                FORMATO DE IMAGEN INCORRECTO
              </p>
              <p className="text-center text-sm opacity-90 text-red-500">
                Solo se aceptan este tipo de formatos: .png, .jpg, .jpeg
              </p>
            </>
          )}
        </div>

        {acceptedFiles.length > 0 && (
          <div className="w-full bg-white/80 rounded-xl my-3 p-4 flex items-center justify-center gap-4 overflow-hidden border-2 border-neutral-300">
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt="Imagen seleccionada"
              className="h-20 w-40 rounded-lg object-cover"
            />
          </div>
        )}

        <Button
          className="w-full mt-4 rounded-xl border-2 border-neutral-500"
          type="submit"
          disabled={acceptedFiles.length === 0}
        >
          Reconocer texto
        </Button>
      </form >
    </div >
  )
}
