import Image from "next/image";
import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: 3rem 2rem 5rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 768px) {
    padding: 3rem 6rem 7rem;
  }

  @media (min-width: 1440px) {
    padding: 0 7.5rem 8.75rem;
    gap: 8.75rem;
  }
`;

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;

  @media (min-width: 1440px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
  }
`;

export const FeatureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeatureHeading = styled.h2`
  color: rgb(202, 209, 233);
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.5px;

  text-align: center;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1440px) {
    text-align: start;

    font-size: 56px;
    line-height: 62px;
  }
`;

export const FeatureParagraph = styled.p`
  color: rgb(175, 179, 202);

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  text-align: center;

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

export const FeaturePreview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  place-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PrivateInfoImageContainer = styled.div`
  position: relative;

  grid-column: span 2;

  width: 245px;
  height: 180px;

  @media (min-width: 768px) {
    width: 408px;
    height: 300px;
  }

  @media (min-width: 1440px) {
    width: 598px;
    height: 439px;
  }
`;

export const SupportImageContainer = styled.div`
  position: relative;

  grid-column: span 2;

  width: 245px;
  height: 137px;

  @media (min-width: 768px) {
    width: 408px;
    height: 228px;
  }

  @media (min-width: 1440px) {
    width: 524px;
    height: 293px;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;
