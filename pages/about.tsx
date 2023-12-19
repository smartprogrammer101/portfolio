import SwiperExample from '@/components/swiper-example'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, CheckCircle2 } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='px-4'>
      <header className='h-[calc(100vh_-_70px)] flex flex-col justify-center items-center gap-4 py-10 max-w-3xl md:mx-auto'>
        <motion.h1
          className='text-center text-muted-foreground tracking-widest mb-2'
          initial={{scale: .8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{type: 'tween', delay: .7}}
        >A FEW WORDS ABOUT ME</motion.h1>
        <div className='flex flex-col gap-6 font-normal md:text-xl tracking-wider'>
          <motion.p
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ type: 'tween', duration: .2, delay: .2}}
          >I&apos;m Iwu Emmanuel, a highly creative designer who focuses on my clients&apos; success, both online and offline, through enjoyable and meaningful experiences. I specialize in responsive websites and graphics design.</motion.p>
          <motion.p
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ type: 'tween', duration: .2, delay: .4}}
          >Over the past 3 years I have been working on real world projects such as an e-commerce website and a school management system. I have not really worked for any company as I have been having fun with personal projects, although I am now open for opportunities. In my spare time I enjoy playing football and video games.</motion.p>
          <motion.p
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ type: 'tween', duration: .2, delay: .6}}
          >As a Web Developer, I possess an impressive arsenal of skills: Frontend, backend, full stack, rest APIs, software testing, database design and management, and many more. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</motion.p>
        </div>
      </header>
      <main>
        <div className='max-w-[1000px] mx-auto h-[300px] overflow-hidden'>
          <SwiperExample />
        </div>
        <div className='w-fit mx-auto grid md:grid-cols-2 gap-8 my-14 md:my-20'>
          <Card className='shadow-lg w-[400px]'>
            <CardHeader>
              <CardTitle>My Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <CardListItem>Web Design and Development</CardListItem>
                <CardListItem>Graphics Design</CardListItem>
                <CardListItem>Digital Marketing</CardListItem>
              </ul>
            </CardContent>
          </Card>
          <Card className='shadow-lg w-[400px]'>
            <CardHeader>
              <CardTitle>Tools I use</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-5 flex flex-col gap-2'>
                <CardListItem>React and Next js</CardListItem>
                <CardListItem>Django</CardListItem>
                <CardListItem>Photoshop</CardListItem>
                <CardListItem>CorelDraw Graphics Suite</CardListItem>
              </ul>
            </CardContent>
          </Card>
        </div>
        <section>
          <h2>Things I can do</h2>
          <ul className='list-disc'>
            <li>Beautiful, responsive and highly interactive websites</li>
            <li>Frontend with React and Next js</li>
            <li>Backend with Django</li>
            <li>Full stack with React &amp; Django, Next js</li>
            <li>RESTFUL APIs with Django Rest Framework</li>
            <li>Robust testing of the frontend, backend and APIs to ensure confidence of the development process</li>
            <li>Database design, integrity, management, security, backup, e.t.c</li>
            <li>Digital Marketing</li>
            <li>Graphics design of fliers, logos, banners, business cards, e.t.c</li>
          </ul>
        </section>
        <h2 className='md:text-center text-muted-foreground'>Experience</h2>
        <p className='md:text-center text-xl md:text-3xl font-bold'>Over two years of working experience</p>
      </main>
    </div>
  )
}


function CardListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-center gap-3'><CheckCircle2 /> {children}</li>
  )
}