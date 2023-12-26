import Link from "next/link";

export default function PushDefault({ href, children}) {
    return (
        <Link href={href} className="group block bg-pink overflow-hidden w-full">
            <div className="relative h-40 lg:h-60">
                    <div className="absolute bottom-0 pl-4 md:pl-8 pb-4 md:pb-8 flex items-center">
                        <p className="text-3xl md:text-5xl text-black font-medium group-hover:translate-x-2 transition duration-300">{children}</p>
                        <span className="text-3xl md:text-5xl text-black font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition duration-300">→</span>
                    </div>
            </div>
        </Link>
    )
}