import { Loader } from 'lucide-react';

export default function Loading () {
    return <section className='w-full min-h-[100vh-5rem] grid place-items-center'>
        <Loader 
            size={40}
            className='text-slate-900 animate-spin'
        />
    </section>
} 