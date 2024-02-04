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


const Works = () => {
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
                                        paragraph={project.paragraph}
                                        technologies={project.technologies}
                                    />
                                </Center>
                            </WrapItem>
                        )
                    })}
            </Wrap >
            <Technologies />
        </Box>
    );
}

export default Works;