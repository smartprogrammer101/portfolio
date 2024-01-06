import ProjectsSection from '@/components/projects/ProjectsSection'
import SwiperExample from '@/components/swiper-example'
import { getProjectsData } from '@/lib/utils'
import React from 'react'

type ProjectsProps = {
  projects: ReturnType<typeof getProjectsData>
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <h1 className='my-10 text-lg font-semibold text-muted-foreground px-10'>These are few of my projects</h1>
      <ProjectsSection projects={ projects } />
    </div>
  )
}

export async function getStaticProps() {
  const data = getProjectsData()
  return {
    props: {
      projects: data
    }
  }
}