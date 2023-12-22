// "use client"

import projectsData from '../data/projects.json'
import PushDefault from '@/components/pushDefault'
import PushProject from '@/components/pushProject'
import Wrapper from '@/components/wrapper'
import StackListItem from '@/components/stackListItem'

export default function Home() {
  const highlightedProjects = projectsData.filter(project => project.highlight === true)

  const stackItemOnePath = '/images/skills/skill-1.gif'
  const stackItemTwoPath = '/images/skills/skill-2.gif'
  const stackItemThreePath = '/images/skills/skill-3.gif'
  const stackItemFourPath = '/images/skills/skill-4.gif'  

  return (
      <Wrapper>
        <section className="flex flex-col justify-end h-[calc(100vh-64px)]">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 md:mb-12">Producer turned<br />front-end developer.</h1>
          <p className="text-2xl md:text-4xl md:w-[80%]">Freshly converted developer with 8 years of agency and studio experience, managing web projects for clients small and large. Now getting my hands dirty to build cool stuff 😈</p>
        </section>
        <div className="mt-16 md:mt-32 grid md:grid-cols-12 gap-8">
          <section className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Selected work</h2>
            <div className="flex flex-col gap-8 md:w-[80%]">
              {highlightedProjects.map((project) => (
                <PushProject key={project.slug} project={project}/>
              ))}
            <PushDefault href={"/projects"}>See more projects</PushDefault>
            </div>
          </section>
          <section className="md:col-span-3 md:col-start-9 self-start sticky top-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Stack</h2>
            <ul className="flex flex-col gap-1 divide-y-2 divide-black text-2xl md:text-3xl cursor-none">
              <StackListItem gifPath={stackItemOnePath}>React</StackListItem>
              <StackListItem gifPath={stackItemTwoPath}>Next.js</StackListItem>
              <StackListItem gifPath={stackItemThreePath}>Tailwind CSS</StackListItem>
              <StackListItem gifPath={stackItemFourPath}>Framer Motion</StackListItem>
            </ul>
          </section>
        </div>
      </Wrapper>
  )
}

