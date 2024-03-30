import { IconSecurity } from "@/components/icons";
import styled from "styled-components";

interface HeroHeadingProps {
  color?: string;
}

interface AbsoluteDivProps {
  $top: string;
  $left: string;
}

export const HeroContainer = styled.section`
  margin-top: 5.375rem;

  position: relative;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  background: #080921;
  border: 1px solid rgb(31, 32, 53);
  border-radius: 32px;

  @media (min-width: 768px) {
    padding: 3rem 6rem 7rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }

  @media (min-width: 1440px) {
    padding: 8rem 11.75rem 13.75rem;
  }
`;

export const EclipseContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  filter: blur(4px);
  z-index: 0;

  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const HeroMainWrapper = styled.div`
  z-index: 1;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const HeroHeading = styled.h1<HeroHeadingProps>`
  color: ${(props) => props.color || "#FEBA75"};
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -1.5px;

  text-align: center;

  @media (min-width: 1024px) {
    font-size: 52px;

    text-align: start;
  }

  @media (min-width: 1440px) {
    font-size: 72px;
    line-height: 82px;

    text-align: start;
  }
`;

export const HeroParagraph = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  text-align: center;

  margin-top: 1.75rem;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    text-align: start;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`;

export const SecurityWrapper = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`;

export const IconSecurityContainer = styled.div`
  width: 180px;
  height: 188px;

  @media (min-width: 768px) {
    width: 240px;
    height: 252px;
  }

  @media (min-width: 1024px) {
    width: 304px;
    height: 320px;
  }
`;

export const AbsoluteDiv = styled.div<AbsoluteDivProps>`
  display: none;

  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  @media (min-width: 1440px) {
    display: block;
  }
`;
