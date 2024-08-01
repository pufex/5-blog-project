import { notFound } from "next/navigation"
import { Suspense } from "react"
import PageHeading from "@/components/PageHeading"
import UserInfo from "./components/UserInfo"
import PostsList from "@/components/PostsList"
import TodosList from "@/components/TodosList"

import { getUserById } from "@/api/users"
import { getUsersPosts } from "@/api/posts"
import { getUsersTodos } from "@/api/todos"

export default async function User ({params: {user_id}}: {params: {user_id: string}}) {
    
    const user = await getUserById(user_id)
    if(!user || !user.id)
        return notFound()

    return <>
        <header>
            <PageHeading>
                {user.name}
            </PageHeading>
            <span className="text-lg text-black font-semibold mt-4">
                {user.email}
            </span>
            <UserInfo user={user} />
        </header>
        <section>
            <h1 className="text-xl text-black font-bold mb-4">
                Posts
            </h1>
            <Suspense fallback="Loading user's posts...">
                <UsersPosts userId={user.id} />
            </Suspense>
        </section>
        <section>
            <h1 className="text-xl text-black font-bold py-4">
                Todos
            </h1>
            <Suspense fallback="Loading todos...">
                <UsersTodos userId={user.id} />
            </Suspense>
        </section>
    </>
}

type UsersIdProp = {
    userId: string
}

async function UsersPosts ({userId}: UsersIdProp){
    const usersPosts = await getUsersPosts(userId)
    return <PostsList posts={usersPosts} />
}

async function UsersTodos ({userId}: UsersIdProp){
    const usersTodos = await getUsersTodos(userId)
    return <TodosList todos={usersTodos} />
}