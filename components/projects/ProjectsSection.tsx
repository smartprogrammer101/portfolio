import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { projects as projectsData } from '@/lib/projects-data'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const projects = React.useMemo(() => projectsData, [])
  return (
    <div className='grid gap-24 px-6'>
      {/* School management system */}
      {projects.map((project, index) => (
        <ProjectCardWrapper key={project.name} reversed={index % 2 === 1}>
          <ProjectCardImage
            src={project.thumbnailUrl}
            href={`projects/${project.slug}`}
          />
          <ProjectCard>
            <CardHeader>
              <CardTitle className='text-lg'>
                <Link
                  href={`projects/${project.slug}`}
                  className='group hover:text-muted-foreground transition-colors flex items-center gap-2'
                >{project.name}
                  <ExternalLinkIcon className='opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-muted-foreground' />
                </Link>
              </CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='flex md:justify-center gap-4 font-bold text-sm'>
                {project.tools.map(tool => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </CardContent>
          </ProjectCard>
        </ProjectCardWrapper>
      ))}
    </div>
  )
}


type ProjectCardWrapperProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
  reversed?: boolean;
}
function ProjectCardWrapper({ reversed, children, className, ...props }: ProjectCardWrapperProps) {
  return (
    <motion.div
      className={cn(
        'max-w-[400px] md:max-w-[700px] flex flex-col md:flex-row gap-2 mx-auto',
        'border-2 p-4 rounded-md',
        reversed && 'md:flex-row-reverse',
        className
      )}
      {...props}
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
        margin: '0px -20px 0px 100px',
        amount: .1
      }}
    >
      {children}
    </motion.div>
  )
}


function ProjectCard({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card
      className={cn(
        'flex-1',
        className
      )}
      {...props}
    >{children}</Card>
  )
}


type ProjectCardImageProps = {
  src: string;
  href: string;
}
function ProjectCardImage({ src, href }: ProjectCardImageProps) {
  return (
    <div className='group relative flex-1 overflow-hidden rounded-md'>
      <motion.img
        key={2}
        layout
        layoutId={src}
        src={src}
        className='w-full h-full group-hover:scale-110 transition-transform duration-700' />
      <Link
        href={href}
        className={cn(
          'absolute inset-0 block ring h-full w-full group-hover:bg-foreground/70 text-background transition-all duration-500',
          'opacity-0 group-hover:opacity-100 flex justify-center items-center'
        )}>
          <span className='font-bold tracking-[3px]'>VIEW PROJECT</span>
        </Link>
    </div>
  )
}