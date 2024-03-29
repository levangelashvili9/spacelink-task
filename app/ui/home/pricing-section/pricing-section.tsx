"use client";

import { pricing } from "@/app/lib/config";
import { rubik } from "@/app/ui/fonts";

import {
  PricingCardsWrapper,
  PricingSectionContainer,
} from "./pricing-section.styled";

import {
  SectionHeading,
  SectionHeadingWrapper,
  SectionParagraph,
} from "@/app/ui/shared/headings";

import { PricingCard } from "../pricing-card";

export const Pricing = () => {
  return (
    <PricingSectionContainer>
      <SectionHeadingWrapper>
        <SectionHeading className={rubik.className}>Pricing</SectionHeading>
        <SectionParagraph>
          You can stay on the $56 plan until you have enough active user to
          justify managing their data or you start settings things.
        </SectionParagraph>
      </SectionHeadingWrapper>

      <PricingCardsWrapper>
        {pricing.map((card) => (
          <PricingCard key={card.id} card={card} />
        ))}
      </PricingCardsWrapper>
    </PricingSectionContainer>
  );
};
