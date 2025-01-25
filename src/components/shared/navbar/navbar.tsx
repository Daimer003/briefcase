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
import Image from "next/image";
import { useState } from "react";

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
  const [selectIdiome, setSelectIdiome] = useState<boolean>(false);
  const { path } = props;

  const icons = ["et", "en", "es"];

  const idiome = (i: any) => {
    console.log(i, t);
    setLocale(i);
    setSelectIdiome(false);
  };

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
          {t.navbar.li1}
        </LinkItem>
        <LinkItem href="/recommendations" path={path}>
          {t.navbar.li2}
        </LinkItem>
        <LinkItem
          target="_blank"
          href="https://github.com/Daimer003"
          path={path}
        >
          <ImGithub />
          {t.navbar.li3}
        </LinkItem>
        <LinkItem
          target="_blank"
          href="/assets/documents/daymer-cv-es-en.pdf"
          path={path}
        >
          <FaFilePdf />
          {t.navbar.li4}
        </LinkItem>
      </Stack>

      <Spacer />

      <Box display="flex" alignItems="center" gap="20px">
        <Box
          display="flex"
          alignItems="center"
          cursor="pointer"
          position="relative"
        >
          <span onClick={() => setSelectIdiome(true)}>
            <Image
              src={`/assets/${locale}.webp`}
              alt="Icono"
              width={20}
              height={20}
            />
          </span>

          <Box
            display={selectIdiome ? "flex" : "none"}
            w="35px"
            flexDir="column"
            position="absolute"
            top={0}
            left={-2}
            gap="6px"
            bg={useColorModeValue("#ffffff3", "#011627")}
            border="1px solid #ffffff"
            padding="5px"
            borderRadius="8px"
          >
            {icons.map((icon, key) => (
              <Image
                key={key}
                src={`/assets/${icon}.webp`}
                alt="Icono"
                width={50}
                height={50}
                onClick={() => idiome(icon)}
              />
            ))}
          </Box>
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
                <MenuItem bg="black">{t.logo}</MenuItem>
              </LinkItem>
              <LinkItem href="/works" path={path}>
                <MenuItem bg="black"> {t.navbar.li1}</MenuItem>
              </LinkItem>
              <LinkItem href="/recommendations" path={path}>
                <MenuItem bg="black"> {t.navbar.li2}</MenuItem>
              </LinkItem>
              <LinkItem
                target="_blank"
                href="https://github.com/Daimer003"
                path={path}
              >
                <MenuItem bg="black">
                  <ImGithub style={{ marginRight: "10px" }} />
                  {t.navbar.li3}
                </MenuItem>
              </LinkItem>
              <LinkItem
                target="_blank"
                href="/assets/documents/daymer-cv-es-en.pdf"
                path={path}
              >
                <MenuItem bg="black">
                  <FaFilePdf style={{ marginRight: "10px" }} />
                  {t.navbar.li4}
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
