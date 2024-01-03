import { FooterBox } from "@/styles/components/shared/Footer/footer.styles";
import { Box, Text } from "@chakra-ui/react";



const Footer = () => {
    return (
        <FooterBox>
            <Box>
                <Text as="span" opacity={0.4} fontSize="sm">
                    © {new Date().getFullYear()} Daymer Perdomo. All Rights Reserved.
                </Text>
            </Box>
        </FooterBox>
    );
}

export default Footer;