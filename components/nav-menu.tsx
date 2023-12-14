'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'
import { XIcon } from 'lucide-react'
import useGlobalStore from '@/store'
import Link from 'next/link'
import { ModeToggle } from './theme-toggler'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { UrlObject } from 'url'
import { MenuContainerVariant, MenuItemVariant } from '@/lib/variants'

export default function NavMenu() {
  const setOpenNavMenu = useGlobalStore(state => state.setOpenNavMenu);
  const router = useRouter();
  const [path, setPath] = React.useState<string | UrlObject>(router.pathname);
  return (
    <motion.div className={cn(
      'fixed inset-0 z-10 bg-black text-white',
      'flex flex-col justify-center items-center'
    )}
      initial={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      }}
      animate={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
      }}
      exit={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
      }}
      transition={{ duration: .5 }}
    >
      <div className='absolute top-0 p-4 flex items-center justify-between gap-10 ring w-full'>
        <h2>LOGO</h2>
        <div className='flex items-center gap-8'>
          <ModeToggle className='text-foreground' />
          <button
            // className='fixed top-[16px] right-[16px]'
            onClick={() => setOpenNavMenu(false)}
          >
            <Cross1Icon className='scale-125' />
          </button>
        </div>
      </div>
      <motion.h2
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: .3, duration: .3 }
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: .3
          }
        }}
        className='mb-10 font-light tracking-widest text-slate-400'
      >Navigation Menu</motion.h2>
      <motion.ul className='text-2xl font-bold flex flex-col gap-2 items-center'
        variants={MenuContainerVariant}
        initial='initial'
        animate='animate'
        exit='exit'
        
      >
        <NavLink href={"/about"} path={path} setPath={setPath}>About Me</NavLink>
        <NavLink href={"/projects"} path={path} setPath={setPath}>Projects</NavLink>
        <NavLink href={"/contact"} path={path} setPath={setPath}>Contact</NavLink>
      </motion.ul>
      {/* <ModeToggle className='absolute bottom-4 left-4 text-foreground' /> */}
    </motion.div>
  )
}


type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  path: string | UrlObject;
  setPath: React.Dispatch<React.SetStateAction<string | UrlObject>>;
}
function NavLink({ path, setPath, ...props }: NavLinkProps) {
  const router = useRouter()
  const setOpenNavMenu = useGlobalStore(state => state.setOpenNavMenu)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setPath(props.href)
    setTimeout(() => {
      setOpenNavMenu(false);
    }, 200);
    setTimeout(() => {
      router.push(props.href)
    }, 700);
  }
  return (
    <motion.li
      variants={MenuItemVariant}
      className={cn(
        'hover:scale-110 transition-transform',
        path === props.href && 'animate-in'
      )}
    >
      <Link
        {...props}
        onClick={handleClick}
        className={cn(
          path === props.href && 'text-slate-400 border-b-2'
        )}
      />
    </motion.li>
  )
}