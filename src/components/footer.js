import Wrapper from "./wrapper"
import FooterLink from "./footerLink"
import FooterEmail from "./footerEmail"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Footer() {
    const footerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0,1], [0,1])
    const translateY = useTransform(scrollYProgress, [0, 1], [-300, 0])
  
    return (
        <footer className="mt-32 md:mt-80 relative overflow-hidden bg-black text-yellow" ref={footerRef}>
            <motion.div
                style={{
                    opacity,
                    translateY,
                }}
            >
                <Wrapper>
                    <div className="flex flex-col justify-between min-h-[40vh] md:min-h-[60vh] pt-8 pb-8 md:pt-16 md:pb-16">
                        <ul className="mb-4 font-mono uppercase flex flex-col items-start">
                            <FooterEmail email="adrien.galibert@gmail.com">Email</FooterEmail>
                            <FooterLink href="https://www.instagram.com/adriengalibert">Instagram</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/adrien-galibert-7b400b42">LinkedIn</FooterLink>
                            <FooterLink href="https://github.com/adrienglbrt">GitHub</FooterLink>
                        </ul>
                        <p className="block font-mono uppercase">2023 © Adrien Galibert</p>
                    </div>
                </Wrapper>
                <span className="hidden md:block font-bold md:text-[240px] lg:text-[320px] absolute -right-32 -bottom-10 md:-bottom-16 font-sans">Ag–</span>
            </motion.div>
        </footer>
    )
}