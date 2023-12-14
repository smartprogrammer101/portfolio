import Image from 'next/image'

import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Header } from '@/components/home'
import { ArrowRight, Mail, Phone, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Header />
      <main className='py-4'>
        <h2 className='font-semibold px-4 mb-4'>Projects</h2>
        <div className='grid gap-4 px-6'>
          <ProjectCard />
          <ProjectCard />
          <Link
            href={'/projects'}
            className='border-b-2 w-fit border-b-foreground hover:text-muted-foreground hover:border-muted-foreground'
          >View all projects</Link>
        </div>
        <div className='px-6 mt-20 space-y-8'>
          <div>
            <p>Need my services?</p>
            <Link
              href={'/contact'}
              className='font-bold text-3xl flex items-center gap-4 group hover:text-muted-foreground transition-colors'
            >Let's work together <ArrowRight className='inline group-hover:translate-x-2 transition-transform' /></Link>
          </div>
          <div>
            <h2 className='font-bold text-xl'>Contact information</h2>
            <p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
            <ul className='flex flex-col gap-2 mt-2 font-semibold text-muted-foreground'>
              <li className='flex items-center gap-4'><Mail /> smartlife1257@gmail.com</li>
              <li className='flex items-center gap-4'><Phone /> 08123023844</li>
              <li className='flex items-center gap-4'><Twitter /> @emmasmart11</li>
              <li className='flex items-center gap-4'><Twitter /> @emmasmart11</li>s
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProjectCard() {
  return (
    <div className='h-[400px] bg-foreground'></div>
  )
}