import { Button, HStack, Box, Badge } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  res: any;
  currentPage: any;
  onPageChange: (n: number) => void;
}

const Paginator = ({ res, currentPage, onPageChange }: Props) => {

  return (
    <HStack
      width="100%"
      alignItems="center"
      display="flex"
      spacing={2}
      justify="center"
      bottom="0"
      borderRadius="8px"
      padding="5px"
      boxSizing="border-box"
      left="0"
      right="0"
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="row"
        maxWidth="1500px"
        position="relative"
      >
        <Box display="flex" alignItems="center" gap="5px">
          <Button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            leftIcon={<ChevronLeftIcon />}
            bg="#43D9AD"
            color="black"
            size="sm"
          >
            Atrás
          </Button>
          {[...Array(res?.totalPages || 0)].map((_, index) => (
            <Button
              key={res?.startPage + index}
              onClick={() => onPageChange(res?.startPage + index)}
              backgroundColor={
                currentPage === res?.startPage + index ? 'bg="#cfffaa"' : "gray"
              }
              color="white.900"
              size="sm"
            >
              {res?.startPage + index}
            </Button>
          ))}
          <Button
            onClick={() => onPageChange(res?.totalPages)}
            disabled={currentPage === res?.totalPages}
            bg="#43D9AD"
            color="black"
            rightIcon={<ChevronRightIcon />}
            size="sm"
          >
            Adelante
          </Button>
          <Badge
            fontSize="0.8em"
            colorScheme="green"
            padding="6px"
            borderRadius="6px"
          >
            <span>{res?.totalPages}</span>
          </Badge>
        </Box>
      </Box>
    </HStack>
  );
};

export default Paginator;
