import { useState } from "react";
import {
    Box,
    Wrap,
    WrapItem,
    Center,
    Text
} from "@chakra-ui/react";
import CardProyect from "@/components/smallComponents/cardProyect";
import { projectsInProduction } from "../../utils/data";
import Technologies from "@/components/technologies/technologies";
import ModalGlobal from "@/components/shared/modal/modal";
import Detail from "@/components/detail";
import Pagination from "@/components/pagination";


const Works = () => {
    const [detailsProyect, setDetailsProyect] = useState<any>()
    const [executeModal, setExecuteModal] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; //* Numero de filas 

    //*Ejecuta el modal para ver los detalles
    const modalDetailsWorks = () => {
        setExecuteModal(true)
    }

    //* Ejecuta el modal para ver los detalles del proyecto
    const seeDetailsWorks = (project: any) => {
        setDetailsProyect(project)
        modalDetailsWorks()
    }

    //* Pagina
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    return (
        <Box
            padding="10px"
            boxSizing="border-box"
        >
            <Box
                width="100%"
                height="auto"
                marginTop="10px">
                <Text
                    as="h3"
                    fontSize="x-large"
                    fontWeight="bold"
                >
                    Proyectos recientes en producciòn
                </Text>
            </Box>
            <Box
                display='flex'
                flexDir='column'
                position='relative'
                gap='20px'
            >
                <Wrap
                    spacing='20px'
                    justify='center'
                    marginTop="40px"
                >
                    {
                        projectsInProduction.map(project => {
                            return (
                                <WrapItem key={project.id}>
                                    <Center w='100%' maxW="380px" h='auto'>
                                        <CardProyect
                                            title={project.title}
                                            imagen={project.imagen}
                                            paragraph={project?.description}
                                            technologies={project.technologies}
                                            details={() => seeDetailsWorks(project)}
                                        />
                                    </Center>
                                </WrapItem>
                            )
                        })}

                </Wrap >
                <Pagination
                    currentPage={currentPage}
                    totalItems={projectsInProduction.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </Box>

            <Technologies />

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
}

export default Works;