import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className={cn(
      'relative min-h-[calc(100vh_-_70px)] md:px-10 grid grid-rows-1 md:grid-cols-2',
      'items-center overflow-hidden'
    )}>
      <div className='md-max:absolute bottom-0 -mt-20 z-[3] p-8 md:self-end md:pb-20'>
        <h1>
          <motion.span className='mb-2 tracking-[.5rem] text-secondary-foreground'>Iwu&nbsp;Emmanuel</motion.span>
          <motion.span className='block font-bold mt-1 text-3xl md:text-5xl text-foreground leading-8'>Website&nbsp;developer and <br /> graphics&nbsp;designer</motion.span>
        </h1>
        <p className='py-4 md:font-semibold md:text-muted-foreground'>Over the past 9 years, as an art director and designer, I've worked with big companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.</p>
        <Link
          href={"/about"}
          className='block w-fit mt-4 bg-foreground text-background py-4 px-6'
        >More about me</Link>
      </div>
      <div className={cn(
        'absolute inset-0 md-max:bg-gradient-to-b md-max:from-background/5 md-max:to-background z-[2]'
      )}></div>
      <div className={cn(
        'relative h-full md-max:-mb-14',
        ''
      )}>
        <Image
          // className='ring'
          src={'/bohemian-man-with-his-arms-crossed.png'}
          alt="a portrait photo of Emmanuel Smart"
          fill
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    </header>
  )
}
