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


const Works = () => {
    const [detailsProyect, setDetailsProyect] = useState<any>()
    const [executeModal, setExecuteModal] = useState<boolean>(false)

    //*Ejecuta el modal para ver los detalles
    const modalDetailsWorks = () => {
        setExecuteModal(true)
    }

    //* Ejecuta el modal para ver los detalles del proyecto
    const seeDetailsWorks = (project: any) => {
        setDetailsProyect(project)
        modalDetailsWorks()
    }

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