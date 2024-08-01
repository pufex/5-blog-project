"use client"

import { Button } from "./ui/button" 
import Link from "next/link"

type VisitPostButtonProps = {
    postId: string
}

export default function VisitPostButton ({postId}: VisitPostButtonProps) {
    return <Button asChild>
        <Link href={`/posts/${postId}`}>
            View
        </Link>
    </Button>
}