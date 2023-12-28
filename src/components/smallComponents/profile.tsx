import { Box, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Paragraphs from "./paragraphs";



const Profile = () => {
    return (
        <Box
            display={{ md: 'flex' }}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
            gap="10px"
        >
            <Box>
                <Heading
                    as="h2"
                    variant="page-title"
                >
                    Daymer Perdomo Molina
                </Heading>
                <Paragraphs>Frontend developer (Técnico de aeronaves).</Paragraphs>
            </Box>
            <Spacer />
            <Box
                display="flex"
                width="100px"
                height="100px"
                borderRadius="50%"
                overflow="hidden"
                border="4px solid gray"
                margin="20px auto"
            >
                <Image
                    src="/assets/daimer.webp"
                    alt="Imagen del perfil"
                    width={100}
                    height={100}
                />
            </Box>
        </Box>
    );
}

export default Profile;