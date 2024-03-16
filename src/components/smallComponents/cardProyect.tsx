import { BoxCard } from '@/styles/components/smallComponents/cardProyects.styles';
import {
    Card,
    CardBody,
    Stack,
    Heading,
    // Text,
    Tag,
    TagLabel,
    TagLeftIcon,
    HStack,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image';



interface Props {
    title: string,
    imagen: string,
    paragraph: any,
    technologies: any,
    details?: () => void
}

const CardProyect = (
    {
        title,
        imagen,
        paragraph,
        technologies,
        details
    }: Props) => {
    return (
        <BoxCard
            borderRadius='10px'
            boxShadow="none"
            maxW='sm'
            border='1px solid #2C2C2C'
        >

            <Card
                bg={useColorModeValue('#E2E8F0', '#22222252')}
                css={{ backdropFilter: 'blur(20px)' }}
                p='10px'
            >
                <CardBody
                    padding="0"
                    margin="0"
                >
                    <Box
                        display="flex"
                        width="100%"
                        maxHeight="180px"
                        overflow="hidden"
                    >
                        <Image
                            src={imagen}
                            alt='Green double couch with wooden legs'
                            width={400}
                            height={100}
                            style={{
                                borderRadius: "6px",
                                objectFit: "cover"
                            }}
                        />
                    </Box>
                    <Stack mt='2' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Heading
                            as='p'
                            size='xs'
                            fontWeight="400"
                            fontFamily="PLUS Rounded 1c"
                            minHeight="100px"
                            maxHeight="165px"
                            onClick={details}
                            noOfLines={6}
                            cursor='pointer'
                        >
                            {paragraph[0].paragraph}
                        </Heading>
                        <Box display="flex">
                            <HStack spacing={4}>
                                {
                                    technologies?.map((tag: any) => {
                                        return (
                                            <Tag
                                                key={tag.id}
                                                borderRadius='4px'
                                                border='1px'
                                                borderColor={tag.color}
                                                size="sm"
                                                variant='subtle'
                                                colorScheme={tag.color}
                                            >
                                                <TagLeftIcon boxSize='12px' as={tag.icon} />
                                                <TagLabel>{tag.name}</TagLabel>
                                            </Tag>
                                        )
                                    })
                                }
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
            </Card >
        </BoxCard>
    );
}

export default CardProyect;