import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'

import { useRef, useEffect } from 'react'

import { DefaultTheme } from '../theme/theme'

function MyApp({ Component, pageProps }) {
  // scroll //

  const scrollRef = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const scroll = import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      })
    })

    return () => scroll.destroy()
  }, [])

  // scroll //
  return (
    <div ref={scrollRef}>
      <ChakraProvider theme={DefaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default MyApp
