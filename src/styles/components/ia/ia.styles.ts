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
  max-height: 300px;
  height: auto;
  border: 1px solid ${({ border }) => border};
  padding: 10px;
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
  overflow: auto;
  position: relative;
`;

export const SearchBox = styled(Box) <{ openSearch: string }>`
  display:${({ openSearch }) => openSearch == "true" ? "flex" : "none"};
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  background-color: rgba(0,0,0, .9);
  left: 0;
  top: 0;
  form{
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 10px;
    box-sizing: border-box;
    input{
      background: #000000;
    }
  }
`;

export const ContentChat = styled(Box)`
  width: 100%;
  height: auto;
`;
