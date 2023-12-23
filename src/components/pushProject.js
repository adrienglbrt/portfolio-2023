import Link from "next/link";
import Image from 'next/image'

export default function PushProject({ project, format }) {
    const height = (format == "small" ? "h-60" : null ) 

    return (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block rounded-l md:rounded-xl overflow-hidden w-full">
            <div className={`relative ${height}`}>
                <Image src={project.img} alt={project.title} width="1200" height="900" className="cover"/>
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