import styled from "styled-components";

export const TestimonialsSectionContainer = styled.section`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 0 7.5rem 10.5rem;
  }
`;

export const TestimonialsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
