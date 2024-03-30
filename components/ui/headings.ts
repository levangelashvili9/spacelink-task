import styled from "styled-components";

export const SectionHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5rem;
`;

export const SectionHeading = styled.h2`
  color: rgb(202, 209, 233);
  font-size: 32px;
  font-weight: 500;

  margin-bottom: 1.25rem;

  text-align: center;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 62px;
    letter-spacing: -1px;
  }
`;

export const SectionParagraph = styled.p`
  max-width: 100%;
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  text-align: center;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
