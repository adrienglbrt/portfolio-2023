import { useRouter } from 'next/router'
import projectsData from '@/data/projects.json'
import Link from 'next/link'
 
export default function Project() {
  const router = useRouter()
  const project = projectsData.find(project => project.slug === router.query.slug)

  // Find the index of the current project in the sorted list
  const sortedList = projectsData.sort((a, b) => b.year - a.year)
  const currentIndex = sortedList.findIndex(project => project.slug === router.query.slug)

  const previousIndex = currentIndex - 1
  const nextIndex = currentIndex + 1

  const hasPrevious = previousIndex >= 0
  const hasNext = nextIndex < sortedList.length

  const previousProject = hasPrevious ? sortedList[previousIndex] : null
  const nextProject = hasNext ? sortedList[nextIndex] : null


  return (
    <>
      <h1 className="text-6xl font-bold">{project.title}</h1>
      <div>
        {hasPrevious && (
          <Link href={`/projects/${previousProject.slug}`}>Previous</Link>
        )}
        {hasNext && (
          <Link href={`/projects/${nextProject.slug}`}>Next</Link>
        )}
      </div>
    </>
  )
}