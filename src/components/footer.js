import Link from "next/link"

export default function Footer() {
    return (
        <footer className="pb-48 relative">
            <ul className="mb-4 font-mono uppercase">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
            </ul>
            <p className="font-mono uppercase">2023 © Adrien Galibert</p>
            <span className="font-bold text-[160px] md:text-[320px] absolute -right-16 -bottom-10 font-sans">Ag–</span>
        </footer>
    )
}