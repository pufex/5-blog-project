import type { TodoType } from "@/api/todos"
import { cn } from "@/lib/utils"

type TodosListProps = {
    todos: TodoType[]
}

export default function TodosList({todos}: TodosListProps){
    return !todos.length
        ? <h1 className="text-center text-black text-2xl font-semibold my-4">
            No todos to display!
        </h1>
        : <ul className="flex flex-col gap-1">
            {
                todos.map(todo => (
                    <li
                        key={todo.id}
                        className={cn(
                            "text-black text-lg font-semibold",
                            todo.completed ? "line-through" : ""
                        )}
                    >
                        {todo.title}
                    </li>
                ))
            }
        </ul>
}