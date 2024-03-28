"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToDoStore } from "@/stores/todo-store"
import { LoaderIcon, MicIcon, PlusIcon } from "lucide-react"
import { useEffect, useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { toast } from "sonner"

export default function DialogAddToDo() {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "es-ES" });

  const { addTodo } = useToDoStore()

  
  useEffect(() => {
    setTitle(transcript)
  }, [transcript])

  useEffect(() => {
    setError(false)
    if (!title) {
      setError(true)
    }
  }, [title])

  const save = () => new Promise((resolve) => setTimeout(resolve, 2000));

  const handleAddTodo = async () => {
    if (error) return

    setLoading(true)
    addTodo({
      id: crypto.randomUUID(),
      title,
      complete: false
    })
    await save()
      .then(() => setOpen(false))
      .catch(() => toast.error("Ocurrió un error al guardar la tarea."))
      .finally(() => setLoading(false))
    setTitle('')
    toast.success("Tarea guardada correctamente.")
    setError(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="size-4 mr-2" />
          Agregar tarea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Agregar nueva tarea</DialogTitle>
          <DialogDescription>
            Asegurate de ingresar el titulo de tu tarea.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <Input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {browserSupportsSpeechRecognition && (
            <Button
              variant="secondary"
              onTouchStart={startListening}
              onMouseDown={startListening}
              onTouchEnd={SpeechRecognition.stopListening}
              onMouseUp={SpeechRecognition.stopListening}
            >
              <MicIcon className="size-4 mr-2 " />
              {listening ? 'Escuchando...' : 'Empezar dictado'}
            </Button>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={error || loading} onClick={handleAddTodo}>
            {loading && (
              <LoaderIcon className="size-4 mr-2 animate-spin" />
            )}
            Guardar Tarea
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}