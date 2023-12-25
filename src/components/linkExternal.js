import Link from "next/link";

export default function LinkExternal({children, href}) {
    return (
        <Link href={href} target="_blank" className="inline-block text-2xl md:text-4xl font-medium after:content-['_↗'] after:font-black after:leading-12 after:text-xl after:md:text-2xl hover:text-red transition duration-500">
            {children}
        </Link>
    )
}