"use client";
import {
  Box,
  Spacer,
  Stack,
  MenuList,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuItem,
} from "@chakra-ui/react";
import LogoNav from "../logo";
import ThemeToggleButton from "@/components/smallComponents/theme-toggle-button";
import NextLink from "next/link";
import { ImGithub } from "react-icons/im";
import { MdOutlineMenu } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { useLocale } from "@/hooks/useLocale";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  props?: any;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  return (
    <NextLink href={href} passHref target={target}>
      <Box
        p={2}
        width="100%"
        display="inline-flex"
        alignItems="center"
        gap="5px"
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { setLocale, locale, t } = useLocale();
  const { path } = props;

  const idiome = (i: any) => setLocale(i);

  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="800px"
      alignItems="center"
      padding="10px"
      boxSizing="border-box"
      bg={useColorModeValue("#ffffff3", "#01162796")}
      css={{ backdropFilter: "blur(10px)" }}
      position="fixed"
      zIndex={2}
      {...props}
    >
      <LogoNav />
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <LinkItem href="/works" path={path}>
          Proyectos
        </LinkItem>
        <LinkItem href="/recommendations" path={path}>
          Recomendaciones
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://github.com/Daimer003"
          path={path}
        >
          <ImGithub />
          Fuente
        </LinkItem>
        <LinkItem
          target="_blank"
          href="/assets/documents/cv-daymer.pdf"
          path={path}
        >
          <FaFilePdf />
          Cv
        </LinkItem>
      </Stack>
      <Spacer />
      <Box display="flex" gap="20px">
        <Box display="flex" alignItems="center" cursor="pointer">
          {locale != "es" ? (
            <span onClick={() => idiome("es")}>{locale}</span>
          ) : (
            <span onClick={() => idiome("en")}>{locale}</span>
          )}
        </Box>

        <ThemeToggleButton />

        <Box ml={2} display={{ base: "inline-block", md: "none" }}>
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              color={useColorModeValue("gray.900", "greenDawn.50")}
              colorScheme={useColorModeValue("gray.100", "greenDawn.50")}
              icon={<MdOutlineMenu />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList display="flex" flexDirection="column" bg="black">
              <LinkItem href="/" path={path}>
                <MenuItem bg="black">Perfil</MenuItem>
              </LinkItem>
              <LinkItem href="/works" path={path}>
                <MenuItem bg="black">Proyectos</MenuItem>
              </LinkItem>
              <LinkItem href="/recommendations" path={path}>
                <MenuItem bg="black">Recomendaciones</MenuItem>
              </LinkItem>
              <LinkItem
                target="_blank"
                href="https://github.com/Daimer003"
                path={path}
              >
                <MenuItem bg="black">
                  <ImGithub style={{ marginRight: "10px" }} />
                  Fuente
                </MenuItem>
              </LinkItem>
              <LinkItem
                target="_blank"
                href="/assets/documents/cv-daymer.pdf"
                path={path}
              >
                <MenuItem bg="black">
                  <FaFilePdf style={{ marginRight: "10px" }} />
                  Cv
                </MenuItem>
              </LinkItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
