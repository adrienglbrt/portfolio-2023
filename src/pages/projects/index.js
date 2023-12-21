import Wrapper from "@/components/wrapper"
import projectsData from "@/data/projects.json"
import Link from "next/link"

export default function Projects() {
    const sortedList = projectsData.sort((a, b) => b.year - a.year)

    return (
        <Wrapper>
            <h1 className="text-6xl md:text-8xl mt-12 md:mt-32 mb-8 md:mb-16 font-bold">Projects</h1>
            <div className="md:grid md:grid-cols-12">
                <ul className="divide-y-2 divide-black md:col-span-9 xl:col-span-7">
                {sortedList.map((project) => (
                    <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`}>
                            <div className="flex justify-between items-center pt-4 pb-4">
                                <h2 className="text-2xl md:text-3xl font-medium">{project.title}</h2>
                                <span className="text-2xl md:text-3xl">{project.year}</span>
                            </div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </Wrapper>
        )
  }
  