import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../lib/theme'
import LayoutMain from '@/components/layouts/main'


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutMain router={router}>
        <Component {...pageProps} key={router.route} />
      </LayoutMain>
    </ChakraProvider>
  )
}
