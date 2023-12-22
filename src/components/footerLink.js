import Link from "next/link"

export default function FooterLink({ href, children }) {
    return (
        <li className="mb-10 overflow-hidden h-6">
            <div className="relative flex flex-col gap-0 translate-y-0 hover:-translate-y-6 transition duration-300">
                <Link href={href}>{children}</Link>
                <Link href={href}>{children} ↗</Link>
            </div>
        </li>
        )
}