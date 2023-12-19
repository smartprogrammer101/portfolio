import React from 'react'
import { projects } from '@/lib/projects-data'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'


export default function SingleProject() {
  const { query, pathname, isReady } = useRouter()
  const project = React.useMemo(() => {
    return projects.find(project => project.slug === query.projectSlug)
  }, [ projects, query ])
  // const project = projects.find(project => project.slug === query.projectSlug)

  
  if (isReady && !project) {
    return <h1>Error page</h1>
  }
  if (!isReady || !project) {
    return null
  }
  return (
    <div className='px-4 max-w-5xl mx-auto'>
      <header className='pt-20'>
      <motion.img
        key={1}
        layout
        layoutId={project.thumbnailUrl}
        src={project.thumbnailUrl}
        alt={project.name + ' project'}
        // className='w-[80vw] h-[70vh] object-cover mx-auto'
      />
        <motion.h1
          className='font-bold text-xl md:text-3xl mt-10 mb-2'
          initial={{
            opacity: 0,
            y: 10
          }}
          // animate={}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: .3 }
          }}
        >{ project.name }</motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 10
          }}
          // animate={}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: .4 },
          }}
          viewport={{
            once: true,
            margin: '300px 0px 0px 0px',
            amount: .1
          }}
          className='max-w-3xl'
        >{ project.description }</motion.p>
      </header>
      <main className='pt-20'>
        <div className='grid md:grid-cols-2 gap-8'>
          {project.screenshotUrls.map(screenshotUrl => (
            <img
              key={screenshotUrl}
              src={screenshotUrl}
              alt={screenshotUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
