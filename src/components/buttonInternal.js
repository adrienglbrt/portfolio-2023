import Link from "next/link";

export default function ButtonInternal({ href, label }) {
    return (
        <Link href={href} className="inline-block border-2 border-black pl-4 pr-4 pt-2 pb-2 rounded-xl font-medium">{label}</Link>
    )
}