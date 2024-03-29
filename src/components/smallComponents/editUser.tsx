import {
    Box,
    Avatar,
    Wrap,
    WrapItem,
    Select,
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { avatars, profiles } from "../../../utils/data";
import { validateField } from "../../../utils/functios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdModeEdit } from "react-icons/md";


interface Props {
    getDataForm: (event: any) => void,
    selectAvatar: (avatar: string, color: string) => void,
    comment: () => void,
    fields: any
}

const EditUser = ({ getDataForm, selectAvatar, comment, fields }: Props) => {
    const [myAvatar, setMyAvatar] = useState<string>('')
    const [addData, setAddData] = useState<boolean>(false)

    const select = (imagen: string, color: string) => {
        selectAvatar(imagen, color)
        setMyAvatar(imagen)
    }

    useEffect(() => {
        const res = validateField(fields)
        if (res.emptyField) {
            setAddData(true)
            return
        }
        setAddData(false)
    }, [fields])

    return (
        <Box
            display='flex'
            width='100%'
            flexDir='column'
            gap='10px'
        >
            <Wrap
                display='flex'
                justifyContent='center'
                width='100%'
                border="1px"
                borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                bg='#141e1e81'
                padding='10px'
                borderRadius='8px'
                spacing={3}
                marginTop='15px'
            >
                {
                    myAvatar.length === 0 ?
                        avatars.map((avatar, index) => (
                            <WrapItem
                                key={index}
                                cursor="pointer"
                                borderRadius='50%'
                                border="1px"
                                borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                                transform="scale(1)"
                                transition="all .5s"
                                _hover={
                                    {
                                        transform: "scale(1.1)",
                                        transition: "all .5s",
                                        borderColor: useColorModeValue('#0B0C0D', '#6cffd9')
                                    }
                                }
                            >
                                <Avatar
                                    size='lg'
                                    name='Dan Abrahmov'
                                    src={avatar.imagen}
                                    onClick={() => select(avatar.imagen, avatar.color)}
                                />
                            </WrapItem>
                        )) :
                        <Box
                            width='150px'
                            height='150px'
                            position='relative'
                        >
                            <Box
                                borderRadius='50%'
                                overflow='hidden'
                                border='1px'
                                borderColor='#6cffd9'
                            >
                                <Image
                                    src={myAvatar}
                                    alt="Imagen del avatar"
                                    width={150}
                                    height={150}
                                />
                            </Box>
                            <Box
                                display='flex'
                                width='24px'
                                height='24px'
                                position='absolute'
                                zIndex='999'
                                bottom='20px'
                                right='20px'
                            >
                                <IconButton
                                    isRound={true}
                                    colorScheme="green"
                                    aria-label="Toggle theme"
                                    icon={<MdModeEdit size='22px' />}
                                    onClick={() => setMyAvatar('')}
                                >
                                </IconButton>
                            </Box>
                        </Box>
                }
            </Wrap>
            {/* <Text as="h4">User</Text> */}
            <Input
                name='name'
                placeholder='Nombre'
                bg='#141e1e81'
                border='1px'
                borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                color='gray'
                fontSize='16px'
                height='45px'
                onChange={getDataForm}
            />
            <Select
                variant='filled'
                bg='#141e1e81'
                border='1px'
                borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                placeholder='Elige un perfil profesional'
                name="profile"
                color='gray'
                borderRadius='8px'
                h='45px'
                onChange={getDataForm}
            >
                {
                    profiles.map((profile: any, index: number) => (
                        <option key={index} value={profile.profile}>{profile.profile}</option>
                    ))
                }

            </Select>
            <Box w='100%'>
                <InputGroup
                    size='sm'
                    w='100%'
                    h='40px'
                    borderRadius='8px'
                >
                    <InputLeftAddon
                        bg='#141e1e81'
                        border='1px'
                        borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                        borderRadius='8px 0 0 8px'
                        color='gray'
                        fontSize='16px'
                        h='45px'
                    >
                        https://www.linkedin.com/in/
                    </InputLeftAddon>
                    <Input
                        variant='filled'
                        bg='#141e1e81'
                        border='1px'
                        borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                        placeholder='Usuario'
                        name='link'
                        onChange={getDataForm}
                        borderRadius='8px'
                        h='45px'
                        fontSize='16px'
                    />
                </InputGroup>

            </Box>
            <Button
                width="100%"
                marginTop='10px'
                borderRadius='8px'
                border="1px"
                borderColor="gray.900"
                background="#255a4e"
                color={useColorModeValue('gray.100', '#6cffd9')}
                // isLoading={isLoadingRes}
                onClick={comment}
            >
                Comentar
            </Button>
        </Box>
    );
}

export default EditUser;