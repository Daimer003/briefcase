import { BoxDetails } from "@/styles/detail/detail.styles";
import {
    Box,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import parse from "html-react-parser";

interface Props {
    data: any
}





const Detail = ({ data }: Props) => {
    return (
        <BoxDetails
            bg={useColorModeValue('#E2E8F0', '#22222252')}
            css={{ backdropFilter: 'blur(20px)' }}
            borderRadius="8px"
            marginTop='5px'
        >
            <Box
                display='flex'
                flexDir='column'
                gap='10px'
                padding='10px'
                boxSizing='border-box'
            >
                <Text as="h2" fontSize="x-large">{data.title}</Text>
                {/* <Text as="p">{data.description[0].paragraph}</Text> */}
                {
                    data.description[0].technology.map((details: any, index: number) => (
                        <Box key={index}>
                            <BoxDetails>
                                {parse(details)}
                            </BoxDetails>
                        </Box>

                    ))
                }

            </Box >
        </BoxDetails>
    );
}

export default Detail;