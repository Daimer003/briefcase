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
    useColorModeValue,
    IconButton,
    Spacer
} from "@chakra-ui/react";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { validateField } from "../../utils/functios";



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
        const res = await validateField(formComment)
        if (res.emptyField) {
            setAddData(true)
            return
        }
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
    const selectAvatar = (avatar: string) => {
        setFormComment({
            ...formComment,
            ["profile"]: avatar
        })
    }

    console.log(formComment)

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
                    <Spacer />
                    <Box>
                        <IconButton
                            isRound={true}
                            aria-label="Toggle theme"
                            icon={<MdModeEdit size='20px' />}
                        >
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    border="1px"
                    borderColor="#cfffaa"
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
                            bg='#0e1515'
                            border='1px'
                            color='white'
                            borderColor='gray.900'
                        />
                    </Box>
                    <Button
                        width="100%"
                        isLoading={isLoadingRes}
                        borderColor="gray.900"
                        background="#255a4e"
                        color={useColorModeValue('gray.100', '#6cffd9')}
                        onClick={comment}
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
                <EditUser
                    getDataForm={getDataForm}
                    selectAvatar={selectAvatar}
                />
            </ModalGlobal>
        </Box >
    );
}

export default Recommendations;