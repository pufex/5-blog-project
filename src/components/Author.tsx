import { getUserById } from "@/api/users"
import { Suspense } from "react"
import Link from "next/link"

type AuthorProps = {
    id: string
}

export default async function Author ({id}: AuthorProps) {
    return <span className="inline text-xl">
        By: 
        <Suspense fallback="Loading author...">
            <Username id={id} />
        </Suspense>
    </span>
}

async function Username ({id}: AuthorProps) {
    const author = await getUserById(id)
    if(author && author.id)
    return <Link href={`/users/${author.id}`}>
        {author.name}
    </Link>

    else
    return "User not found."
}