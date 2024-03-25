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
    Spacer,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { getFingerprint, validateField } from "../../utils/functios";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { motion } from 'framer-motion'



const Recommendations = () => {
    const [isLoadingRes, setIsLoadingRes] = useState<boolean>(false)
    const [addData, setAddData] = useState<boolean>(false)
    const [commentGenerated, setCommentGenerated] = useState<boolean>(true)
    const [comments, setComments] = useState<any>([])
    const [formComment, setFormComment] = useState<any>({
        name: "",
        link: "",
        profile: "",
        comment: "",
        color: "red",
        huella: "",
        avatar: ""
    })

    const { isLoading, error, data, getData } = useVisitorData(
        { extendedResult: true },
        { immediate: true }
    )

    useEffect(() => {
        (async () => {
            const huella = await getFingerprint()
            console.log(huella)
        })()
    }, [])


    //Cuando recien se monta el componente, valido los campos
    useEffect(() => {
        const res = validateField(formComment)
        if (res.emptyField) {
            setAddData(true)
            return
        }
    }, [])

    //*Función para crear los comentarios
    const comment = async () => {
        const res = validateField(formComment)
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
            setCommentGenerated(false)
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


    useEffect(() => {
        (async () => {
            const response = await ServiceComment.getComment()
            if (response) {
                setComments(response)
            }
            console.log("Datos de los comentarios", response)
        })()
    }, [isLoadingRes])

    const selectAvatar = (avatar: string) => {
        setFormComment({
            ...formComment,
            ["profile"]: avatar
        })
    }


    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <Box
                display='flex'
                flexDir='column'
            >
                {/* <Alert status='error' marginBottom="20px" borderRadius="8px">
                    <AlertIcon />
                    <AlertTitle>Vista de prueba:</AlertTitle>
                    <AlertDescription>La sección de comentarios aún no está disponible.</AlertDescription>
                </Alert> */}
                {
                    commentGenerated === false && ( // Muestra la alerta solo si commentGenerated es falso
                        <Alert status="success" marginBottom="20px" borderRadius="8px">
                            <AlertIcon />
                            <AlertTitle>Vista de prueba:</AlertTitle>
                            <AlertDescription>Su comentario se agrego.</AlertDescription>
                        </Alert>
                    )}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: commentGenerated ? 1 : 0, scale: commentGenerated ? 1 : 0 }} // Animación basada en commentGenerated
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ display: commentGenerated ? 'block' : 'none' }} // Muestra/oculta según commentGenerated
                >

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
                            <Avatar name="Dan Abrahmov" src={formComment.profile} colorScheme="gray" />
                        </WrapItem>
                        <Box>
                            <Text as="h5" fontSize="small">{formComment.name}</Text>
                            <Text as="p" fontSize="small">{formComment.profile}</Text>
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
                                    {formComment.link}
                                </Button>
                            </Box>
                        </Box>
                        <Spacer />
                        <Box>
                            <IconButton isRound aria-label="Toggle theme" icon={<MdModeEdit size="20px" />} />
                        </Box>
                    </Box>

                    <Box // Caja del formulario
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
                        <Box width="100%" height="100%">
                            <Textarea // Campo de texto
                                name="comment"
                                onChange={getDataForm}
                                placeholder="Comenta aquí"
                                bg="#0e1515"
                                border="1px"
                                color="white"
                                borderColor="gray.900"
                            />
                        </Box>
                        <Button // Botón de comentar
                            width="100%"
                            isLoading={isLoadingRes}
                            borderColor="gray.900"
                            background="#255a4e"
                            color={useColorModeValue("gray.100", "#6cffd9")}
                            onClick={comment}
                        >
                            {addData ? "Editar" : "Comentar"}
                        </Button>
                    </Box>
                </motion.div>
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                marginTop="40px"
                gap="20px"
            >
                {
                    comments.map((comment: any, index: number) => (
                        <CardRecommendations
                            key={index}
                            data={comment}
                        />
                    ))
                }


            </Box>
            {/* 
            <button onClick={() => getData({ ignoreCache: true })}>
                Reload data
            </button>
            <p>VisitorId: {isLoading ? 'Loading...' : data?.visitorId}</p>
            <p>Full visitor data:</p>
            <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre> */}
            <ModalGlobal
                title=""
                isOpen={addData}
                onClose={() => setAddData(false)}
                size="lg"
            >
                <EditUser
                    getDataForm={getDataForm}
                    selectAvatar={selectAvatar}
                    comment={() => setAddData(false)}
                    fields={formComment}
                />
            </ModalGlobal>
        </Box >
    );
}

export default Recommendations;