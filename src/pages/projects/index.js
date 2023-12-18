import projectsData from "@/data/projects.json"
import Link from "next/link"

export default function Projects() {
    const sortedList = projectsData.sort((a, b) => b.year - a.year)

    return (
        <>
            <h1 className="text-4xl md:text-8xl mt-12 md:mt-32 mb-4 md:mb-12 font-bold">Projects directory.</h1>
            <ul className="divide-y">
            {sortedList.map((project) => (
                <li key={project.slug}>
                    <Link href={`/projects/${project.slug}`} className="flex justify-between items-center pt-4 pb-4">
                        <h2 className="text-xl font-medium">{project.title}</h2>
                        <p className="text-l">{project.year}</p>
                    </Link>
                </li>
            ))}
            </ul>
        </>
        )
  }
  