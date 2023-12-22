import { useRouter } from 'next/router'
import projectsData from '@/data/projects.json'
import Button from '@/components/button'
import Image from 'next/image'
import Wrapper from '@/components/wrapper'
import PushDefault from '@/components/pushDefault'
 
export default function Project() {
  const router = useRouter()
  const project = projectsData.find(project => project.slug === router.query.slug)

  // Find the index of the current project in the sorted list
  const sortedList = projectsData.sort((a, b) => b.year - a.year)
  const currentIndex = sortedList.findIndex(project => project.slug === router.query.slug)

  // Find the previous and next projects indexes
  const previousIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  // Check if there is a previous and next project
  const hasPrevious = previousIndex >= 0
  const hasNext = nextIndex < sortedList.length

  // Get the previous and next projects
  const previousProject = hasPrevious ? sortedList[previousIndex] : null
  const nextProject = hasNext ? sortedList[nextIndex] : null


  return (
    <Wrapper>
    {project && 
          <>
            <div className="mt-16 flex flex-col lg:grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-16">{project.title}</h1>
                <div className="flex flex-row">
                  <div className="mr-12">
                    <p className="font-mono uppercase">Year</p>
                    <p className="font-medium text-xl md:text-2xl">{project.year}</p>
                  </div>
                  <div>
                    <p className="font-mono uppercase">Role</p>
                    <p className="font-medium text-xl md:text-2xl">{project.role}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2">
                <div className="overflow-hidden rounded-l md:rounded-xl">
                  <Image src={`/images/projects/${project.slug}.jpg`} alt={project.title} width="1200" height="900"/>
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
                <p className="text-xl md:text-2xl mb-16">{project.longDescription}</p>
                {project.link ? (
                  <Button href={project.link} label="View Project" />
                ) : null}
              </div>
            </div>
            <div className=" mt-16 md:mt-32 flex flex-row justify-between lg:grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 lg:col-start-1">
                {hasPrevious ? (
                  <PushDefault href={`/projects/${previousProject.slug}`}>{previousProject.title}</PushDefault>
                ) : (
                  <PushDefault href={"/projects"}>All projects</PushDefault>
                )}
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                {hasNext ? (
                  <PushDefault href={`/projects/${nextProject.slug}`}>{nextProject.title}</PushDefault>
                ) : (
                  <PushDefault href={"/projects"}>All projects</PushDefault>
                )}
              </div>
          </div>
        </>
      }
    </Wrapper>
  )
  }