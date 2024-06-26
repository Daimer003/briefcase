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
            padding="0 10px 40px"
            boxSizing="border-box"
        >
            <Text
                as="p"
                textAlign="center"
            >
                {children}
            </Text>
        </Box>
    );
}

export default Paragraphs;