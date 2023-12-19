import Image from 'next/image'

import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Header } from '@/components/home'
import { ArrowRight, Mail, Phone, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectsSection from '@/components/projects/ProjectsSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div>
      <Header />
      <main className='py-4'>
        <section className='px-4'>
          <h2 className='font-semibold md:font-bold md:text-3xl px-4 mt-10 md:mt-20 mb-4 md:mb-10 md:text-center'>Projects</h2>
          <ProjectsSection />
          <Link
            href={'/projects'}
            className={cn(
              'block border-b-2 md:text-center md:mx-auto mt-4 text-muted-foreground',
              'w-fit border-b-muted-foreground hover:text-foreground hover:border-foreground'
            )}
          >View all projects</Link>
        </section>
        <div className='px-6 mt-20 space-y-8'>
          <div className='md:mx-auto md:w-fit'>
            <p>Need my services?</p>
            <Link
              href={'/contact'}
              className={cn(
                'w-fit font-bold text-3xl flex items-center gap-4 group hover:text-muted-foreground transition-colors',
                'active:text-muted-foreground/50'
              )}
            >Let&apos;s work together <ArrowRight className='inline group-hover:translate-x-2 transition-transform' /></Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className='font-bold text-xl'>Contact information</h2>
            <p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
            <ul className='flex flex-col gap-2 mt-2 text-sm text-muted-foreground tracking-widest'>
              <li className='flex items-center gap-4'><Mail /> smartlife1257@gmail.com</li>
              <li className='flex items-center gap-4'><Phone /> 08123023844</li>
              <li className='flex items-center gap-4'><Twitter /> @emmasmart11</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
