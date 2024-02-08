import { create } from "zustand"

export type Todo = {
  id: string
  title: string
  complete: boolean
}

type NotesStore = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeToDo: (id: string) => void
  completeToDo: (id: string) => void
}

export const useToDoStore = create<NotesStore>((set) => ({
  todos: [
    {
      id: "1",
      title: 'Realizar una nota',
      complete: false
    }
  ],
  addTodo: (todo) =>
    set((state) => ({ todos: [...state.todos, todo] })),
  removeToDo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  completeToDo: (id) =>
    set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : todo) })),
}))