"use client";

import Image from "next/image";

import {
  BenefitContainer,
  BenefitHeading,
  BenefitHeadingWrapper,
  BenefitImage,
  BenefitParagraph,
  BenefitsSectionContainer,
  BenefitsSectionHeading,
  BenefitsSectionHeadingWrapper,
  BenefitsSectionParagraph,
  BenefitsWrapper,
} from "./benefits-section.styled";
import { IconSecurityValidation } from "../icons/IconSecurityValidation";

export const Benefits = () => {
  return (
    <BenefitsSectionContainer>
      <BenefitsSectionHeadingWrapper>
        <BenefitsSectionHeading>Why choose us</BenefitsSectionHeading>
        <BenefitsSectionParagraph>
          We are the only service that provides all 3 services as a packaged
          service
        </BenefitsSectionParagraph>
      </BenefitsSectionHeadingWrapper>

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
