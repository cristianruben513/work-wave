"use client"
import 'regenerator-runtime/runtime'

import { Info } from "@/components/info"
import { useNotesStore } from "@/stores/notes-store"
import DialogAddNote from "./_components/dialog-add"
import NoteItem from "./_components/note-item"

export default function NotesPage() {
  const { notes, removeNote } = useNotesStore()

  return (
    <div>
      <Info title="Notas de clase">
        <DialogAddNote />
      </Info>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-3">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            handlerDelete={() => removeNote(note.id)}
          />
        ))}
      </div>
    </div>
  )
}