import styled from "@emotion/styled"
import { Box, keyframes } from "@chakra-ui/react"

const color1 = '#2F855A';
const color2 = '#000000';

const gradientAnimation = keyframes`
   0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const IaBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 80px;
  gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  position: relative;
  & span strong{
    text-transform: capitalize;
  }
`;


export const BoxText = styled(Box)`
  padding: 10px;
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at top right, ${color1}, ${color2});
  background-size: 400% 400%;
  animation: ${gradientAnimation} 3s ease infinite;
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
  scroll-behavior: smooth;
`;

export const SearchBox = styled(Box) <{ opensearch: string }>`
  display:${({ opensearch }) => opensearch == "true" ? "flex" : "none"};
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  background-color: rgba(0,0,0, .9);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
  a{
    color: var(--color-text-a);
  }
`;
