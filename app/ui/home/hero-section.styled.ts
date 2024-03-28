import styled from "styled-components";
import { rubik } from "../fonts";

interface HeroHeadingProps {
  color?: string;
}

interface LoginCardProps {
  top: string;
  left: string;
}

export const HeroContainer = styled.section`
  margin-top: 5.375rem;

  position: relative;
  padding: 8rem 11.75rem 13.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #080921;
  border: 1px solid rgb(31, 32, 53);
  border-radius: 32px;
`;

export const EclipseContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  filter: blur(4px);
  z-index: 0;
`;

export const HeroMainWrapper = styled.div`
  width: 50%;
  z-index: 1;
`;

export const HeroHeading = styled.h1<HeroHeadingProps>`
  color: ${(props) => props.color || "#FEBA75"};
  font-size: 72px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: -1.5px;

  margin-bottom: 1.75rem;
`;

export const HeroParagraph = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  margin-bottom: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SecurityWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const LoginCard = styled.div<LoginCardProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  width: 15.125rem;
  height: 4.625rem;

  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 1.25rem;

  border-radius: 20px;
  border: 1px solid transparent;
  backdrop-filter: blur(61.7px);
  background: linear-gradient(
        175.36deg,
        rgba(27, 28, 54, 0.16) 23.98%,
        rgba(112, 113, 122, 0.16) 65.73%
      )
      padding-box,
    linear-gradient(to right, rgba(44, 45, 71), rgba(68, 74, 226, 0.05))
      border-box;
`;

export const LoginCardImage = styled.div`
  width: 3.25rem;
  height: 3.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  box-shadow: 0px 0px 0px 1px rgb(45, 46, 72);
  background: rgba(255, 255, 255, 0.07);
`;

export const LoginCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LoginCardLabel = styled.h3`
  color: rgb(175, 179, 202);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const LoginCardInput = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
