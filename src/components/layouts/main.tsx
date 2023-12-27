import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../shared/navbar/navbar";

interface Props {
    children: ReactNode,
    router: any
}

const Main = ({ children, router }: Props) => {
    return (
        <Box
            as='main'
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
        >
            <Container
                display="flex"
                flexDirection="column"
                width="100%"
                maxWidth="900px"
                margin="0"
                padding="0"
            >
                <Navbar path={router.asPath} />
                {children}
            </Container>
        </Box>
    );
}

export default Main;