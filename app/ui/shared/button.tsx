import React, { ReactNode } from "react";

import { Button as StyledButton } from "./button.styled";

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledButton width="166px" height="48px">
      {children}
    </StyledButton>
  );
};
