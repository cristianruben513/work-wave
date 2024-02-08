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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNotesStore } from "@/stores/notes-store"
import { FileWarning, PlusIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function DialogAddNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subject, setSubject] = useState('')
  const [error, setError] = useState(false)

  const { addNote } = useNotesStore()

  const handleChangeSubject = (value: string) => {
    setSubject(value)
    console.log(value)
  }

  useEffect(() => {
    setError(false)
    if (!title || !description || !subject) {
      setError(true)
    }
  }, [title, description, subject])

  const handleAddNote = () => {
    if (error) return

    addNote({
      id: crypto.randomUUID(),
      title,
      subject,
      description,
    })
    setTitle('')
    setDescription('')
    toast.success("Nota guardada correctamente.")
    setError(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="size-4 mr-2" />
          Agregar Nota
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Agregar nota de clase</DialogTitle>
          <DialogDescription>
            Asegurate de ingresar un título y una descripción para tu nota.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <Input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select value={subject} onValueChange={handleChangeSubject}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una materia" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Materia de clase</SelectLabel>
                <SelectItem value="matematicas">Matematicas</SelectItem>
                <SelectItem value="biologia">Biologia</SelectItem>
                <SelectItem value="computacion">Computacion</SelectItem>
                <SelectItem value="historia">Historia</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {error && (
          <div className="flex items-center justify-end">
            <FileWarning className="size-4 mr-2 text-red-500" />
            <p className="text-red-500 text-sm">
              Necesitas ingresar un título y una descripción.
            </p>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={error} onClick={handleAddNote}>
            Guardar Nota
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}