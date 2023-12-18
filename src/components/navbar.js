import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-8">
            <Link href={"/"}>Adrien Galibert</Link>
            <div>
                <Link href={"/projects"}>Projects</Link>
            </div>
        </nav>
    )
}