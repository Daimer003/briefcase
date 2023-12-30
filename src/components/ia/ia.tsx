'use client'

import { IaBox, ChatBox } from "@/styles/components/ia/ia.styles";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useChat } from 'ai/react';
import { RiRobot2Line } from "react-icons/ri";

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = 'experimental-edge';
const Ia = () => {
    const { messages, handleSubmit, input, handleInputChange } = useChat({ api: "/api/chat/route" });

    return (
        <IaBox>
            <Box
                bg={useColorModeValue('#F2CDAC', '#1e1f20')}
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
                    ¡Hola! Soy un asistente impulsado por inteligencia artificial diseñado por un visionario entusiasta de la tecnología.
                    ¿Cómo puedo ayudarlo hoy?

                </Text>
            </Box>
            <Box
                display="flex"
                gap="10px"
            >
                <Button
                    width="100%"
                >1</Button>
                <Button
                    width="100%"
                >2</Button>
                <Button
                    width="100%"
                >3</Button>
                <Button
                    width="100%"
                >4</Button>
                <Button
                    width="100%"
                >5</Button>

            </Box>
            <ChatBox
                border={useColorModeValue('#0B0C0D', '#F0F0F2')}
            >
                {/* <Text
                    color={useColorModeValue('gray.900', 'greenDawn.50')}
                    as="p"
                >...</Text> */}
                <div>
                    {messages.map(m => (
                        <div key={m.id}>
                            {m.role === 'user' ? 'User: ' : 'AI: '}
                            {m.content}
                        </div>
                    ))}

                    <form onSubmit={handleSubmit}>
                        <label>
                            Say something...
                            <input value={input} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </ChatBox>
        </IaBox>
    );
}

export default Ia;