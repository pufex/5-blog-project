"use client"

import { Button } from "./ui/button" 
import Link from "next/link"

type VisitProfileButtonProps = {
    userId: string
}

export default function VisitProfileButton ({userId}: VisitProfileButtonProps) {
    return <Button asChild>
        <Link href={`/users/${userId}`}>
            View
        </Link>
    </Button>
}