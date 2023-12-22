import Link from "next/link";

export default function PushDefault({ href, children }) {
    return (
        <Link href={href} className="relative group block bg-pink pl-4 md:pl-8 pb-4 md:pb-8 pt-16 md:pt-48 rounded-l md:rounded-xl overflow-hidden">
            <div className="before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-overlay before:opacity-0 group-hover:before:opacity-100 before:transition before:duration-300">
                <div className="flex items-center">
                    <p className="text-3xl md:text-6xl text-black font-medium group-hover:translate-x-2 transition duration-300">{children}</p>
                    <span className="text-3xl md:text-6xl text-black font-medium opacity-0 -translate-x-0 group-hover:opacity-100 group-hover:translate-x-4 transition duration-300">→</span>
                </div>
            </div>
        </Link>
    )
}