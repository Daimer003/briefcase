import {
  Box,
  Avatar,
  WrapItem,
  Text,
  Button,
  Link,
  Tag,
} from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io";

interface Props {
  data: any;
}

const CardRecommendations = ({ data }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="auto"
      gap="10px"
    >
      <Box display="flex" alignItems="center" gap="10px">
        <WrapItem>
          <Avatar
            name="Dan Abrahmov"
            src={data.avatar}
            size="sm"
            background={data.color}
          />
        </WrapItem>
        <Box>
          <Box display="flex" gap="10px">
            <Text as="h5" fontSize="small">
              {data.name}
            </Text>
            <Tag size="sm" colorScheme={data.color}>
              {data.profile}
            </Tag>
          </Box>

          {data.link.length > 0 && (
            <Box>
              <Link
                href={`https://www.linkedin.com/in/${data.link}`}
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={data.color}
                  margin="0"
                  padding="0"
                  height="auto"
                  fontSize="small"
                  leftIcon={<IoLogoLinkedin />}
                >
                  {data.link}
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <Text as="p" fontSize="small">
          {data.comment}
        </Text>
      </Box>
    </Box>
  );
};

export default CardRecommendations;
