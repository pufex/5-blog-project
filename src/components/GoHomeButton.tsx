import { Button } from "./ui/button"
import { redirect } from "next/navigation"

export default function GoHomeButton () {
    return <Button onClick={() => redirect("/")}>
        Go home!
    </Button>
}