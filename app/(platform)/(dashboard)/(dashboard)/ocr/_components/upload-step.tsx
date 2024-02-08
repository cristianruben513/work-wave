"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  setAppStatusError,
  setAppStatusLoading,
  setAppStatusSuccess
} from "@/stores/steps-store"
import { DownloadCloud, Sparkles } from "lucide-react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

export default function UploadStep() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (acceptedFiles.length > 0) {
      setAppStatusLoading()

      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);

      const rest = await fetch('http://localhost:3000/api/ocr', {
        method: 'POST',
        body: formData
      })

      if (!rest.ok) {
        setAppStatusError()
        return
      }

      // aqui podriamos pasar la informacion para mostrarla al usuario
      setAppStatusSuccess()

      // const { id, url, pages } = await res.json()
      // setAppStatusChatMode({ id, url, pages })
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
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <form className="w-full md:w-7/12 p-6" onSubmit={handleSubmit}>
        <div
          className={cn(
            "p-10 w-full h-72 py-5 border-4 border-dotted bg-white/60 backdrop-blur-lg  rounded-xl flex flex-col gap-3 justify-center items-center cursor-pointer transition-transform duration-300",
            !isDragActive && "border-neutral-400/80 hover:bg-neutral-200/60",
            isDragActive && "border-purple-400 bg-purple-100/80",
            isDragReject && "border-red-500 bg-red-100"
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} />

          <DownloadCloud className="text-neutral-500/70" size={64} />

          <div className={cn(
            "flex items-center gap-2 font-bold",
            isDragActive && "text-amber-500"
          )}>
            <Sparkles className="size-5" />
            <span>Extraccion de texto en imagenes</span>
          </div>

          {!isDragActive && (
            <p className="text-center text-sm opacity-60">
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
