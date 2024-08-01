type PageHeadingProps = {
    children?: React.ReactNode
}

export default function PageHeading ({children}: PageHeadingProps) {
    return <h1 className="text-4xl text-black font-bold">
        {children}
    </h1>
}