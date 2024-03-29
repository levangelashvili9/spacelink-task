"use client";

import { testimonials } from "@/lib/config";
import { rubik } from "@/components/fonts";

import {
  TestimonialsSectionContainer,
  TestimonialsWrapper,
} from "./testimonials-section.styled";

import {
  SectionHeading,
  SectionHeadingWrapper,
  SectionParagraph,
} from "@/components/ui/headings";

import { TestimonialCard } from "@/components/home/testimonial-card";

export const Testimonials = () => {
  return (
    <TestimonialsSectionContainer>
      <SectionHeadingWrapper>
        <SectionHeading className={rubik.className}>
          The word on IdentityHub
        </SectionHeading>
        <SectionParagraph>
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </SectionParagraph>
      </SectionHeadingWrapper>

      <TestimonialsWrapper>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </TestimonialsWrapper>
    </TestimonialsSectionContainer>
  );
};
