'use client'
import { forwardRef } from 'react'
import {
    Box,
    Spacer,
    Stack,
    MenuList,
    Menu,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import Logo from "../logo/logo";
import ThemeToggleButton from "@/components/smallComponents/theme-toggle-button";
import NextLink from 'next/link'
import { ImGithub } from "react-icons/im";
import { MdOutlineMenu } from "react-icons/md";


interface LinkItemProps {
    href: string,
    path: string,
    target?: string,
    children: React.ReactNode,
    props?: any
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.900', 'greenDawn.50')
    return (
        <NextLink
            href={href}
            passHref
            target={target}
        >
            <Box
                p={2}
                width="100%"
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 4 }}
                pl={2}
                {...props}
            >
                {children}
            </Box>
        </NextLink>
    )
}

//*referencias se utilizan para acceder directamente a un elemento del DOM o a un componente React hijo.
const MenuLink = forwardRef(({ ...props }: any, ref: any) => (
    <NextLink
        href={ref}
    />
))

const Navbar = (props: any) => {
    const { path } = props
    return (
        <Box
            display="flex"
            width="100%"
            maxWidth="800px"
            alignItems="center"
            padding="10px"
            boxSizing="border-box"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            position="fixed"
            zIndex={2}
            {...props}
        >
            <Logo />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <LinkItem href="/works" path={path}>
                    Obras
                </LinkItem>
                <LinkItem
                    target="_blank"
                    href="https://gitlab.com/Daymer"
                    path={path}
                >
                    <ImGithub />
                    Fuente
                </LinkItem>
            </Stack>
            <Spacer />
            <Box display="flex"
            >
                <ThemeToggleButton />

                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            color={useColorModeValue('gray.900', 'greenDawn.50')}
                            colorScheme={useColorModeValue('gray.100', 'greenDawn.50')}
                            icon={<MdOutlineMenu />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList
                            display="flex"
                            flexDirection="column"
                        >
                            <LinkItem href="/" path={path}>
                                Perfil
                            </LinkItem >
                            <LinkItem href="/works" path={path}>
                                Obras
                            </LinkItem>

                            <LinkItem
                                target="_blank"
                                href="https://gitlab.com/Daymer"
                                path={path}
                            >
                                <ImGithub />
                                Fuente
                            </LinkItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;