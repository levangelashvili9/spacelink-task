"use client";

import Image from "next/image";
import {
  TestimonialCard,
  TestimonialsSectionContainer,
  TestimonialsSectionHeading,
  TestimonialsSectionHeadingWrapper,
  TestimonialsSectionParagraph,
  TestimonialHeader,
  TestimonialsWrapper,
  TestimonialImage,
  TestimonialName,
  TestimonialContent,
} from "./testimonials-section.styled";
import { testimonials } from "@/app/lib/config";

export const Testimonials = () => {
  return (
    <TestimonialsSectionContainer>
      <TestimonialsSectionHeadingWrapper>
        <TestimonialsSectionHeading>
          The word on IdentityHub
        </TestimonialsSectionHeading>
        <TestimonialsSectionParagraph>
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </TestimonialsSectionParagraph>
      </TestimonialsSectionHeadingWrapper>

      <TestimonialsWrapper>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
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
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>
    </TestimonialsSectionContainer>
  );
};
