import Link from "next/link";
import Image from 'next/image'

export default function PushProject({project}) {
    return (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="relative group block rounded-l md:rounded-xl overflow-hidden">
            <div className="before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-overlay before:opacity-0 group-hover:before:opacity-100 before:transition before:duration-300">
                <div className="">
                    <Image src={`/images/projects/${project.slug}.jpg`} alt={project.title} width="1200" height="900"/>
                </div>
                <div className="absolute bottom-0 pl-8 pb-8 flex items-center">
                    <p className="text-3xl md:text-6xl text-white font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition duration-300">{project.title}</p>
                    <span className="text-3xl md:text-6xl text-white font-medium opacity-0 -translate-x-0 group-hover:opacity-100 group-hover:translate-x-4 transition duration-300">→</span>
                </div>
                <div className="flex justify-between items-center mt-2 md:hidden">
                    <h2 className="text-xl font-medium">{project.title}</h2>
                    <p className="text-l">{project.year}</p>
                </div>
            </div>
        </Link>
    )
}