import styled from "styled-components";

export const AccountCard = styled.div`
  width: 15.125rem;
  height: 4.625rem;

  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 1.25rem;

  border-radius: 20px;
  backdrop-filter: blur(61.7px);
  border: 1px solid rgb(44, 45, 71);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 23.98%,
    rgba(112, 113, 122, 0.16) 65.73%
  );
`;

export const AccountCardImage = styled.div`
  width: 3.25rem;
  height: 3.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  box-shadow: 0px 0px 0px 1px rgb(45, 46, 72);
  background: rgba(255, 255, 255, 0.07);
`;

export const AccountCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const AccountCardLabel = styled.h3`
  color: rgb(175, 179, 202);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const AccountCardInput = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
