'use client'

import {
    IaBox,
    ChatBox,
    SearchBox
} from "@/styles/components/ia/ia.styles";
import {
    Box,
    Button,
    Input,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import { useChat } from 'ai/react';
import { RiRobot2Line } from "react-icons/ri";
import ModalGlobal from "../shared/modal/modal";
import { use, useState } from "react";



// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
export const runtime = 'experimental-edge';
const Ia = () => {
    const {
        messages,
        setMessages,
        handleSubmit,
        handleInputChange,
        input
    } = useChat({ api: "/api/chat/route" });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState<any>("")
    const [question, setQuestion] = useState<string>("false")

    //* Setea el campo para una nueva pregunta
    const setChat = () => {
        setMessages([])
    }
    //*Obtiene el valor del input (Name)
    const gettheValue = (e: any) => {
        const name = e.target.value
        setName(name)
    }


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
                    ¿Cómo puedo ayudarlo hoy {name}?

                </Text>
            </Box>
            <Box
                display="flex"
                gap="10px"
            >
                <Button
                    width="100%"
                    onClick={() => setQuestion("true")}
                >Preguntar?</Button>
                <Button
                    width="100%"
                    onClick={() => setChat()}
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
                < SearchBox openSearch={question}>
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                        />
                        <Button
                            onClick={() => setQuestion("false")}
                            type="submit"
                        >Send</Button>
                    </form>
                </SearchBox>
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
                </div>
            </ChatBox>
            <ModalGlobal
                title="Cual es tu nombre?"
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            >
                <Box
                    display="flex"
                    width="auto"
                    gap="10px"
                >
                    <Input
                        type="text"
                        placeholder="Nombre"
                        onChange={gettheValue}
                    />
                    <Button
                        onClick={() => onClose()}
                    >
                        Listo
                    </Button>
                </Box>
            </ModalGlobal>
        </IaBox>
    );
}

export default Ia;