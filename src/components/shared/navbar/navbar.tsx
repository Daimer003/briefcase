import { forwardRef } from 'react'
import {
    Box,
    Spacer,
    Link,
    Stack,
    MenuList,
    MenuItem,
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


interface Props {
    href: any,
    path: any,
    target?: any,
    children: any,
    props?: any
}

const LinkItem = ({ href, path, target, children, ...props }: Props) => {
    const active = path === href
    const inactiveColor = useColorModeValue('greenDawn.50', 'gray.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = (props: any) => {
    const { path } = props
    return (
        <Box
            display="flex"
            width="100%"
            alignItems="center"
            padding="10px"
            boxSizing="border-box"
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
                    Works
                </LinkItem>
                <LinkItem
                    target="_blank"
                    href="https://gitlab.com/Daymer"
                    path={path}
                    display="inline-flex"
                    alignItems="center"
                    style={{ gap: 4 }}
                    pl={2}
                >
                    <ImGithub />
                    Source
                </LinkItem>
            </Stack>
            <Spacer />
            <Box
                display="flex"
            >
                <ThemeToggleButton />

                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<MdOutlineMenu />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem as={MenuLink} href="/">
                                About
                            </MenuItem>
                            <MenuItem as={MenuLink} href="/works">
                                Works
                            </MenuItem>

                            <MenuItem
                                as={Link}
                                href="https://github.com/craftzdog/craftzdog-homepage"
                            >
                                View Source
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;