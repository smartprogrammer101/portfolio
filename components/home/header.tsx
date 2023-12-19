import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownZA, ScrollIcon } from 'lucide-react'
import { TriangleDownIcon } from '@radix-ui/react-icons'

export default function Header() {
  const handleClick = () => {
    const main = document.querySelector("main")
    console.log(main?.offsetTop)
    if (main?.offsetTop) {
      scrollTo({
        top: main.offsetTop - 70
      })
    }
  }
  return (
    <header className={cn(
      'relative max-w-[1300px] min-h-[calc(100vh_-_70px)] mx-auto md:px-10 grid grid-rows-1 md:grid-cols-2',
      'items-center overflow-hidden'
    )}>
      <motion.div
        className='md-max:absolute bottom-0 -mt-20 z-[3] p-8 md:self-end md:pb-20'
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: .5}}}
      >
        <h1
        >
          <motion.span
            className='mb-2 tracking-[.5rem] text-secondary-foreground'
            initial={{
              y: 100, opacity: 0
            }}
            animate={{
              y: 0, opacity: 1,
              transition:{delay: .5}
            }}
            // exit={{
            //   y: 100, opacity: 0
            // }}
          >Iwu&nbsp;Emmanuel</motion.span>
          <motion.span
            className='block font-bold mt-1 text-4xl md:text-5xl text-foreground leading-10'
            initial={{
              y: 10, opacity: 0
            }}
            animate={{
              y: 0, opacity: [0,1],
            transition:{delay: .6}
            }}
            // exit={{
            //   y: 10, opacity: 0
            // }}
          >Website&nbsp;developer and <br /> graphics&nbsp;designer</motion.span>
        </h1>
        <motion.p
          className='py-4 md:font-semibold md:text-muted-foreground max-w-xl'
          initial={{
            opacity: 0,
            scale: .9
          }}
          animate={{
            opacity: 1,
            scale: 1,
          transition: {delay: .7}
          }}
          // exit={{
          //   scale: [1, 1, .7], opacity: 0
          // }}
        >Over the past 9 years, as an art director and designer, I&apos;ve worked with big companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.</motion.p>
        <Link
          href={"/about"}
          className={cn(
            'block w-fit mt-4',
            // 'block w-fit mt-4 bg-foreground text-background py-4 px-6 md:px-10',
            // 'hover:bg-secondary-foreground focus-within:ring-offset-4 focus-within:ring-4 ring-foreground/30',
            // 'transition-shadow'
          )}
        >
          <motion.span
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              y: [10, 0, 10, 0],
              transition: {delay: .9, duration: .5}
            }}
            className={cn(
            'block w-fit mt-4 bg-foreground text-background py-4 px-6 md:px-10',
            'hover:ring ring-offset-4 ring-foreground/30 ring-offset-background',
            'transition-shadow'
          )}
          >More about me</motion.span></Link>
      </motion.div>
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
      <button onClick={ () => handleClick() }>
        <TriangleDownIcon className='absolute bottom-10 z-[3] translate-x-[50%] left-[50%] animate-bounce scale-[5]' />
      </button>
      {/* <ArrowDownZA /> */}
    </header>
  )
}
