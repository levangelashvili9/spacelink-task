import { IconActiveTick, IconInactiveTick } from "@/app/ui/icons";
import { Button } from "@/app/ui/shared/button";

import {
  PricingCardComment,
  PricingCardContainer,
  PricingCardDuration,
  PricingCardFeature,
  PricingCardFeatureText,
  PricingCardFeaturesWrapper,
  PricingCardPrice,
  PricingCardTitle,
} from "./pricing-card.styled";

type Props = {
  card: {
    id: number;
    isRecommended: boolean;
    title: string;
    price: string;
    features: {
      id: number;
      isActive: boolean;
      title: string;
    }[];
    comment: string;
  };
};

export const PricingCard: React.FC<Props> = ({ card }) => {
  return (
    <PricingCardContainer key={card.id} $isRecommended={card.isRecommended}>
      <PricingCardTitle>{card.title}</PricingCardTitle>
      <PricingCardPrice>${card.price}</PricingCardPrice>
      <PricingCardDuration>Per month</PricingCardDuration>
      <PricingCardFeaturesWrapper>
        {card.features.map((feature) => (
          <PricingCardFeature key={feature.id}>
            {feature.isActive ? <IconActiveTick /> : <IconInactiveTick />}
            <PricingCardFeatureText>{feature.title}</PricingCardFeatureText>
          </PricingCardFeature>
        ))}
      </PricingCardFeaturesWrapper>
      <div style={{ marginBottom: "0.75rem" }}>
        <Button $width="312" $height="48">
          Request access
        </Button>
      </div>
      <PricingCardComment>{card.comment}</PricingCardComment>
    </PricingCardContainer>
  );
};
