import NavMenu from '@/components/nav-menu'
import { ThemeProvider } from '@/components/theme-provider'
import TopBar from '@/components/topbar'
import useGlobalStore from '@/store'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Inter as FontSans } from "next/font/google"
import NextNProgress from 'nextjs-progressbar';

import { cn } from "@/lib/utils"
import LogoIcon from '@/components/logo-icon'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const openNavMenu = useGlobalStore(state => state.openNavMenu)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TopBar />
      <NextNProgress />
      <div className={fontSans.className}>
        <AnimatePresence>
          {openNavMenu && <NavMenu />}
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            // initial={{ x: 100 }}
            // animate={{ x: 0 }}
            // exit={{ x: -100 }}
            // transition={{ duration: .5 }}
          >
            <Component {...pageProps} />
          <footer className='h-[100px] p-10'>
            <div className='flex items-center gap-4 md:justify-center text-muted-foreground text-sm'>
              <LogoIcon className='fill-muted-foreground stroke-muted-foreground w-10' />
              &copy; 2023 Emmanuel Iwu
            </div>
          </footer>
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
