import { useRouter } from 'next/router'
import projectsData from '@/data/projects.json'
import Button from '@/components/button'
import Image from 'next/image'
import Wrapper from '@/components/wrapper'
import PushDefault from '@/components/pushDefault'
import PushProject from '@/components/pushProject'
import { motion, AnimatePresence } from 'framer-motion'
 
export default function Project() {
  const router = useRouter()
  const project = projectsData.find(project => project.slug === router.query.slug)

  // Find the index of the current project in the sorted list
  const sortedList = projectsData.filter(project => project.public == true).sort((a, b) => b.year - a.year)
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

  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = '#181820';

  return (
    project && (
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20  }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Wrapper>
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
                    <Image src={project.img} alt={project.title} width="1200" height="900"/>
                  </div>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
                  <p className="text-xl md:text-2xl mb-16">{project.longDescription}</p>
                  {project.link ? (
                    <Button href={project.link}>View live website</Button>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 mt-16 md:mt-32">
                {hasPrevious ? (
                  <div className="basis-1/2">
                    <PushProject project={previousProject} format="small" />
                  </div>
                ) : (
                  <div className="basis-1/2">
                    <PushDefault href={"/projects"}>All projects</PushDefault>
                  </div>
                )}
                {hasNext ? ( 
                      <div className="basis-1/2">
                        <PushProject project={nextProject} format="small" />
                      </div>
                    ) : (
                      <div className="basis-1/2">
                        <PushDefault href={"/projects"}>All projects</PushDefault>
                      </div>
                )}
              </div>
          </Wrapper>
        </motion.div>
      </AnimatePresence>
    )
  )
}