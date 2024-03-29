"use client";

import Image from "next/image";

import { rubik } from "@/app/ui/fonts";
import { IconSecurityValidation } from "@/app/ui/icons/IconSecurityValidation";

import {
  BenefitContainer,
  BenefitHeading,
  BenefitHeadingWrapper,
  BenefitImage,
  BenefitParagraph,
  BenefitsSectionContainer,
  BenefitsWrapper,
} from "./benefits-section.styled";

import {
  SectionHeading,
  SectionHeadingWrapper,
  SectionParagraph,
} from "@/app/ui/shared/headings";

export const Benefits = () => {
  return (
    <BenefitsSectionContainer>
      <SectionHeadingWrapper>
        <SectionHeading className={rubik.className}>
          Why choose us
        </SectionHeading>
        <SectionParagraph>
          We are the only service that provides all 3 services as a packaged
          service
        </SectionParagraph>
      </SectionHeadingWrapper>

      <BenefitsWrapper>
        <BenefitContainer>
          <BenefitHeadingWrapper>
            <BenefitHeading>Personal information removal</BenefitHeading>
            <BenefitParagraph>
              We purge your personal data from online sources, using automated
              and manual methods. A privacy expert oversees removals and handles
              any manual activities.
            </BenefitParagraph>
          </BenefitHeadingWrapper>
          <BenefitImage>
            <Image
              src="/images/benefits-1.png"
              alt="benefits card"
              width={520}
              height={252}
            />
          </BenefitImage>
        </BenefitContainer>

        <BenefitContainer>
          <BenefitHeadingWrapper>
            <BenefitHeading>Cloaking alias profiles</BenefitHeading>
            <BenefitParagraph>
              You’ll receive regular reports on your privacy status and any
              outstanding threats. If new records become associated with you, we
              will send you an alert.
            </BenefitParagraph>
          </BenefitHeadingWrapper>
          <IconSecurityValidation />
          <BenefitImage>
            <Image
              src="/images/benefits-2.png"
              alt="benefits card"
              width={484}
              height={108}
            />
          </BenefitImage>
        </BenefitContainer>

        <BenefitContainer $variant="full">
          <BenefitHeadingWrapper>
            <BenefitHeading>Detailed Reporting</BenefitHeading>
            <BenefitParagraph>
              You’ll receive regular reports on your privacy status and any
              outstanding threats. If new records become associated with you, we
              will send you an alert.
            </BenefitParagraph>
          </BenefitHeadingWrapper>
          <BenefitImage>
            <Image
              src="/images/benefits-3.png"
              alt="benefits card"
              width={484}
              height={195}
            />
          </BenefitImage>
        </BenefitContainer>
      </BenefitsWrapper>
    </BenefitsSectionContainer>
  );
};
