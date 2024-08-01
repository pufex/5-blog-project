export type CommentType = {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string,
}

export const getComments = async (postId: string): Promise<CommentType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const comments = await response.json() as CommentType[]
    return comments
}