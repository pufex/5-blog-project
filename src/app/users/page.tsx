import { Suspense } from "react"
import PageHeading from "@/components/PageHeading"
import UsersList from "@/components/UsersList"
import { getUsers } from "@/api/users"

export default async function Users () {
    return <>
        <PageHeading>
            Users
        </PageHeading>
        <Suspense fallback="Loading users...">
            <AllUsers />
        </Suspense>
    </>
}

async function AllUsers () {
    const users = await getUsers()

    return <UsersList users={users} />
}