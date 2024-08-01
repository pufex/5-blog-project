import type { PostType } from "@/api/posts"
import VisitPostButton from "./VisitPostButton"

type PostsListProps = {
    posts: PostType[]
}

export default function PostsList({posts}: PostsListProps){
    return <ul className="mt-6 w-full grid grid-cols-2 gap-4">
        {
            posts.map(post => (
                <li 
                    key={post.id} 
                    className="flex flex-col justify-between w-full h-full bg-white"
                >
                    <div>
                        <h1 className="h-16 text-2xl font-semibold text-black p-4 text-nowrap overflow-hidden">
                        {post.title} 
                        </h1>
                        <p className="p-4 overflow-hidden">
                            {
                                post.body.length <= 200
                                    ? post.body
                                    : post.body.substring(0, 200) + "..."
                            }
                        </p>
                    </div>
                    <div className="h-16 w-full p-4 flex items-center justify-end">
                        <VisitPostButton postId={post.id} />
                    </div>
                </li>
            ))
        }
    </ul>
}