import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Paragraphs = ({ children }: Props) => {
    return (
        <Box>
            <Text as="p">
                {children}
            </Text>
        </Box>
    );
}

export default Paragraphs;