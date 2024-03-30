import Image from "next/image";
import styled from "styled-components";

interface BenefitContainerProps {
  $variant?: "full" | "half";
}

export const BenefitsSectionContainer = styled.section`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 4rem 6rem 7rem;
  }

  @media (min-width: 1440px) {
    padding: 0 7.5rem 12.125rem;
  }
`;

export const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2.25rem;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const BenefitContainer = styled.div<BenefitContainerProps>`
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  grid-column: span 1;

  border-radius: 20px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 5.442%,
    rgba(112, 113, 122, 0.16) 72.374%
  );

  @media (min-width: 460px) {
    padding: 2.5rem;
  }

  @media (min-width: 1440px) {
    flex-direction: ${(props) =>
      props.$variant === "full" ? "row" : "column"};
    align-items: ${(props) => (props.$variant === "full" ? "center" : "start")};
    gap: ${(props) => (props.$variant === "full" ? "18rem" : "1.75rem")};
    grid-column: span ${(props) => (props.$variant === "full" ? "2" : "1")};
    align-items: start;
  }
`;

export const BenefitHeadingWrapper = styled.div`
  text-align: center;

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

export const BenefitHeading = styled.h3`
  color: rgb(202, 209, 233);
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -1px;

  margin-bottom: 1rem;
`;

export const BenefitParagraph = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const BenefitImageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;

export const BenefitImage = styled.div`
  width: 280px;

  @media (min-width: 460px) {
    width: 310px;
  }

  @media (min-width: 768px) {
    width: 420px;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;
