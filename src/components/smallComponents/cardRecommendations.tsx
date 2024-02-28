import {
    Box,
    Avatar,
    WrapItem,
    Text,
    Button,
    Link,
    Tag
} from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io";

interface Props {
    data: {
        color: string
    }
}

const CardRecommendations = ({ data }: Props) => {
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
                    <Avatar name='Dan Abrahmov' src='' size="sm" background={data.color} />
                </WrapItem>
                <Box>
                    <Box display="flex" gap="10px">
                        <Text as="h5" fontSize="small">Usuario</Text>
                        <Tag size="sm" colorScheme={data.color}>
                            CEO
                        </Tag>
                    </Box>
                    <Box>
                        <Link href="https://www.linkedin.com/in/daymer-perdomo-5aa0a5137/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme={data.color}
                                margin="0"
                                padding="0"
                                height="auto"
                                fontSize="small"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                Carlos Perez
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