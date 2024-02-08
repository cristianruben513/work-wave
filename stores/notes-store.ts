import { create } from "zustand"

export type Note = {
  id: string
  title: string
  subject: string
  description: string
}

type NotesStore = {
  notes: Note[]
  addNote: (note: Note) => void
  removeNote: (id: string) => void
}

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [
    {
      id: "1",
      title: 'Realizar una nota',
      subject: 'Matemáticas',
      description: 'Esta es una descripción de la nota que se va a realizar, aqui puedes escribir lo que quieras que describa mejor la tarea que tienes.'
    }
  ],
  addNote: (note) =>
    set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}))