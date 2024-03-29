import styled from "styled-components";

interface ButtonProps {
  $width: string;
  $height: string;
  $borderColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.$width + "px"};
  height: ${(props) => props.$height + "px"};

  color: rgb(202, 209, 233);
  border: 1px solid transparent;
  background: linear-gradient(#21223c, #0b0b26) padding-box,
    ${(props) => (props.$borderColor ? props.$borderColor : "transparent")};
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;

  cursor: pointer;
`;
