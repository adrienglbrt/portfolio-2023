import Link from "next/link";

export default function NavEntry({ href, children }) {
    return (
        <li className="ml-12 overflow-hidden h-6">
            <div className="relative flex flex-col gap-0 translate-y-0 hover:-translate-y-6 transition duration-300">
                <Link href={href} className="">{children}</Link>
                <Link href={href} className="">{children}</Link>
            </div>
        </li>
    )
}