import PageHeading from "@/components/PageHeading"
import TodosList from "@/components/TodosList"
import { getTodos } from "@/api/todos"

export default async function Todos () {
    
    const todos = await getTodos()
    
    return <>
        <PageHeading>
            Todos
        </PageHeading>
        <TodosList todos={todos} />
    </>
}