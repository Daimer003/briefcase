import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Paragraphs = ({ children }: Props) => {
    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <Text
                as="p"
                textAlign="justify"
            >
                {children}
            </Text>
        </Box>
    );
}

export default Paragraphs;