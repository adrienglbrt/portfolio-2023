import projectsData from '../data/projects.json'
import Image from 'next/image'
import Link from 'next/link'
import PushInternal from '@/components/pushInternal'
import Wrapper from '@/components/wrapper'

export default function Home() {
  const highlightedProjects = projectsData.filter(project => project.highlight === true)

  return (
      <Wrapper>
        <section className="flex flex-col justify-end h-[calc(100vh-64px)]">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 md:mb-12">Producer turned<br />front-end developer.</h1>
          <p className="text-4xl md:text-6xl mb-4 md:mb-12">Wait –what?</p>
          <p className="text-2xl md:text-4xl">Freshly converted developer with 8 years of agency and studio experience, managing web projects for clients small and large. Now getting my hands dirty to build cool stuff 😈</p>
        </section>
        <div className="mt-16 md:mt-32 grid md:grid-cols-12 gap-8">
          <section className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Selected work</h2>
            <div className="flex flex-col gap-8 md:w-[80%]">
              {highlightedProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <div className="overflow-hidden rounded-l md:rounded-xl">
                    <Image src={`/images/projects/${project.slug}.jpg`} alt={project.title} width="1200" height="900"/>
                  </div>
                  <div className="flex justify-between items-center mt-2 md:hidden">
                    <h2 className="text-xl font-medium">{project.title}</h2>
                    <p className="text-l">{project.year}</p>
                  </div>
                </Link>
              ))}
            <PushInternal href={"/projects"} label={"See more projects"}/>
            </div>
          </section>
          <section className="md:col-span-3 md:col-start-9 self-start sticky top-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Stack</h2>
            <ul className="flex flex-col gap-1 divide-y-2 divide-black text-2xl md:text-3xl">
              <li><p className="block pt-2 pb-2">React</p></li>
              <li><p className="block pt-2 pb-2">Next.js</p></li>
              <li><p className="block pt-2 pb-2">Tailwind CSS</p></li>
              <li><p className="block pt-2 pb-2">Framer Motion</p></li>
            </ul>
          </section>
        </div>
      </Wrapper>
  )
}
