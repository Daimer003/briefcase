import { Box, Grid, GridItem, Tooltip, Text, Skeleton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { IoGitCommit } from "react-icons/io5";
import { getDayOfYear } from "../../../utils/calendar";
import { useEffect, useState } from "react";
import { getProjectsAndCommits } from "../../../lib/commits";

const History = () => {
  const [commits, setCommits] = useState<any>([]);

  useEffect(() => {
    const specificDate = new Date(2024, 0, 25);
    const res = getDayOfYear(specificDate);
    console.log(res);
  }, []);

  // console.log(commitsHistory)

  useEffect(() => {
    try {
      (async () => {
        const response = await getProjectsAndCommits();
        setCommits(response);
      })();
    } catch (error) {
      console.log("No se logro obtener los commits", error);
    }
  }, []);

  return (
    <Box display="flex" flexDir="column" marginTop="10px" gap="10px">
      <Text
        display="flex"
        alignItems="center"
        gap="10px"
        as="h3"
        fontSize="x-large"
        fontWeight="bold"
      >
        Historia de commits
        <FaGithub />
      </Text>
      <Text
        display="flex"
        alignItems="start"
        gap="10px"
        as="span"
        fontSize="md"
        color="gray"
      >
        Funcionalidad en desarrollo.
      </Text>
      <Grid
        templateColumns="repeat(38, 1fr)"
        templateRows="repeat(10, 1fr)"
        minH="218px"
        gap={1}
        overflow="auto"
        border="1px"
        borderColor="#2C2C2C"
        padding="10px"
        borderRadius="8px"
      >
        {commits.length > 0 ? (
          commits.map((commit: any, index: any) => (
            <GridItem key={index} w="4" h="4" bg="#192f41" borderRadius="4px">
              <Tooltip label={commit.message + commit.id} cursor="pointer">
                <Box
                  display="flex"
                  width="100%"
                  height="100%"
                  content=""
                  position="relative"
                />
                {/* <div style={{ fontSize: "8px" }} className="commit-date">{index}</div> */}
                {/* <div className="commit-num-commits">{commit.numCommits}</div>
                        <div className="commit-author">{commit.author}</div> */}
              </Tooltip>
            </GridItem>
          ))
        ) : (
          <Skeleton />
        )}
      </Grid>
      <Box display="flex" flexDir="column" gap="20px" position="relative">
        <Box
          display="flex"
          content=""
          position="absolute"
          left="11px"
          width="3px"
          height="100%"
          bg="gray.900"
          zIndex="0"
        />
        <Box display="flex" flexDir="column" gap="20px" position="relative">
          <Box display="flex" alignItems="center" gap="10px">
            <Box
              width="auto"
              height="auto"
              background="#141e1e"
              padding="4px"
              borderRadius="50%"
            >
              <IoGitCommit size="18px" color="gray" />
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Text as="p" color="gray.700">
                Pushed to branch
              </Text>
              <Text as="p" color="gray.400">
                Main
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Box
              width="auto"
              height="auto"
              background="#141e1e"
              padding="4px"
              borderRadius="50%"
            >
              <IoGitCommit size="18px" color="gray" />
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Text as="p" color="gray.700">
                Pushed to branch
              </Text>
              <Text as="p" color="gray.400">
                Main
              </Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Box
              width="auto"
              height="auto"
              background="#141e1e"
              padding="4px"
              borderRadius="50%"
            >
              <IoGitCommit size="18px" color="gray" />
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Text as="p" color="gray.700">
                Pushed to branch
              </Text>
              <Text as="p" color="gray.400">
                Main
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default History;
