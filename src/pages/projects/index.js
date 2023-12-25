import Wrapper from "@/components/wrapper"
import projectsData from "@/data/projects.json"
import ProjectListItem from "@/components/projectListItem"
import Head from "next/head"

export default function Projects() {
    const sortedList = projectsData.filter(project => project.public == true).sort((a, b) => b.year - a.year)

    return (
        <>
            <Head>
                <title>Projects - Adrien Galibert</title>
            </Head>
            <Wrapper>
                <h1 className="text-6xl md:text-8xl mt-12 md:mt-32 mb-8 md:mb-16 font-bold">Projects</h1>
                <div className="md:grid md:grid-cols-12">
                    <ul className="divide-y-2 divide-black md:col-span-9 xl:col-span-7">
                    {sortedList.map((project) => (
                        <ProjectListItem project={project} key={project.slug} />
                    ))}
                    </ul>
                </div>
            </Wrapper>
        </>
    )
  }
  