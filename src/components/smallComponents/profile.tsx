import {
    Box,
    Heading,
    Spacer,
    Text,
    List,
    ListItem,
    Link,
    Button,
    useColorModeValue
} from "@chakra-ui/react";
import Image from "next/image";
import Paragraphs from "./paragraphs";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
} from '@chakra-ui/react'

import { FaFutbol, FaInstagram } from "react-icons/fa";
import { GoFileCode } from "react-icons/go";
import { GiRobotGolem, GiBookshelf } from "react-icons/gi";
import { IoMdCafe } from "react-icons/io";
import { FaGitlab } from "react-icons/fa6";



const Profile = () => {
    return (
        <Box>
            <Box
                display={{ md: 'flex' }}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="auto"
                padding="10px"
                boxSizing="border-box"
                gap="10px"
            >
                <Box>
                    <Heading as="h2" variant="page-title">
                        Daymer Perdomo Molina
                    </Heading>
                    <p>Frontend developer (Técnico de aeronaves).</p>
                </Box>
                <Spacer />
                <Box
                    display="flex"
                    width="100px"
                    height="100px"
                    borderRadius="50%"
                    overflow="hidden"
                    border={`3px solid ${useColorModeValue('#D0D9D6', '#1e1f20')}`}
                    margin="20px auto"
                >
                    <Image
                        src="/assets/daimer.webp"
                        alt="Imagen del perfil"
                        width={100}
                        height={100}
                    />
                </Box>
            </Box>
            <Paragraphs>
                Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants.
                He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.
                When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
                He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.
            </Paragraphs>
            <Box
                display="flex"
                flexDirection="column"
                padding="10px"
                boxSizing="border-box"
                gap="10px"
            >
                <Text
                    as="h3"
                    fontSize="x-large"
                    fontWeight="bold"
                >Biografía</Text>
                <Box display="flex" gap="10px">
                    <Text as="span" fontWeight="bold">
                        1989
                    </Text>
                    <Text as="p">
                        Nace en Colombia.
                    </Text>
                </Box>
                <Box display="flex" gap="5px">
                    <Text as="span" fontWeight="bold">
                        2013
                    </Text>
                    <Text as="p">
                        Completó el programa de tecnico y especialista en electronica, en la institucion Corporacion Educativa Indoamericana.
                    </Text>
                </Box>
                <Box display="flex" gap="5px">
                    <Text as="span" fontWeight="bold">
                        2019
                    </Text>
                    <Text as="p">
                        Completó el programa de Full Stack en la Escuela de Acamica, estudios en tecnologias para el desarrollo de aplicaciones.
                    </Text>
                </Box>
                <Box display="flex" gap="5px">
                    <Text as="span" fontWeight="bold">
                        2024
                    </Text>
                    <Text as="p">
                        En la actualidad trabajo para la empresa Dcorp, y autonomo.
                    </Text>
                </Box>

                <Box marginTop="10px">
                    <Text
                        as="h3"
                        fontSize="x-large"
                        fontWeight="bold"
                    >Yo ♥</Text>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        gap="10px"
                        marginTop="10px"
                    >
                        <Tag
                            size='lg'
                            colorScheme='red'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={FaFutbol} />
                            <TagLabel>Futbol</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='blue'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GiRobotGolem} />
                            <TagLabel>Robotica</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='green'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GoFileCode} />
                            <TagLabel>Programciòn</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='purple'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GiBookshelf} />
                            <TagLabel>Aprendizaje automático</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='yellow'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={IoMdCafe} />
                            <TagLabel>Cafecito</TagLabel>
                        </Tag>
                    </Box>
                </Box>

                <Box marginTop="10px">
                    <Text
                        as="h3"
                        fontSize="x-large"
                        fontWeight="bold"
                    >
                        En la red
                    </Text>
                    <List>
                        <ListItem>
                            <Link href="https://www.instagram.com/daymerperdomo/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<FaInstagram />}
                                >
                                    @daymerperdomo
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://gitlab.com/Daymer" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<FaGitlab />}
                                >
                                    @Daymer
                                </Button>
                            </Link>
                        </ListItem>

                    </List>
                </Box>

                <Box marginTop="10px">
                    <Text
                        as="h3"
                        fontSize="x-large"
                        fontWeight="bold"
                    >
                        Proyectos en curso...
                    </Text>
                </Box>
            </Box>

        </Box>
    );
}

export default Profile;