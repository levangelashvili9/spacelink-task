import styled from "styled-components";

interface PricingCardProps {
  $isRecommended: boolean;
}

export const PricingCardContainer = styled.div<PricingCardProps>`
  padding: 3.25rem 3.25rem 5rem;
  width: 22rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 32px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 1.294%,
    rgba(112, 113, 122, 0.16) 73.861%
  );

  border: 2px solid transparent;

  @media (min-width: 1232px) {
    padding: ${(props) =>
      props.$isRecommended ? "5rem 3.25rem 6.75rem" : "3.25rem 3.25rem 5rem"};

    border: 2px solid
      ${(props) => (props.$isRecommended ? "#F088D2" : "transparent")};
  }
`;

export const PricingCardTitle = styled.h3`
  color: rgb(202, 209, 233);
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.21px;

  margin-bottom: 1.25rem;
`;

export const PricingCardPrice = styled.h2`
  color: rgb(202, 209, 233);
  font-size: 56px;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.21px;

  margin-bottom: 0.5rem;
`;

export const PricingCardDuration = styled.h4`
  color: rgb(202, 209, 233);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.21px;

  margin-bottom: 2rem;
`;

export const PricingCardFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-bottom: 2.25rem;
`;

export const PricingCardFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PricingCardFeatureText = styled.h4`
  color: rgb(202, 209, 233);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.21px;
`;

export const PricingCardComment = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.21px;
`;
