import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: 0 7.5rem 8.75rem;

  display: flex;
  flex-direction: column;
  gap: 8.75rem;
`;

export const Feature = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
`;

export const FeatureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeatureHeading = styled.h2`
  color: rgb(202, 209, 233);
  font-size: 56px;
  font-weight: 500;
  line-height: 62px;
  letter-spacing: -1.5px;
`;

export const FeatureParagraph = styled.p`
  color: rgb(175, 179, 202);

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const FeaturePreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
