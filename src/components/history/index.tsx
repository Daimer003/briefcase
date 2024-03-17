import { Box, Grid, GridItem, Tooltip, Text } from "@chakra-ui/react";
import { FaGitlab } from "react-icons/fa6";
import { IoGitCommit } from "react-icons/io5";


const History = () => {
    const commitsHistory = [];
    // const month = new Date().getDay();
    const month = new Date().getMonth();
    const day = new Date().getDate()

    console.log(day)
    console.log(month + 1)

    for (let i = 0; i < 366; i++) {
        const date = new Date(2024, 0, i + 1);

        const numCommits = Math.floor(Math.random() * 10);
        const author = "Daymer";

        commitsHistory.push({
            id: i,
            date,
            numCommits,
            author,
        });
    }

    console.log(commitsHistory)

    return (
        <Box
            display='flex'
            flexDir='column'
            marginTop="10px"
            gap='10px'
        >
            <Text
                display='flex'
                alignItems='center'
                gap='10px'
                as="h3"
                fontSize="x-large"
                fontWeight="bold"
            >
                Historia de commits
                <FaGitlab />
            </Text>
            <Grid
                templateColumns='repeat(38, 1fr)'
                templateRows='repeat(10, 1fr)'
                gap={1}
                overflow='auto'
                border="1px"
                borderColor="#cfffaa"
                padding='10px'
                borderRadius='8px'
            >
                {
                    commitsHistory.map((commit: any, index) => (
                        <GridItem
                            key={index}
                            w='4'
                            h='4'
                            bg='#141e1e'
                            borderRadius='4px'
                        >
                            <Tooltip
                                label={commit.author + commit.id}
                                cursor='pointer'
                            >
                                <Box
                                    display='flex'
                                    width='100%'
                                    height='100%'
                                    content=''
                                    position='relative'
                                />
                                {/* <div style={{ fontSize: "8px" }} className="commit-date">{index}</div> */}
                                {/* <div className="commit-num-commits">{commit.numCommits}</div>
                        <div className="commit-author">{commit.author}</div> */}
                            </Tooltip>
                        </GridItem>
                    ))
                }
            </Grid>
            <Box
                display='flex'
                flexDir='column'
                gap='20px'
                position='relative'
            >
                <Box
                    display='flex'
                    content=''
                    position='absolute'
                    left='11px'
                    width='3px'
                    height='100%'
                    bg='gray.900'
                    zIndex='0'
                />
                <Box
                    display='flex'
                    flexDir='column'
                    gap='20px'
                    position='relative'
                >
                    <Box
                        display='flex'
                        alignItems='center'
                        gap='10px'
                    >
                        <Box
                            width='auto'
                            height='auto'
                            background='#141e1e'
                            padding='4px'
                            borderRadius='50%'
                        >
                            <IoGitCommit size='18px' color="gray" />
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            gap='10px'
                        >
                            <Text as='p' color='gray.700'>Pushed to branch</Text>
                            <Text as='p' color='gray.400'>Main</Text>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        alignItems='center'
                        gap='10px'
                    >
                        <Box
                            width='auto'
                            height='auto'
                            background='#141e1e'
                            padding='4px'
                            borderRadius='50%'
                        >
                            <IoGitCommit size='18px' color="gray" />
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            gap='10px'
                        >
                            <Text as='p' color='gray.700'>Pushed to branch</Text>
                            <Text as='p' color='gray.400'>Main</Text>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        alignItems='center'
                        gap='10px'
                    >
                        <Box
                            width='auto'
                            height='auto'
                            background='#141e1e'
                            padding='4px'
                            borderRadius='50%'
                        >
                            <IoGitCommit size='18px' color="gray" />
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            gap='10px'
                        >
                            <Text as='p' color='gray.700'>Pushed to branch</Text>
                            <Text as='p' color='gray.400'>Main</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default History;