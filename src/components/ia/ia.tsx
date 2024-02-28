'use client'

import {
    IaBox,
    ChatBox,
    SearchBox,
    ContentChat,
    BoxText,
} from "@/styles/components/ia/ia.styles";
import {
    Box,
    Button,
    Input,
    Text,
    useColorModeValue,
    useDisclosure,
    Spinner,
    Heading
} from "@chakra-ui/react";
import { useChat } from 'ai/react';
import ModalGlobal from "../shared/modal/modal";
import { useEffect, useState, useRef } from "react";
import { data } from "./data";
import parse from "html-react-parser";


export const runtime = 'experimental-edge';
const Ia = () => {
    const {
        messages,
        setMessages,
        handleSubmit,
        handleInputChange,
        setInput,
        input,
        isLoading
    } = useChat(
        {
            api: "/api/chat/route",
            initialMessages: [
                {
                    id: "1",
                    role: "system",
                    content: data
                }
            ]
        });
    const myDivRef = useRef<HTMLDivElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState<any>("")
    const [question, setQuestion] = useState<string>("false")

    //* Setea el campo para una nueva pregunta
    const setChat = () => {
        setMessages(
            []);
    }

    //*Obtiene el valor del input (Name)
    const gettheValue = (e: any) => {
        const name = e.target.value
        setName(name)
    }

    //*Identifica los enlaces que esten en el texto
    const parseMessage = (content: any) => {
        const withLinks = content.replace(
            /\[(.*?)\]\((.*?)\)/g,
            '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
        );
        return parse(withLinks);
    };

    const handleName = () => {
        localStorage.setItem("visitor", name)
    }

    //* Si la variable (visitor) no esta en el localStorange, ejecuta el modal
    useEffect(() => {
        (async () => {
            const dataName = await localStorage.getItem("visitor")
            if (!dataName) return onOpen();
            setName(dataName)
        })()
    }, [name])

    //* Escucha si ya la IA respondio, mientras muestro un Spinner.
    const loadingIa = () => {
        if (isLoading) return <Spinner />
    }

    //* Esta función hará scroll al inicio del div cuando se actualice el contenido
    const scrollToBottom = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollTop = myDivRef.current.scrollHeight;
        }
    };

    //* Esta función hará scroll al inicio
    const scrollTop = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollTop = 0;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <IaBox>
            <BoxText
                bg={useColorModeValue('#E2E8F0', '#1e1f20')}
            >
                <Text
                    alignItems="center"
                    gap="5px"
                    color={useColorModeValue('white', 'greenDawn.50')}
                    as="h4"
                >
                    {/* <RiRobot2Line /> */}
                    ¡Hola! Soy un asistente impulsado por inteligencia artificial diseñado por un visionario entusiasta de la tecnología.
                    <span> ¿Cómo puedo ayudarte hoy <strong>{name}</strong>?</span>
                </Text>

            </BoxText>
            <Box
                display="flex"
                flexDirection="column"
                gap="10px"
            >
                <Box
                    display="flex"
                    width="100%"
                    gap="10px"
                >
                    <Box
                        display="flex"
                        width="100%"
                        gap="10px"
                        onClick={scrollTop}
                    >
                        <Button
                            width="100%"
                            colorScheme='gray'
                            border='1px'
                            borderColor='gray.900'
                            overflow="hidden"

                            onClick={() => {
                                setInput('Experiencia y habilidades técnicas?')
                                setQuestion("true")
                            }}
                        >
                            <Heading
                                as='span'
                                size="sm"
                                noOfLines={1}
                                fontFamily="M PLUS Rounded 1c"
                            >
                                Experiencia y habilidades técnicas?
                            </Heading>
                        </Button>
                        <Button
                            width="100%"
                            colorScheme='gray'
                            border='1px'
                            borderColor='gray.900'
                            onClick={() => {
                                setInput('Formación y aprendizaje continuo?')
                                setQuestion("true")
                            }}
                        >
                            <Heading
                                as='span'
                                size="sm"
                                noOfLines={1}
                                fontFamily="M PLUS Rounded 1c"
                            >
                                Formación y aprendizaje continuo?
                            </Heading>
                        </Button>
                        <Button
                            width="100%"
                            colorScheme='gray'
                            border='1px'
                            borderColor='gray.900'
                            onClick={() => {
                                setInput('Colaboración y resolución de problemas?')
                                setQuestion("true")
                            }}
                        >
                            <Heading
                                as='span'
                                size="sm"
                                noOfLines={1}
                                fontFamily="M PLUS Rounded 1c"
                            >
                                Colaboración y resolución de problemas?
                            </Heading>
                        </Button>
                    </Box>
                </Box>
                <Button
                    width="100%"
                    colorScheme='green'
                    border="1px"
                    borderColor="green"
                    color={useColorModeValue('gray.100', 'gray.900')}
                    onClick={() => {
                        setQuestion("true")
                        scrollTop()
                    }}
                >
                    Realizame una pregunta sobre Daymer.
                </Button>
            </Box>
            <Box
                display="flex"
                width="100%"
                minHeight="150px"
                maxHeight="300px"
                position="relative"
            >
                <ChatBox border={useColorModeValue('#0B0C0D', '#C6F6D5')} ref={myDivRef}>
                    <SearchBox opensearch={question}>
                        <form onSubmit={handleSubmit}>
                            <Input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="¿Pregunta?"
                            />
                            <Button
                                onClick={() => setQuestion("false")}
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </form>
                    </SearchBox>
                    <ContentChat >
                        {
                            messages.filter(m => m.role !== "system").map(m => (
                                <Box key={m.id}  >
                                    {m.role === 'user' ?
                                        <Text
                                            color={useColorModeValue('#38A169', '#68D391')}
                                            as="span">
                                            User: </Text> :
                                        <Text
                                            color={useColorModeValue('#ED64A6', '#F687B3')}
                                            as="span">
                                            AI: </Text>}
                                    {parseMessage(m.content)}
                                </Box>
                            ))
                        }
                        <Box
                            display="flex"
                            position="fixed"
                            bottom="0"
                            right="0"
                            padding="10px"
                            boxSizing="border-box"
                        >
                            {loadingIa()}
                        </Box>
                    </ContentChat>
                </ChatBox>
            </Box>
            <ModalGlobal
                title="Cual es tu nombre?"
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                user={name == null ? false : true}
                size="md"
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
                    <Button onClick={() => {
                        onClose()
                        handleName()
                    }}>
                        Listo
                    </Button>
                </Box>
            </ModalGlobal>
        </IaBox >
    );
}

export default Ia;