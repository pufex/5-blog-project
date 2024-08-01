import type { UserType } from "@/api/users";
import VisitProfileButton from "./VisitProfileButton";

type UsersListProps = {
    users: UserType[]
}

export default function UsersList ({users}: UsersListProps) {
    return !users.length
        ? <h1 className="text-2xl text-black text-center my-4 font-semibold">
            No users to display!
        </h1>
        : <ul className="grid grid-cols-2 gap-4 mt-4">
            {
                users.map(user => (
                    <li
                        key={user.id}
                        className="w-full h-full bg-white"
                    >
                         <h2 className="h-16 w-full p-4 text-2xl text-black text-center font-semibold">
                            {user.name}
                         </h2>
                         <ul className="flex flex-col w-full p-4">
                            <li className="text-lg text-black font-medium">
                                {user.address.city}
                            </li>
                            <li className="text-lg text-black font-medium">
                                {user.website}
                            </li>
                            <li className="text-lg text-black font-medium">
                                {user.email}
                            </li>
                         </ul>
                         <div className="w-full h-16 p-4 flex items-center justify-end">
                            <VisitProfileButton userId={user.id} />
                         </div>
                    </li>
                ))
            }
        </ul>
}