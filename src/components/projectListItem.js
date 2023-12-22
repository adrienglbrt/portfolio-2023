import Link from "next/link"

export default function ProjectListItem({ project, key }) {
    return (
        <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`}>
                            <div className="flex justify-between items-center pt-4 pb-4">
                                <h2 className="text-2xl md:text-3xl font-medium">{project.title}</h2>
                                <span className="text-2xl md:text-3xl">{project.year}</span>
                            </div>
                        </Link>
                    </li>
        )
}