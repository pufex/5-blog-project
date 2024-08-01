import { Suspense } from "react"
import Link from "next/link"
import { getUserByEmail } from "@/api/users"

type AuthorByEmailProps = {
    email: string
}

export default async function AuthorByEmail ({email}: AuthorByEmailProps) {
    return <span className="inline text-xl">
        By: 
        <Suspense fallback="Loading author...">
            <Username email={email} />
        </Suspense>
    </span>
}

async function Username ({email}: AuthorByEmailProps) {
    console.log(email)
    const author = await getUserByEmail(email)
 
    return <Link href={`/users/email`}>
        Some author (it works but stupid API)
    </Link>
}