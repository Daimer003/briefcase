import ModalGlobal from "@/components/shared/modal/modal";
import CardRecommendations from "@/components/smallComponents/cardRecommendations";
import EditUser from "@/components/smallComponents/editUser";
import { ServiceComment } from "@/services/service.comment";
import {
    Box,
    Avatar,
    WrapItem,
    Text,
    Button,
    Textarea,
    Link,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";


const Recommendations = () => {
    const [isLoadingRes, setIsLoadingRes] = useState<boolean>(false)
    const [addDat, setAddData] = useState<boolean>(false)
    const [formComment, setFormComment] = useState<any>({
        name: "",
        link: "",
        profile: "",
        comment: "",
        color: ""
    })

    //*Función para crear los comentarios
    const comment = async () => {
        setIsLoadingRes(true)
        try {
            const {
                name,
                link,
                profile,
                comment,
                color
            } = formComment
            const response = await ServiceComment.createComment(
                {
                    name,
                    link,
                    profile,
                    comment,
                    color
                }
            )
            console.log("Respuesta crear comentario", response)
            if (response) {
                setIsLoadingRes(false)
            }
        } catch (error) {
            setIsLoadingRes(false)
        }
    }

    const getDataForm = (event: any) => {
        const { name, value } = event.target

        setFormComment({
            ...formComment,
            [name]: value
        })
    }


    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <Box>
                {/* <Alert status='error' marginBottom="20px" borderRadius="8px">
                    <AlertIcon />
                    <AlertTitle>Vista de prueba:</AlertTitle>
                    <AlertDescription>La sección de comentarios aún no está disponible.</AlertDescription>
                </Alert> */}
                <Box
                    display="flex"
                    alignItems="center"
                    width="100%"
                    height="auto"
                    gap="10px"
                    cursor="pointer"
                    onClick={() => setAddData(true)}
                >
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='' colorScheme="gray" />
                    </WrapItem>
                    <Box>
                        <Text as="h5" fontSize="small">Daymer Perdomo</Text>
                        <Text as="p" fontSize="small">Cargo</Text>
                        <Box>

                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                margin="0"
                                padding="0"
                                height="auto"
                                fontSize="small"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                Daymer Perdomo
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    border="1px"
                    borderColor="gray.800"
                    borderRadius="8px"
                    padding="10px"
                    boxSizing="border-box"
                    marginTop="10px"
                    gap="10px"
                >
                    <Box
                        width="100%"
                        height="100%"
                    >
                        <Textarea
                            name="comment"
                            onChange={getDataForm}
                            placeholder='Comenta aquí'
                            bg='gray.900'
                            border='1px'
                            color='white'
                            borderColor='gray.900'
                        />
                    </Box>
                    <Button
                        width="100%"
                        isLoading={isLoadingRes}
                        onClick={comment}
                        bg='gray.900'
                    >
                        Comentar
                    </Button>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                marginTop="40px"
                gap="20px"
            >
                <CardRecommendations data={{ color: "teal" }} />
                <CardRecommendations data={{ color: "pink" }} />
                <CardRecommendations data={{ color: "purple" }} />
            </Box>
            <ModalGlobal
                title=""
                isOpen={addDat}
                onClose={() => setAddData(false)}
                size="lg"
            >
                <EditUser getDataForm={getDataForm} />
            </ModalGlobal>
        </Box >
    );
}

export default Recommendations;