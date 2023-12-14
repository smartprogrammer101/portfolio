'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import useGlobalStore from '@/store'
import { ModeToggle } from './theme-toggler'

export default function TopBar() {
  const setOpenNavMenu = useGlobalStore(state => state.setOpenNavMenu)
  return (
    <div className={cn(
      'h-[70px] p-4 sticky top-0 backdrop-blur-sm bg-background/80',
      'flex items-center justify-between gap-10'
    )}>
      <h2>LOGO</h2>
      <div className='flex items-center gap-8'>
        <ModeToggle />
        <button onClick={() => setOpenNavMenu(true)}>
          <HamburgerMenuIcon className='scale-150'/>
        </button>
      </div>
    </div>
  )
}
