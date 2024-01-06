'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import useGlobalStore from '@/store'
import { ModeToggle } from './theme-toggler'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BrandIcon from './brand-icon'
import LogoIcon from './logo-icon'

export default function TopBar() {
  const setOpenNavMenu = useGlobalStore(state => state.setOpenNavMenu)
  return (
    <div className={cn(
      'h-[70px] py-4 px-8 sticky top-0 z-10 backdrop-blur-sm bg-background/80',
      'flex items-center justify-between gap-10 tracking-widest',
      'font-[inter,_sans-serif] shadow shadow-foreground/25',
    )}>
      <Link
        href={'/'}
        className='group w-[200px] flex gap-4 items-center pt-2 hover:blur-[1px] active:blur-0'
      >
        {/* <img src='/personal-brand.svg' alt='brand name' /> */}
        <LogoIcon className='w-12 fill-foreground stroke-foreground' />
        <BrandIcon className='h-12 fill-foreground' />
      </Link>
      <div className='flex items-center gap-8'>
        <ModeToggle />
        <ul className='hidden md:flex items-center gap-4'>
          <li><NavLink href={'/'}>Home</NavLink></li>
          <li><NavLink href={'/about'}>About</NavLink></li>
          <li><NavLink href={'/projects'}>Projects</NavLink></li>
          <li><NavLink href={'/contact'}>Contact</NavLink></li>
        </ul>
        <button onClick={() => setOpenNavMenu(true)} className='md:hidden'>
          <HamburgerMenuIcon className='scale-150' />
        </button>
      </div>
    </div>
  )
}


function NavLink({ children, href, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  const { pathname, query } = useRouter()
  console.log(pathname)
  const path = 'projectSlug' in query ? '/projects' : pathname
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        'relative block px-4',
        'active:text-foreground/25 transition-colors',
        // path === href && 'before:absolute before:-bottom-2 before:w-full before:h-[2px] before:bg-muted-foreground',
        // path === href && 'before:-left-[50%] before:translate-x-[50%]',
        path === href && 'font-bold text-foreground hover:text-muted-foreground',
        path !== href && 'text-muted-foreground hover:text-foreground',
      )}
    >{children}</Link>
  )
}