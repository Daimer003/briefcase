import CardRecommendations from "@/components/smallComponents/cardRecommendations";
import {
    Box,
    Avatar,
    WrapItem,
    Text,
    Button,
    Textarea,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io";



const Recommendations = () => {
    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <Box>
                <Alert status='error' marginBottom="20px" borderRadius="8px">
                    <AlertIcon />
                    <AlertTitle>Vista de prueba:</AlertTitle>
                    <AlertDescription>La sección de comentarios aún no está disponible.</AlertDescription>
                </Alert>
                <Box
                    display="flex"
                    alignItems="center"
                    width="100%"
                    height="auto"
                    gap="10px"
                >
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='' colorScheme="gray" />
                    </WrapItem>
                    <Box>
                        <Text as="h5" fontSize="small">Daymer Perdomo</Text>
                        <Text as="p" fontSize="small">Cargo</Text>
                        <Box>
                            <Link href="https://www.linkedin.com/in/daymer-perdomo-5aa0a5137/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    margin="0"
                                    padding="0"
                                    height="auto"
                                    fontSize="small"
                                    leftIcon={<IoLogoLinkedin />}
                                >
                                    Daymer Perdomo
                                </Button>
                            </Link>

                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    border="1px"
                    borderColor="gray.800"
                    borderRadius="8px"
                    padding="10px"
                    boxSizing="border-box"
                    marginTop="10px"
                    gap="10px"
                >
                    <Box
                        width="100%"
                        height="100%"
                    >
                        <Textarea placeholder='Here is a sample placeholder' />
                    </Box>
                    <Button
                        width="100%"
                        isDisabled
                    >
                        Comentar
                    </Button>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                marginTop="40px"
                gap="20px"
            >
                <CardRecommendations data={{ color: "teal" }} />
                <CardRecommendations data={{ color: "pink" }} />
                <CardRecommendations data={{ color: "purple" }} />
            </Box>
        </Box >
    );
}

export default Recommendations;