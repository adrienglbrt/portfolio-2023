import Link from "next/link"
import Wrapper from "./wrapper"
import NavEntry from "./navEntry"

export default function NavBar() {
    return (
        <Wrapper>
            <nav className="flex items-center justify-between h-16 md:text-l font-mono uppercase">
                <Link href={"/"} className="md:font-medium">Adrien Galibert</Link>
                <ul className="flex flex-row items-center">
                    <NavEntry href={"/projects"}>Projects</NavEntry>
                </ul>
            </nav>
        </Wrapper>
    )
}