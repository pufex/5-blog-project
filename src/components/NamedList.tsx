export type ChildrenProp = {
    children: React.ReactNode
}

export const NamedList = ({children}: ChildrenProp) => {
    return <ul className="w-full flex flex-col my-6">
        {children}
    </ul>
}


export const NamedListItem = ({children}: ChildrenProp) => {
    return <li className="inline-block w-full text-xl text-black">
    {children}
</li>
}

export const NamedListKey = ({children}: ChildrenProp) => {
    return <span className="font-semibold mr-1">
        {children}
    </span>
}

export const NamedListValue = ({children}: ChildrenProp) => {
    return <span className="font-medium">
        {children}
    </span>
}