import { useState } from "react";
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
  Center,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import Paragraphs from "./paragraphs";

import { FaFutbol, FaInstagram } from "react-icons/fa";
import { GoFileCode } from "react-icons/go";
import { GiRobotGolem, GiBookshelf } from "react-icons/gi";
import { IoMdCafe, IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import CardProyect from "./cardProyect";
import { ongoingProjects, projectsInProduction } from "../../../utils/data";
import ModalGlobal from "../shared/modal/modal";
import Detail from "../detail";
import History from "../history";
import Pagination from "@/components/pagination";
const itemsPerPage = 4; //* Numero de filas

const Profile = () => {
  const [detailsProyect, setDetailsProyect] = useState<any>();
  const [executeModal, setExecuteModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);

  //*Ejecuta el modal para ver los detalles
  const modalDetails = () => {
    setExecuteModal(true);
  };

  //* Ejecuta el modal para ver los detalles del proyecto
  const seeDetails = (project: any) => {
    setDetailsProyect(project);
    modalDetails();
  };

  //* Ejecuta el modal para ver los detalles del proyecto
  const seeDetailsWorks = (project: any) => {
    setDetailsProyect(project);
    modalDetails();
  };

  //* Pagina
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <Box marginTop="80px">
      <Box
        display={{ md: "flex" }}
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
          <p> Front-end developer</p>
        </Box>
        <Spacer />
        <Box
          width="150px"
          height="150px"
          borderRadius="50%"
          overflow="hidden"
          border={`3px solid ${useColorModeValue("#D0D9D6", "#1e1f20")}`}
          margin="20px auto"
        >
          <Image
            src="/assets/daimer.webp"
            alt="Imagen del perfil"
            objectFit="cover"
            quality={100}
            priority
            width={150}
            height={150}
          />
        </Box>
      </Box>

      <Paragraphs>
        Soy un profesional en constante evolución con una trayectoria destacada,
        donde me he enfocado en funciones específicas. Además, trabajo de manera
        independiente como desarrollador frontend en Medellín. Mi destreza
        abarca todo el proceso de lanzamiento de productos, desde la
        conceptualización y diseño hasta la resolución de desafíos reales
        mediante la programación. Fuera del ámbito digital, disfruto dedicar
        tiempo al desarrollo de proyectos de electrónica, explorando mi pasión
        por la innovación. Mi enfoque meticuloso y mi compromiso con la
        excelencia me impulsan constantemente a buscar nuevas formas de crear
        soluciones impactantes.
      </Paragraphs>

      <Box width="100%" height="auto" marginTop="10px">
        <Text as="h3" fontSize="x-large" fontWeight="bold">
          Proyectos recientes en producciòn
        </Text>
      </Box>

      <Box display="flex" flexDir="column" position="relative" gap="20px">
        <Wrap spacing="20px" justify="center" marginTop="40px">
          {projectsInProduction.map((project) => {
            return (
              <WrapItem key={project.id}>
                <Center w="100%" maxW="380px" h="auto">
                  <CardProyect
                    title={project.title}
                    imagen={project.imagen}
                    paragraph={project?.description}
                    technologies={project.technologies}
                    details={() => seeDetailsWorks(project)}
                  />
                </Center>
              </WrapItem>
            );
          })}
        </Wrap>

        <Pagination
          currentPage={currentPage}
          totalItems={projectsInProduction.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </Box>

      <Box width="100%" height="auto" marginTop="10px" padding="0 10px">
        <Text as="h3" fontSize="x-large" fontWeight="bold">
          Proyectos en curso...
        </Text>
      </Box>

      <Wrap spacing="20px" justify="center" marginTop="20px" padding="0 10px">
        {ongoingProjects.map((project) => {
          return (
            <WrapItem key={project.id}>
              <Center w="100%" maxW="380px" h="auto">
                <CardProyect
                  title={project.title}
                  imagen={project.imagen}
                  paragraph={project?.description}
                  technologies={project.technologies}
                  details={() => seeDetails(project)}
                />
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>

      <Box
        display="flex"
        flexDirection="column"
        padding="10px"
        boxSizing="border-box"
        marginTop="40px"
        gap="10px"
      >
        <Text as="h3" fontSize="x-large" fontWeight="bold">
          Biografía
        </Text>
        <Box display="flex" gap="10px">
          <Text as="span" fontWeight="bold">
            1989
          </Text>
          <Text as="p">Nace en Colombia.</Text>
        </Box>
        <Box display="flex" gap="5px">
          <Text as="span" fontWeight="bold">
            2013
          </Text>
          <Text as="p">
            Completé el programa de técnico y especialista en electrónica en la
            Corporación Educativa Indoamericana.
          </Text>
        </Box>
        <Box display="flex" gap="5px">
          <Text as="span" fontWeight="bold">
            2019
          </Text>
          <Text as="p">
            Completé el programa de Full Stack en la Escuela de Acámica, con
            estudios en tecnologías para el desarrollo de aplicaciones.
          </Text>
        </Box>
        <Box display="flex" gap="5px">
          <Text as="span" fontWeight="bold">
            2024
          </Text>
          <Text as="p">
            En la actualidad trabajo para la empresa Dcorp, y también soy
            independiente.
          </Text>
        </Box>

        {/* COMPONENTE  YO */}
        <Box marginTop="10px">
          <Text as="h3" fontSize="x-large" fontWeight="bold">
            Yo ♥
          </Text>
          <Box display="flex" flexWrap="wrap" gap="10px" marginTop="10px">
            <Tag
              size="lg"
              bg="#b9bfef"
              color="#000000"
              border="1px"
              borderColor="#2c3431"
              borderRadius="4px"
            >
              <TagLeftIcon boxSize="12px" as={FaFutbol} />
              <TagLabel>Futbol</TagLabel>
            </Tag>
            <Tag
              size="lg"
              bg="#b9bfef"
              color="#000000"
              borderColor="#2c3431"
              border="1px"
              borderRadius="4px"
            >
              <TagLeftIcon boxSize="12px" as={GiRobotGolem} />
              <TagLabel>Robótica</TagLabel>
            </Tag>
            <Tag
              size="lg"
              bg="#b9bfef"
              color="#000000"
              borderColor="#2c3431"
              border="1px"
              borderRadius="4px"
            >
              <TagLeftIcon boxSize="12px" as={GoFileCode} />
              <TagLabel>Programciòn</TagLabel>
            </Tag>
            <Tag
              size="lg"
              bg="#b9bfef"
              color="#000000"
              borderColor="#2c3431"
              border="1px"
              borderRadius="4px"
            >
              <TagLeftIcon boxSize="12px" as={GiBookshelf} />
              <TagLabel>Aprendizaje autodidacta</TagLabel>
            </Tag>
            <Tag
              size="lg"
              bg="#b9bfef"
              color="#000000"
              borderColor="#2c3431"
              border="1px"
              borderRadius="4px"
            >
              <TagLeftIcon boxSize="12px" as={IoMdCafe} />
              <TagLabel>Cafecito</TagLabel>
            </Tag>
          </Box>
        </Box>

        {/* COMPONENTE EN LA RED */}
        <Box marginTop="10px">
          <Text as="h3" fontSize="x-large" fontWeight="bold">
            En la red
          </Text>
          <List>
            <ListItem>
              <Link
                href="https://www.instagram.com/daymerperdomo/"
                target="_blank"
              >
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
              <Link href="https://github.com/Daimer003" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaGithub />}
                >
                  @Daymer
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/daymer-perdomo-molina-5aa0a5137/"
                target="_blank"
              >
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

        {/* COMPONENTE HISTORIA DE COMMITS */}
        <History />
      </Box>

      <ModalGlobal
        title=""
        isOpen={executeModal}
        onClose={() => setExecuteModal(false)}
        size="xl"
      >
        <Detail data={detailsProyect} />
      </ModalGlobal>
    </Box>
  );
};

export default Profile;
