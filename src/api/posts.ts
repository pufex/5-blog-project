export type PostType = {
    userId: string,
    id: string,
    title: string,
    body: string,
}

export const getPosts = async (): Promise<PostType[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json() as PostType[]
    return posts
}

export const getUsersPosts = async (userId: string): Promise<PostType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const userPosts = await response.json()
    return userPosts
}

export const getPostById = async (id: string): Promise<PostType> => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    console.log(url)
    const response = await fetch(url)
    const post = await response.json() as PostType
    return post
}   