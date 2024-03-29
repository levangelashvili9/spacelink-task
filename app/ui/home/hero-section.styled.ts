import styled from "styled-components";
import { rubik } from "../fonts";

interface HeroHeadingProps {
  color?: string;
}

interface AbsoluteDivProps {
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

export const AbsoluteDiv = styled.div<AbsoluteDivProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
