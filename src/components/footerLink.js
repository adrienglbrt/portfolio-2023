import Link from "next/link"

export default function FooterLink({ href, children }) {
    return (
        <li className="mb-10"><Link href={href}>{children}</Link></li>
        )
}