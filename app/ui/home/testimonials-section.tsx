"use client";

import Image from "next/image";
import {
  TestimonialCard,
  TestimonialsSectionContainer,
  TestimonialHeader,
  TestimonialsWrapper,
  TestimonialImage,
  TestimonialName,
  TestimonialContent,
} from "./testimonials-section.styled";
import { testimonials } from "@/app/lib/config";
import {
  SectionHeading,
  SectionHeadingWrapper,
  SectionParagraph,
} from "../shared/headings";
import { rubik } from "../fonts";

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
