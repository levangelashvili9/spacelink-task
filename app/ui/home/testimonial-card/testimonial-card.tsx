"use client";

import Image from "next/image";

import {
  TestimonialCardContainer,
  TestimonialContent,
  TestimonialHeader,
  TestimonialImage,
  TestimonialName,
} from "./testimonial-card.styled";

type Props = {
  testimonial: {
    id: number;
    src: string;
    name: string;
    text: string;
  };
};

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <TestimonialCardContainer>
      <TestimonialHeader>
        <TestimonialImage>
          <Image
            src={testimonial.src}
            alt={`photo of ${testimonial.name}`}
            width={36}
            height={36}
          />
        </TestimonialImage>
        <TestimonialName>{testimonial.name}</TestimonialName>
      </TestimonialHeader>
      <TestimonialContent>{testimonial.text}</TestimonialContent>
    </TestimonialCardContainer>
  );
};
