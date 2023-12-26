import Link from "next/link";
import Image from 'next/image';
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";


export default function PushProject({ project, format }) {
    const divRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const height = (format == "small" ? "h-40 lg:h-60" : null ) 

    return (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block overflow-hidden w-full" ref={divRef}>
            <div className={`relative ${height}`}>
                <motion.div
                    style={{
                        translateY,
                    }}
                >
                <Image src={project.img} alt={project.title} width="1200" height="900" className="cover scale-[1.15] origin-center group-hover:scale-110 transition duration-300"/>
                </motion.div>
                <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-gradient-to-t from-overlay to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-0 pl-8 pb-8 flex items-center">
                        <p className="text-3xl md:text-5xl text-white font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">{project.title}</p>
                        <span className="text-3xl md:text-5xl text-white font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition duration-300">→</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}