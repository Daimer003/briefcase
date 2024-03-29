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
    AlertDescription,
    Skeleton
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { getFingerprint } from "../../utils/functios";
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}


const Recommendations = () => {
    const [isLoadingRes, setIsLoadingRes] = useState<boolean>(false)
    const [addData, setAddData] = useState<boolean>(false)
    const [commentGenerated, setCommentGenerated] = useState<boolean>(true)
    const [comments, setComments] = useState<any>([])
    const [found, setFound] = useState<boolean>(true)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const [formComment, setFormComment] = useState<any>({
        name: "",
        link: "",
        profile: "",
        comment: "",
        color: "white",
        huella: "",
        avatar: ""
    })

    // const validComments = async () => {
    //     if (comments) {
    //         const res = validateField(formComment)
    //         if (res.emptyField) {
    //             setAddData(true)
    //         }
    //     }
    // }


    //*
    useEffect(() => {
        (async () => {
            const huella = await getFingerprint()
            if (huella) {
                setFormComment({
                    ...formComment,
                    ["huella"]: huella
                })
            }
        })()
    }, [])

    //*Función para crear los comentarios
    const comment = async () => {
        try {
            const {
                name,
                link,
                profile,
                comment,
                color,
                huella,
                avatar
            } = formComment
            const response = await ServiceComment.createComment(
                {
                    name,
                    link,
                    profile,
                    comment,
                    color,
                    huella,
                    avatar
                }
            )
            setCommentGenerated(false)
            console.log("Respuesta crear comentario", response)
            if (response) {
                setIsLoadingRes(false)
                getComments()
            }
        } catch (error) {
            console.log("Fallo el servicio crear comentarios")
            setIsLoadingRes(false)
        }
    }

    //*Obtiene los datos ingresados por el usuario
    const getDataForm = (event: any) => {
        const { name, value } = event.target
        setFormComment({
            ...formComment,
            [name]: value
        })
    }

    //* Obtiene los comentarios de la db 
    const getComments = async () => {
        let isComment = true
        const response = await ServiceComment.getComment()
        console.log(response)
        if (response) {
            await setComments(response.reverse())
            setIsLoaded(true)

            if (response.length > 0) {
                const huella = await getFingerprint()

                for (const comment of response) {
                    if (comment.huella === huella) {
                        isComment = true
                        break;
                    }
                }

                if (isComment && response) {
                    setFound(true)
                } else {
                    setFound(false)
                    setAddData(true)
                }
                return
            } else {
                setFound(false)
                setAddData(true)
            }
        }
    }


    //* Obtiene los comentarios cuando se carga el componente. 
    useEffect(() => {
        getComments()
    }, [])

    //* Actualiza formComment con el avatar seleccionado
    const selectAvatar = (avatar: string, color: string) => {
        setFormComment({
            ...formComment,
            ["avatar"]: avatar,
            ["color"]: color
        })
    }

    return (
        <Box
            width="100%"
            height="auto"
            padding="10px"
            boxSizing="border-box"
        >
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative' }}
            >
                <Box
                    display='flex'
                    flexDir='column'
                >
                    {
                        commentGenerated === false && ( // Muestra la alerta solo si commentGenerated es falso
                            <Alert status="success" marginBottom="20px" borderRadius="8px">
                                <AlertIcon />
                                <AlertTitle>Exelente:</AlertTitle>
                                <AlertDescription>Su comentario se agrego.</AlertDescription>
                            </Alert>
                        )}
                    <Skeleton
                        height='auto'
                        isLoaded={isLoaded}
                        startColor='#0e1515' endColor='#112420'
                        fadeDuration={1}
                        borderRadius="16px"
                    >
                        {
                            !found ?

                                <>
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
                                </>

                                : <></>
                        }
                    </Skeleton>
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

            </motion.div>

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