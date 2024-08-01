import PageHeading from "@/components/PageHeading"
import Author from "@/components/Author"
import Comments from "./components/Comments"

import { notFound } from "next/navigation"
import { getPostById } from "@/api/posts"


export default async function Post ({params: {post_id}}: {params: {post_id: string}}) {

    const post = await getPostById(post_id)
    console.log(post)
    if(!post.id) return notFound()

    return <>
        <header>
            <PageHeading>
                {post.title}
            </PageHeading>
            <br />
            <Author id={post.userId} />
            <p className="text-lg text-black font-medium">
                {post.body}
            </p>
        </header>
        <section>
            <h1 className="text-2xl font-semibold text-black py-4">
                Comments
            </h1>
            <Comments postId={post.id} />
        </section>
    </>
}
