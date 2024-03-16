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
    useColorModeValue
} from "@chakra-ui/react";
import { profiles } from "../../../utils/data";

interface Props {
    getDataForm: (event: any) => void
}

const EditUser = ({ getDataForm }: Props) => {
    return (
        <Box
            display='flex'
            flexDir='column'
            gap='10px'
        >

            <Wrap
                display='flex'
                border="1px"
                borderColor={useColorModeValue('#0B0C0D', '#2c3431')}
                bg='#141e1e81'
                padding='10px'
                borderRadius='8px'
                spacing={4}
                marginTop='15px'
            >
                <WrapItem >
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>

                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
                <WrapItem>
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
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
            // onClick={comment}
            >
                Comentar
            </Button>
        </Box>
    );
}

export default EditUser;