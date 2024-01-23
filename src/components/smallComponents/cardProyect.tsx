import {
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Tag,
    TagLabel,
    TagLeftIcon,
    HStack,
    Box
} from '@chakra-ui/react'
import Image from 'next/image';

interface Props {
    title: string,
    imagen: string,
    paragraph: string,
    technologies: any
}

const CardProyect = (
    {
        title,
        imagen,
        paragraph,
        technologies
    }: Props) => {
    return (
        <Card
            maxW='sm'
            background="transparent"
            border="none"
            boxShadow="none"
        >
            <CardBody
                padding="0"
                margin="0"
            >
                <Box
                    display="flex"
                    width="100%"
                    maxHeight="190px"
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
                    <Text
                        fontSize="small"
                        minHeight="100px"
                        maxHeight="110xpx"
                    >
                        {paragraph}
                    </Text>
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
    );
}

export default CardProyect;