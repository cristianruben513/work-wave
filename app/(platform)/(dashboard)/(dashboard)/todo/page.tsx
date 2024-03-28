"use client"
import 'regenerator-runtime/runtime'

import { Info } from "@/components/info"
import { useToDoStore } from "@/stores/todo-store"
import DialogAddToDo from "./_components/dialog-add"
import TodoItem from "./_components/todo-item"

export default function TodoPage() {
  const { todos, removeToDo, completeToDo } = useToDoStore()

  return (
    <div className="">
      <Info title="Tareas pendientes">
        <DialogAddToDo />
      </Info>

      <div className="grid grid-cols-1 pt-4 gap-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={() => removeToDo(todo.id)}
            handleComplete={() => completeToDo(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}
