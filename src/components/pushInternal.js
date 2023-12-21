import Link from "next/link";

export default function PushInternal({ href, label }) {
    return (
        <Link href={href} className="block bg-pink pl-4 md:pl-8 pb-4 md:pb-8 pt-16 md:pt-48 rounded-l md:rounded-xl text-3xl md:text-6xl text-black font-medium">{label}</Link>
    )
}