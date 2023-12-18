import projectsData from '../data/projects.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const highlightedProjects = projectsData.filter(project => project.highlight === true)

  return (
      <>
        <section className="flex flex-col justify-end h-[calc(100vh-64px)]">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-12">Producer turned<br />front-end developer.</h1>
          <p className="text-xl md:text-4xl mb-4 md:mb-12">Wait –what?</p>
          <p className="md:text-4xl">Freshly converted developer with 8 years of agency and studio experience, managing web projects for clients small and large. Now getting my hands dirty to build cool stuff 😈</p>
        </section>
        <section className="mt-16 mb-16">
          <h2 className="text-6xl font-bold mb-8">Selected work.</h2>
          <div className="flex flex-col gap-8">
            {highlightedProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="max-w-[1200px] md:even:self-end md:odd:self-start">
                <div className="md:max-w-2xl"><Image src={`/images/projects/${project.slug}.jpg`} alt={project.title} width="1200" height="900"/></div>
                <div className="flex justify-between items-center mt-2 md:hidden">
                  <h2 className="text-xl font-medium">{project.title}</h2>
                  <p className="text-l">{project.year}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href={"/projects"}>See more projects</Link>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Stack</h2>
          <ul className="flex flex-col gap-1">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
          </ul>
        </section>
      </>
  )
}
