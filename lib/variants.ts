import { Variants, Variant } from "framer-motion";


export const MenuContainerVariant: Variants = {
  initial: { },
  animate: {
    transition: {
      staggerChildren: .1,
      delayChildren: .3
    }
  },
  exit: {}
}

export const MenuItemVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}