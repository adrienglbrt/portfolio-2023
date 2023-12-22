import Link from "next/link";

export default function Button({ href, children }) {
    return (
        <Link href={href} className="group inline-block border-2 border-black pl-6 pr-4 pt-2 pb-2 rounded-xl">
            <div className="">
                <span className="font-medium text-xl">{children}</span> <span className="font-bold text-l">↗</span>
            </div>
        </Link>
    )
}