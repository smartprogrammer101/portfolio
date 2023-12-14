import NavMenu from '@/components/nav-menu'
import { ThemeProvider } from '@/components/theme-provider'
import TopBar from '@/components/topbar'
import useGlobalStore from '@/store'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

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
      <div className={fontSans.className}>
        <AnimatePresence>
          {openNavMenu && <NavMenu />}
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            // key={router.route}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: .5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
