import { Suspense } from "react"
import PageHeading from "@/components/PageHeading"
import PostsSkeleton from "./components/PostsSkeleton"
import PostsList from "@/components/PostsList"

import { getPosts } from "@/api/posts"

export default function Posts () {
    return <>
        <PageHeading>
            Posts
        </PageHeading>
        <Suspense fallback={<PostsSkeleton />}>
            <AllPosts />
        </Suspense>
    </>
}


const AllPosts = async () => {
    
    const posts = await getPosts()
    
    return <PostsList posts={posts}/>
}