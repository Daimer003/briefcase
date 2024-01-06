
import { Box, Text, Wrap, WrapItem, Center, Tag, TagLabel } from '@chakra-ui/react'
import Image from 'next/image';
import { technologies } from '../../../utils/data';


const Technologies = () => {
    return (
        <Box marginTop="20px">
            <Box
                width="100%"
                height="auto"
            >
                <Text
                    as="h3"
                    fontSize="x-large"
                    fontWeight="bold"
                >
                    Tecnologias y herramientas
                </Text>
            </Box>
            <Wrap marginTop="40px">
                {
                    technologies.map(t => {
                        return (
                            <WrapItem key={t.id} margin="auto">
                                <Center w='180px' h='80px'>
                                    <Tag
                                        width="100%"
                                        colorScheme={t.color}
                                        border='1px'
                                        opacity="50%"
                                        borderColor={t.color}
                                        borderRadius='6px'
                                        padding="10px"
                                        gap="10px"
                                    >
                                        <Image
                                            src={t.icon}
                                            alt='Icono'
                                            width={40}
                                            height={40}
                                        />
                                        <TagLabel>{t.name}</TagLabel>
                                    </Tag>
                                </Center>
                            </WrapItem>
                        )
                    })
                }

            </Wrap>
        </Box>
    );
}

export default Technologies;

