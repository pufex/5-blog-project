import { Suspense } from "react"
import { getComments } from "@/api/comments"

import AuthorByEmail from "@/components/AuthorByEmail"

type CommentsProps = {
    postId: string
}

export default function Comments ({postId}: CommentsProps) {
    return <Suspense fallback="Loading comments...">
        <CommentsList postId={postId} />
    </Suspense>
}

const CommentsList = async ({postId}: CommentsProps) => {
    console.log(postId)
    const comments = await getComments(postId)

    return !comments.length
        ? <h1 className="text-3lx my-4 text-center text-black font-bold">
            There is no comments to display!
        </h1>
        : <ul className="flex flex-col gap-4">
            {
                comments.map((comment) => (
                    <li 
                        key={comment.id}
                        className="p-4 bg-white"
                    >
                        <AuthorByEmail email={comment.email} />
                        <p className="mt-4 text-base text-black font-medium">
                            {comment.body}
                        </p>
                    </li>
                ))
            }
        </ul>
}