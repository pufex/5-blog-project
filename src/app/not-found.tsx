
export default function NotFound () {
    return <section className="w-full min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-bold pb-8">
            Page not found!
        </h1>
        <p className="text-xl text-black font-medium">
            The page you're looking at doesn't exist under the following address.
        </p>
    </section>
}