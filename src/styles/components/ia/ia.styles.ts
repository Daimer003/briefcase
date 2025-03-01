import styled from "@emotion/styled"
import { keyframes } from "@emotion/react";
import { Box } from "@chakra-ui/react"


//Background
const color1 = '#011627';
const color2 = '#4D5BCE';

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
  margin-top: 40px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #2c3d4d;
  gap: 10px;
  position: relative;
 // background: linear-gradient(331deg, rgba(109,255,220,1) 0%, rgba(26,66,65,1) 42%, rgba(14,21,21,1) 66%);

  & span strong{
    text-transform: capitalize;
  }
`;


export const BoxText = styled(Box)`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at top right, ${color1}, ${color2});
  background-size: 400% 400%;
  animation: ${gradientAnimation} 3s ease infinite;
  z-index: 0;
`;

export const ChatBox = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 150px;
  max-height: 300px;
  height: auto;
  border: 1px solid ${({ border }) => border};
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
  background-color: #2c3d4d;
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
      background: #2c3d4d;
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
