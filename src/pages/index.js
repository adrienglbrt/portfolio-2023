// "use client"

import projectsData from '../data/projects.json'

import PushDefault from '@/components/pushDefault'
import PushProject from '@/components/pushProject'
import Wrapper from '@/components/wrapper'
import StackListItem from '@/components/stackListItem'
import LinkExternal from '@/components/linkExternal'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Head from 'next/head'

export default function Home() {
  const highlightedProjects = projectsData.filter(project => project.highlight === true)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [cursorX, cursorY])

  const stackItemOnePath = '/images/skills/skill-1.gif'
  const stackItemTwoPath = '/images/skills/skill-2.gif'
  const stackItemThreePath = '/images/skills/skill-3.gif'
  const stackItemFourPath = '/images/skills/skill-4.gif'  
  
  return (
      <>
        <Head>
          <title>Adrien Galibert - Front-end developer</title>
        </Head>
        <Wrapper>
          <section className="relative flex flex-col justify-end h-[calc(100vh-100px)]">
            <h1
              className="text-6xl md:text-8xl font-bold mb-4 md:mb-12">Seasoned producer<br />turned (junior) developer.</h1>
            <p className="pb-8 text-2xl md:text-4xl md:w-[80%]">Previously at <LinkExternal href="https://www.roninamsterdam.com/" format="large">Rōnin Amsterdam</LinkExternal>, <LinkExternal href="https://betc.com/" format="large">BETC Paris</LinkExternal> & <LinkExternal href="https://www.ogilvy.com/" format="large">Ogilvy Paris</LinkExternal>, managing web projects for clients small and large. Now spicing things up a bit to keep it all interesting, and getting my hands dirty to build cool stuff – for now focusing on the front-end.</p>
            <div className='absolute right-8 top-24 lg:right-16 lg:top-10 xl:right-24 xl:bottom-60 xl:top-auto h-[400px] w-[400px]' ref={containerRef}>
              <motion.div 
                className="absolute bg-[rgba(17,29,57,0.9)] h-96 w-96 rounded-full blur-xl"
                style={{
                  x: useTransform(cursorX, (x) => {
                    const containerWidth = containerRef.current?.offsetWidth || 0;
                    const scale = 50;
                    const centeredX = x - containerWidth / 2;
                    return centeredX === 0 ? 0 : centeredX / scale;
                  }),
                  y: useTransform(cursorY, (y) => {
                    const containerHeight = containerRef.current?.offsetHeight || 0;
                    const scale = 50;
                    const centeredY = y - containerHeight / 2;
                    return centeredY === 0 ? 0 : centeredY / scale * -1;
                  }),
                }}
              />
              <motion.div
                className="absolute bg-[rgba(255,34,12,0.9)] h-64 w-80 rounded-full blur-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1], 
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
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
              <ul className="flex flex-col gap-1 divide-y-2 divide-black text-2xl md:text-3xl cursor-crosshair">
                <StackListItem gifPath={stackItemOnePath}>React</StackListItem>
                <StackListItem gifPath={stackItemTwoPath}>Next.js</StackListItem>
                <StackListItem gifPath={stackItemThreePath}>Tailwind CSS</StackListItem>
                <StackListItem gifPath={stackItemFourPath}>Framer Motion</StackListItem>
              </ul>
            </section>
          </div>
        </Wrapper>
      </>
  )
}

