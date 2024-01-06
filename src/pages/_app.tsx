import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../lib/theme'
import LayoutMain from '@/components/layouts/main'
import { AnimatePresence } from 'framer-motion'



export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutMain router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </LayoutMain>
    </ChakraProvider>
  )
}
