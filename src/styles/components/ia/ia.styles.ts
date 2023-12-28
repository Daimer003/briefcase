import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"


export const IaBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 40px;
  gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
`;

export const ChatBox = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 150px;
  height: auto;
  border: 1px solid ${({ border }) => border};
  padding: 10px;
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
`;

