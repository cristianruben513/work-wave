import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { type Note } from "@/stores/notes-store"
import { EditIcon, Trash } from "lucide-react"

interface Props {
  note: Note
  handlerDelete: () => void
}

export default function NoteItem({ note, handlerDelete }: Props) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="h-full backdrop-blur-[1px]">
          <CardHeader className="-mt-2">
            <CardTitle className="text-lg">{note.title}</CardTitle>
          </CardHeader>
          <CardContent className="-mt-4 text-sm">
            <Badge variant="default" className="capitalize">#{note.subject}</Badge>
            <p className="mt-4 text-pretty leading-6">{note.description}</p>
          </CardContent>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuLabel>
          Acciones
        </ContextMenuLabel>
        <ContextMenuSeparator></ContextMenuSeparator>
        <ContextMenuItem onClick={handlerDelete}>
          <Trash className="size-4 mr-2" />
          Eliminar
        </ContextMenuItem>
        <ContextMenuItem>
          <EditIcon className="size-4 mr-2" />
          Editar
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}