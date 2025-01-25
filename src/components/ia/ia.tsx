"use client";

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
  Spinner,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useChat } from "ai/react";
import { useEffect, useState, useRef } from "react";
import { data } from "./data";
import parse from "html-react-parser";

export const runtime = "experimental-edge";
const Ia = () => {
  const {
    messages,
    handleSubmit,
    handleInputChange,
    setInput,
    input,
    isLoading,
  } = useChat({
    api: "/api/chat/route",
    initialMessages: [
      {
        id: "1",
        role: "system",
        content: data,
      },
    ],
  });

  const myDivRef = useRef<HTMLDivElement>(null);
  const [question, setQuestion] = useState<string>("false");

  //*Identifica los enlaces que esten en el texto
  const parseMessage = (content: any) => {
    const withLinks = content.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    return parse(withLinks);
  };

  //* Escucha si ya la IA respondio, mientras muestro un Spinner.
  const loadingIa = () => {
    if (isLoading) return <Spinner />;
  };

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
    <Box padding="10px" boxSizing="border-box">
      <IaBox>
        <Box
          display="flex"
          flexDir="column"
          bg={useColorModeValue("#E2E8F0", "#011221")}
          css={{ backdropFilter: "blur(20px)" }}
          padding="10px"
          boxSizing="border-box"
          gap="10px"
        >
          <BoxText>
            <Text alignItems="center" gap="5px" color="white" as="h4">
              ¡Hola! Soy un asistente impulsado por inteligencia artificial
              diseñado por un visionario entusiasta de la tecnología.
              <span> ¿Cómo puedo ayudarte hoy?</span>
            </Text>
          </BoxText>
          <Box display="flex" flexDirection="column" gap="10px">
            <Button
              width="100%"
              background="#43D9AD"
              color={useColorModeValue("gray.100", "#211818")}
              onClick={() => {
                setQuestion("true");
                scrollTop();
              }}
            >
              Realizame una pregunta sobre Daymer ¿...?
            </Button>

            <Box display="flex" width="100%" gap="10px">
              <Box
                display="flex"
                flexDir="column"
                width="100%"
                onClick={scrollTop}
              >
                <Button
                  display="flex"
                  justifyContent="start"
                  width="100%"
                  background="transparent"
                  color={useColorModeValue("gray.100", "#efefef")}
                  onClick={() => {
                    setInput("Experiencia y habilidades técnicas?");
                    setQuestion("true");
                  }}
                >
                  <Heading
                    as="span"
                    size="sm"
                    noOfLines={1}
                    fontFamily="M PLUS Rounded 1c"
                  >
                    ¿Experiencia y habilidades técnicas?
                  </Heading>
                </Button>
                <Button
                  display="flex"
                  justifyContent="start"
                  width="100%"
                  background="transparent"
                  color={useColorModeValue("gray.100", "#e5e5e5")}
                  onClick={() => {
                    setInput("Formación y aprendizaje continuo?");
                    setQuestion("true");
                  }}
                >
                  <Heading
                    as="span"
                    size="sm"
                    noOfLines={1}
                    fontFamily="M PLUS Rounded 1c"
                  >
                    ¿Formación y aprendizaje continuo?
                  </Heading>
                </Button>
                <Button
                  display="flex"
                  justifyContent="start"
                  width="100%"
                  background="transparent"
                  color={useColorModeValue("gray.100", "#e5e5e5")}
                  onClick={() => {
                    setInput("Colaboración y resolución de problemas?");
                    setQuestion("true");
                  }}
                >
                  <Text as="span" size="sm" fontFamily="M PLUS Rounded 1c">
                    ¿Colaboración y resolución de problemas?
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            width="100%"
            minHeight="150px"
            maxHeight="300px"
            position="relative"
          >
            <ChatBox
              border={useColorModeValue("#0B0C0D", "#2c3d4d")}
              ref={myDivRef}
            >
              <Box
                width="100%"
                height="100%"
                bg="#011425"
                borderRadius="6px"
                padding="10px"
              >
                <SearchBox opensearch={question}>
                  <form onSubmit={handleSubmit}>
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="¿Pregunta?"
                    />
                    <Button onClick={() => setQuestion("false")} type="submit">
                      Enviar
                    </Button>
                  </form>
                </SearchBox>
                <ContentChat>
                  {messages
                    .filter((m) => m.role !== "system")
                    .map((m) => (
                      <Box key={m.id}>
                        {m.role === "user" ? (
                          <Text
                            color={useColorModeValue("#38A169", "#68D391")}
                            as="span"
                          >
                            User:{" "}
                          </Text>
                        ) : (
                          <Text
                            color={useColorModeValue("#ED64A6", "#F687B3")}
                            as="span"
                          >
                            AI:{" "}
                          </Text>
                        )}
                        {parseMessage(m.content)}
                      </Box>
                    ))}

                  <Stack justify="center" align="center" w="100%" h="100%" mt={3}>
                    <Text color="yellow">
                      Lo sentimos, los tokens disponibles se han agotado. No es
                      posible continuar con la operación.
                    </Text>
                  </Stack>

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
              </Box>
            </ChatBox>
          </Box>
        </Box>
      </IaBox>
    </Box>
  );
};

export default Ia;
