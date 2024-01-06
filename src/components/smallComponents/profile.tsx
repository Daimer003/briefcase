import {
    Box,
    Heading,
    Spacer,
    Text,
    List,
    ListItem,
    Link,
    Button,
    useColorModeValue,
    Wrap,
    WrapItem,
    Center
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
import { IoMdCafe, IoLogoLinkedin } from "react-icons/io";
import { FaGitlab } from "react-icons/fa6";
import CardProyect from "./cardProyect";
import { ongoingProjects } from "../../../utils/data";


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
                    width="150px"
                    height="150px"
                    borderRadius="50%"
                    overflow="hidden"
                    border={`3px solid ${useColorModeValue('#D0D9D6', '#1e1f20')}`}
                    margin="20px auto"
                >
                    <Image
                        src="/assets/daimer.webp"
                        alt="Imagen del perfil"
                        width={150}
                        height={150}
                    />
                </Box>
            </Box>
            <Paragraphs>
                Soy un profesional en constante evolución, con una trayectoria en Dcorp, donde mi labor se enfoca en funciones específicas. Además, trabajo de manera independiente como desarrollador frontend en Medellín.
                Mi destreza abarca todo el proceso de lanzamiento de productos, desde la conceptualización y diseño hasta la resolución de desafíos reales mediante la programación.
                Fuera del ámbito digital, disfruto dedicar tiempo al desarrollo de proyectos de electrónica, explorando mi pasión por la innovación.
                Mi enfoque meticuloso y mi compromiso con la excelencia me impulsan constantemente a buscar nuevas formas de crear soluciones impactantes.
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
                        Completé el programa de técnico y especialista en electrónica en la institución Corporación Educativa Indoamericana.
                    </Text>
                </Box>
                <Box display="flex" gap="5px">
                    <Text as="span" fontWeight="bold">
                        2019
                    </Text>
                    <Text as="p">
                        Completé el programa de Full Stack en la Escuela de Acámica, con estudios en tecnologías para el desarrollo de aplicaciones.
                    </Text>
                </Box>
                <Box display="flex" gap="5px">
                    <Text as="span" fontWeight="bold">
                        2024
                    </Text>
                    <Text as="p">
                        En la actualidad trabajo para la empresa Dcorp, y también soy independiente.
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
                            border='1px'
                            borderColor='red'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={FaFutbol} />
                            <TagLabel>Futbol</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='blue'
                            border='1px'
                            borderColor='blue'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GiRobotGolem} />
                            <TagLabel>Robótica</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='green'
                            border='1px'
                            borderColor='green'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GoFileCode} />
                            <TagLabel>Programciòn</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='purple'
                            border='1px'
                            borderColor='purple'
                            borderRadius="4px"
                        >
                            <TagLeftIcon boxSize='12px' as={GiBookshelf} />
                            <TagLabel>Aprendizaje autodidacta</TagLabel>
                        </Tag>
                        <Tag
                            size='lg'
                            colorScheme='yellow'
                            border='1px'
                            borderColor='yellow'
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
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/daymer-perdomo-5aa0a5137/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoLinkedin />}
                                >
                                    Daymer Perdomo
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                <Box
                    width="100%"
                    height="auto"
                    marginTop="10px">
                    <Text
                        as="h3"
                        fontSize="x-large"
                        fontWeight="bold"
                    >
                        Proyectos en curso...
                    </Text>
                </Box>
                <Wrap spacing='20px' justify='center'>
                    {
                        ongoingProjects.map(project => {
                            return (
                                <WrapItem key={project.id}>
                                    <Center w='100%' maxW="380px" h='380px'>
                                        <CardProyect
                                            title={project.title}
                                            imagen={project.imagen}
                                            paragraph={project.paragraph}
                                            technologies={project.technologies}
                                        />
                                    </Center>
                                </WrapItem>
                            )
                        })}
                </Wrap >
            </Box >

        </Box >
    );
}

export default Profile;