import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/components/ui/context-menu"
import { type Todo } from "@/stores/todo-store"
import { Trash } from "lucide-react"

interface Props {
  todo: Todo
  handleDelete: () => void
  handleComplete: () => void
}

export default function TodoItem({ todo, handleDelete, handleComplete }: Props) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="h-full backdrop-blur-[1px]">
          <CardHeader>
            <div className="flex items-center gap-5">
              <Checkbox
                onCheckedChange={handleComplete}
                checked={todo.complete}
              />
              <CardTitle className="text-lg">{todo.title}</CardTitle>
            </div>
          </CardHeader>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuLabel>
          Acciones
        </ContextMenuLabel>
        <ContextMenuSeparator></ContextMenuSeparator>
        <ContextMenuItem onClick={handleDelete}>
          <Trash className="size-4 mr-2" />
          Eliminar
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}