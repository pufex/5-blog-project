import type { UserType } from "@/api/users";
import { 
    NamedList, 
    NamedListItem,
    NamedListKey,
    NamedListValue
} from "@/components/NamedList"

type UserInfoProps = {
    user: UserType
}

export default function UserInfo ({user}: UserInfoProps) {
    return <NamedList>
        <NamedListItem>
            <NamedListKey>
                Comapny
            </NamedListKey>
            <NamedListValue>
                {user.company.name}
            </NamedListValue>
        </NamedListItem>
        <NamedListItem>
            <NamedListKey>
                Website
            </NamedListKey>
            <NamedListValue>
                {user.website}
            </NamedListValue>
        </NamedListItem>
        <NamedListItem>
            <NamedListKey>
                Address
            </NamedListKey>
            <NamedListValue>
                {`${user.address.city} ${user.address.street} ${user.address.suite} ${user.address.zipcode}`}
            </NamedListValue>
        </NamedListItem>
    </NamedList>
}