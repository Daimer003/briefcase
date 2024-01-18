import {
    Box,
    Avatar,
    WrapItem,
    Text,
    Button,
    Link,
    Tooltip,
    Tag
} from "@chakra-ui/react";
import { IoMdCafe, IoLogoLinkedin } from "react-icons/io";

const CardRecommendations = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="auto"
            gap="10px"
        >
            <Box
                display="flex"
                alignItems="center"
                gap="10px"
            >
                <WrapItem>
                    <Avatar name='Dan Abrahmov' src='' size="sm" colorScheme="gray" />
                </WrapItem>
                <Box>
                    <Box display="flex" gap="10px">
                        <Text as="h5" fontSize="small">Daymer Perdomo</Text>
                        <Tag size="sm" colorScheme='teal'>
                            CEO
                        </Tag>
                    </Box>
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
            <Box>
                <Text as="p" fontSize="small">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat vero esse dicta voluptatem, eveniet voluptatum dolorum inventore quis odio iusto quos corrupti quisquam doloribus nobis at est eius nulla cum.
                </Text>
            </Box>
        </Box>
    );
}

export default CardRecommendations;