import Link from "next/link"
import Wrapper from "./wrapper"

export default function Footer() {
    return (
        <footer className="mt-32 md:mt-80 relative overflow-hidden bg-black text-yellow">
            <Wrapper>
                <div className="flex flex-col justify-between min-h-[40vh] md:min-h-[60vh] pt-8 pb-8 md:pt-16 md:pb-16">
                    <ul className="mb-4 font-mono uppercase">
                        <li className="mb-10">Email</li>
                        <li className="mb-10"><Link href="#">Instagram</Link></li>
                        <li className="mb-10"><Link href="#">LinkedIn</Link></li>
                        <li className="mb-10"><Link href="#">GitHub</Link></li>
                    </ul>
                    <p className="block font-mono uppercase">2023 © Adrien Galibert</p>
                </div>
            </Wrapper>
            <span className="hidden md:block font-bold md:text-[240px] lg:text-[320px] absolute -right-32 -bottom-10 md:-bottom-16 font-sans">Ag–</span>
        </footer>
    )
}