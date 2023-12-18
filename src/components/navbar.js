import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-8 md:text-xl">
            <Link href={"/"} className="md:font-medium">Adrien Galibert</Link>
            <div>
                <Link href={"/projects"}>Projects</Link>
            </div>
        </nav>
    )
}