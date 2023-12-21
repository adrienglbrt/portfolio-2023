import Link from "next/link"
import Wrapper from "./wrapper"

export default function Navbar() {
    return (
        <Wrapper>
            <nav className="flex items-center justify-between h-16 md:text-l font-mono uppercase">
                <Link href={"/"} className="md:font-medium">Adrien Galibert</Link>
                <div>
                    <Link href={"/projects"}>Projects</Link>
                </div>
            </nav>
        </Wrapper>
    )
}