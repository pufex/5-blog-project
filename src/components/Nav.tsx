import Link from "next/link"

export default function Nav () {
    return <>
        <nav className="fixed w-full h-20 bg-slate-800 flex items-center justify-between px-4">
            <Link 
                href="/"
                className="text-2xl text-white font-bold"
            >
                My app
            </Link>
            <div className="flex items-center gap-2">
                <Link
                    href="/posts"
                    className="text-xl font-semibold text-white"
                >
                    Posts
                </Link>
                <Link
                    href="/users"
                    className="text-xl font-semibold text-white"
                >
                    Users
                </Link>
                <Link
                    href="/todos"
                    className="text-xl font-semibold text-white"
                >
                    Todos
                </Link>
            </div>
        </nav>
        <div className="w-full h-20" />
    </>


}