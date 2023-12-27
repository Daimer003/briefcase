import styled from "@emotion/styled"
import { Text } from "@chakra-ui/react"


export const LogoBox = styled(Text) <{ color: string }>`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 40px;
  padding: 10px;
  gap: 5px;
  color: ${({ color }) => color};
  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;


