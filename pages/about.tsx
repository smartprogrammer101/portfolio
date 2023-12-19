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
          initial={{}}
        >A FEW WORDS ABOUT ME</motion.h1>
        <div className='md:text-xl tracking-wider'>
          <p>I&apos;m Iwu Emmanuel, a multidisciplinary designer who focuses on telling my clients&apos; stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
          <p>Over the past 9 years I have been working with big companies and rising startups around the world as a designer and art director, working solo and leading small design teams. In my spare time I enjoy playing football and video games.</p>
          <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
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
        <h2 className='md:text-center text-muted-foreground'>Experience</h2>
        <p className='md:text-center text-xl md:text-3xl font-bold'>Over two years of working experience</p>
      </main>
    </div>
  )
}


function CardListItem({children} : { children: React.ReactNode }) {
  return (
    <li className='flex items-center gap-3'><CheckCircle2 /> {children}</li>
  )
}