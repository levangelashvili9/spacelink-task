"use client";

import Image from "next/image";
import { rubik } from "../../fonts";

import {
  Feature,
  FeatureHeading,
  FeatureParagraph,
  FeaturePreview,
  FeatureTextWrapper,
  FeaturesContainer,
} from "./features-section.styled";

import {
  AccountCard,
  AccountCardImage,
  AccountCardInput,
  AccountCardLabel,
  AccountCardTextWrapper,
} from "@/components/ui/account-card";

import { accountInfo } from "@/lib/config";

export const Features = () => {
  return (
    <FeaturesContainer>
      <Feature>
        <FeatureTextWrapper>
          <FeatureHeading className={rubik.className}>
            We remove your private information from the online
          </FeatureHeading>
          <FeatureParagraph>
            People-search sites use government records and online databases to
            create detailed profiles of virtually every citizen. 
          </FeatureParagraph>
          <FeatureParagraph>
            They then sell this sensitive information online, where it can end
            up in the hands of hackers, identity thieves, and stalkers.
          </FeatureParagraph>
          <FeatureParagraph>
            ReputationDefender stops people-search sites by opting our clients
            out of them.
          </FeatureParagraph>
        </FeatureTextWrapper>
        <FeaturePreview>
          <Image
            src="/images/features-1.png"
            alt="cards"
            width={598}
            height={439}
          />
        </FeaturePreview>
      </Feature>

      <Feature>
        <FeaturePreview>
          {accountInfo.map((info) => (
            <AccountCard key={info.id}>
              <AccountCardImage>
                <info.icon />
              </AccountCardImage>
              <AccountCardTextWrapper>
                <AccountCardLabel>{info.label}</AccountCardLabel>
                <AccountCardInput>{info.input}</AccountCardInput>
              </AccountCardTextWrapper>
            </AccountCard>
          ))}
        </FeaturePreview>
        <FeatureTextWrapper>
          <FeatureHeading className={rubik.className}>
            Cloaking identities stand in for your personal data
          </FeatureHeading>
          <FeatureParagraph>
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </FeatureParagraph>
        </FeatureTextWrapper>
      </Feature>

      <Feature>
        <FeatureTextWrapper>
          <FeatureHeading className={rubik.className}>
            Dedicated Support
          </FeatureHeading>
          <FeatureParagraph>
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </FeatureParagraph>
        </FeatureTextWrapper>
        <FeaturePreview>
          <Image
            src="/images/features-2.png"
            alt="cards"
            width={524}
            height={293}
          />
        </FeaturePreview>
      </Feature>
    </FeaturesContainer>
  );
};
