import styled from "styled-components";

export const TestimonialsSectionContainer = styled.section`
  padding: 0 7.5rem 10.5rem;
`;

export const TestimonialsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: start;
  grid-gap: 10px;
`;

export const TestimonialCard = styled.div`
  padding: 1.375rem 0.75rem;

  border-radius: 20px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 3.818%,
    rgba(112, 113, 122, 0.16) 72.956%
  );
`;

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 1.25rem;
`;

export const TestimonialImage = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: white;
  overflow: hidden;
`;

export const TestimonialName = styled.h3`
  color: rgb(202, 209, 233);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
`;

export const TestimonialContent = styled.p`
  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
`;
