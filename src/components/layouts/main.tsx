import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../shared/navbar/navbar";
import Ia from "../ia/ia";
import Footer from "../shared/footer/footer";


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
            height="auto"
        >
            <Container
                display="flex"
                flexDirection="column"
                width="100%"
                maxWidth="800px"
                margin="0"
                padding="0"
            >
                <Navbar path={router.asPath} />
                <Ia />
                {children}
                <Footer />
            </Container>
        </Box>
    );
}

export default Main;