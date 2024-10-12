import { Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import FootprintIcon from "../icons/footprint";
import { LogoBox } from "@/styles/components/shared/Logo/logo.styles";
import { useLocale } from "@/hooks/useLocale";

const LogoNav = () => {
  const { t } = useLocale();

  return (
    <Link href="/" scroll={false}>
      <LogoBox as="span" color={useColorModeValue("gray.900", "greenDawn.50")}>
        <FootprintIcon />
        <Text
          color={useColorModeValue("gray.900", "greenDawn.50")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          {t.logo}
        </Text>
      </LogoBox>
    </Link>
  );
};

export default LogoNav;
