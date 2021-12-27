import {
  Flex,
  Heading,
  Button,
  useColorMode,
  useDisclosure,
  Box,
  Center,
  useColorModeValue,
  IconButton,
  Stack,
  Link,
} from '@chakra-ui/react'

// import styles from '../sass/NavBar.module.sass'

import NextLink from 'next/link'

import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Menu = () => {
  return (
    <>
      <Box flex='1'>
        <NextLink href='/news'>
          <Link>
            <Heading fontWeight='thin' textAlign='center'>
              NEWS
            </Heading>
          </Link>
        </NextLink>
      </Box>
      <Heading fontWeight='thin' textAlign='center' flex='1'>
        Link2
      </Heading>
    </>
  )
}

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  return (
    <Flex
      zIndex='1'
      background={useColorModeValue('gray.10', 'gray.10')}
      backdropFilter='blur(1rem);'
      position='fixed'
      w='100%'
      data-scroll
      data-scroll-sticky
      data-scroll-target='body'>
      <Stack w='100%' h='100%'>
        <Flex w='100%'>
          <Heading p='1rem' color='white'>
            Logo
          </Heading>

          <Box
            flex='1'
            color='white'
            p='1rem'
            display={['none', 'none', 'flex']}>
            <Menu />
          </Box>

          <Flex flex='1' display={['flex', 'flex', 'none']}></Flex>

          <Flex justifyContent='flex-end'>
            <IconButton
              m='1rem'
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            />
          </Flex>

          <Flex justifyContent='flex-end' display={['flex', 'flex', 'none']}>
            <IconButton
              m='1rem'
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w='3' h='3' />
                ) : (
                  <HamburgerIcon w='5' h='5' />
                )
              }
            />
          </Flex>
        </Flex>
        {isOpen && (
          <Stack display={['flex', 'flex', 'none']} pb='1rem'>
            <Menu />
          </Stack>
        )}
      </Stack>
    </Flex>
  )
}
