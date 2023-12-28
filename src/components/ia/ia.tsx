import { IaBox, ChatBox } from "@/styles/components/ia/ia.styles";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { RiRobot2Line } from "react-icons/ri";


const Ia = () => {
    return (
        <IaBox>
            <Box
                bg={useColorModeValue('#F2CDAC', '#4F5559')}
                padding="10px"
                boxSizing="border-box"
                borderRadius="var(--border-radius-small)"

            >
                <Text
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    color={useColorModeValue('gray.900', 'greenDawn.50')}
                    as="h4"
                >
                    {/* <RiRobot2Line /> */}
                    ¡Hola! Soy un asistente impulsado por inteligencia artificial diseñado por un visionario entusiasta de la tecnología. ¿Cómo puedo ayudarlo hoy?

                </Text>
            </Box>
            <ChatBox
                border={useColorModeValue('#0B0C0D', '#F0F0F2')}
            >
                <Text
                    color={useColorModeValue('gray.900', 'greenDawn.50')}
                    as="p"
                >...</Text>
            </ChatBox>
        </IaBox>
    );
}

export default Ia;