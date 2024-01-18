import CardRecommendations from "@/components/smallComponents/cardRecommendations";
import {
    Box,
    Avatar,
    WrapItem,
    Text,
    Button,
    Textarea,
    ListItem,
    Link
} from "@chakra-ui/react";
import { IoMdCafe, IoLogoLinkedin } from "react-icons/io";



const Recommendations = () => {
    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <Box>
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
                    >
                        Comentar
                    </Button>
                </Box>
            </Box>
            <Box marginTop="40px">
                <CardRecommendations />
            </Box>
        </Box>
    );
}

export default Recommendations;