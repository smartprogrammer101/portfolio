import React from 'react'
import { projects } from '@/lib/projects-data'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { cn, getProjectsData } from '@/lib/utils'
import { ProjectsList } from '@/types'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'


type SingleProjectProps = {
  project: ProjectsList[0]
}
export default function SingleProject({ project }: SingleProjectProps) {
  // const { query, pathname, isReady } = useRouter()

  // if (isReady && !project) {
  //   return <h1>Error page</h1>
  // }
  // if (!isReady || !project) {
  //   return null
  // }
  return (
    <div className='px-4'>
      <header className='pt-20 max-w-5xl mx-auto'>
        <motion.img
          // key={1}
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
        >{project.name}</motion.h1>
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
        >{project.description}</motion.p>
      </header>
      <main className='pt-20 max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          {project.screenshotUrls.map((screenshotUrl, index) => (
            <div
              key={screenshotUrl}
              className={cn(
                index === 2 || index === 3 ? 'col-span-1' : 'md:col-span-2',
                'p-4 shadow-inner'
              )}
            >
              <img
                // key={screenshotUrl}
                src={screenshotUrl}
                alt={screenshotUrl}
              />
            </div>
          ))}
        </div>
      </main>
      <section className='grid grid-cols-2 gap-4 mt-10'>
        <div>
          {project.prevProject && (
            <Link
              href={`/projects/${project.prevProject.slug}`}
              scroll={false}
              className='group flex items-center md:gap-10 md:pr-10 md-max:hover:underline'
            >
              <ArrowLeft className='hidden md:block group-hover:-translate-x-4 transition-transform' />
              <div>
                <h2 className='font-bold text-xl tracking-wider group-hover:md-max:text-muted-foreground transition-colors'>previous project</h2>
                <p className='text-muted-foreground'>{project.prevProject.name}</p>
              </div>
            </Link>
          )}
        </div>
        <div className='justify-self-end'>
          {project.nextProject && (
            <Link
              href={`/projects/${project.nextProject.slug}`}
              scroll={false}
              className='group flex items-center md:gap-10 md:pr-10 md-max:hover:underline'
            >
              <div>
                <h2 className='font-bold text-xl tracking-wider group-hover:md-max:text-muted-foreground transition-colors'>next project</h2>
                <p className='text-muted-foreground'>{project.nextProject.name}</p>
              </div>
              <ArrowRight className='hidden md:block group-hover:translate-x-4 transition-transform' />
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const projects = getProjectsData()
  const project = projects.find(project => project.slug === params?.projectSlug)
  return {
    props: {
      project
    }
  }
}

export async function getStaticPaths() {
  const projects = getProjectsData()

  const paths = projects.map(project => ({
    params: {
      projectSlug: project.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}