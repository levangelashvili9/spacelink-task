"use client";

import Image from "next/image";

import { ITestimonial } from "@/lib/definitions";

import {
  TestimonialCardContainer,
  TestimonialContent,
  TestimonialHeader,
  TestimonialImage,
  TestimonialName,
} from "./testimonial-card.styled";

type Props = {
  testimonial: ITestimonial;
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
