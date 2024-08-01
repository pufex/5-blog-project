export type TodoType = {
    userId: string,
    id: string,
    title: string,
    completed: boolean
}

export const getTodos = async (): Promise<TodoType[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json() as TodoType[]
    return todos
}

export const getUsersTodos = async (userId: string): Promise<TodoType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    const usersTodos = await response.json() as TodoType[]
    return usersTodos

}
