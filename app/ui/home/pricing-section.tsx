"use client";

import { pricing } from "@/app/lib/config";
import { IconActiveTick, IconInactiveTick } from "@/app/ui/icons";
import { rubik } from "@/app/ui/fonts";

import {
  PricingCard,
  PricingCardComment,
  PricingCardDuration,
  PricingCardFeature,
  PricingCardFeatureText,
  PricingCardFeaturesWrapper,
  PricingCardPrice,
  PricingCardTitle,
  PricingCardsWrapper,
  PricingSectionContainer,
} from "./pricing-section.styled";

import {
  SectionHeading,
  SectionHeadingWrapper,
  SectionParagraph,
} from "@/app/ui/shared/headings";

import { Button } from "@/app/ui/shared/button";

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
          <PricingCard key={card.id} $isRecommended={card.isRecommended}>
            <PricingCardTitle>{card.title}</PricingCardTitle>
            <PricingCardPrice>${card.price}</PricingCardPrice>
            <PricingCardDuration>Per month</PricingCardDuration>
            <PricingCardFeaturesWrapper>
              {card.features.map((feature) => (
                <PricingCardFeature key={feature.id}>
                  {feature.isActive ? <IconActiveTick /> : <IconInactiveTick />}
                  <PricingCardFeatureText>
                    {feature.title}
                  </PricingCardFeatureText>
                </PricingCardFeature>
              ))}
            </PricingCardFeaturesWrapper>
            <div style={{ marginBottom: "0.75rem" }}>
              <Button $width="312" $height="48">
                Request access
              </Button>
            </div>
            <PricingCardComment>{card.comment}</PricingCardComment>
          </PricingCard>
        ))}
      </PricingCardsWrapper>
    </PricingSectionContainer>
  );
};
