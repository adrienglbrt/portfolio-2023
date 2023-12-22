import Link from "next/link"

export default function ProjectListItem({ project, key }) {
    return (
        <li key={project.slug} className="relative overflow-hidden">
            <Link href={`/projects/${project.slug}`} className="group before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-pink before:translate-y-20 before:origin-top before:transition before:duration-200 hover:before:translate-y-0 hover:before:origin-bottom">
                <div className="flex justify-between items-center pt-4 pb-4">
                    <h2 className="group-hover:translate-x-4 transition duration-300 text-2xl md:text-3xl font-medium">{project.title}</h2>
                    <span className="group-hover:-translate-x-4 transition duration-300 text-2xl md:text-3xl">{project.year}</span>
                </div>
            </Link>
        </li>
    )
}