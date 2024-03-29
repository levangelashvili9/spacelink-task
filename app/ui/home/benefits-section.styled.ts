import styled from "styled-components";

interface BenefitContainerProps {
  $variant?: "full" | "half";
}

export const BenefitsSectionContainer = styled.section`
  padding: 0 7.5rem 12.125rem;
`;

export const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 2.25rem;
`;

export const BenefitContainer = styled.div<BenefitContainerProps>`
  padding: 2.5rem;

  display: flex;
  flex-direction: ${(props) => (props.$variant === "full" ? "row" : "column")};
  align-items: ${(props) => (props.$variant === "full" ? "center" : "start")};
  gap: ${(props) => (props.$variant === "full" ? "18rem" : "1.75rem")};
  grid-column: span ${(props) => (props.$variant === "full" ? "2" : "1")};

  border-radius: 20px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 5.442%,
    rgba(112, 113, 122, 0.16) 72.374%
  );
`;

export const BenefitHeadingWrapper = styled.div``;

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

export const BenefitImage = styled.div``;
