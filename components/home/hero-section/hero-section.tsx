"use client";

import Image from "next/image";

import { rubik } from "@/components/fonts";
import { IconMail, IconPerson, IconSecurity } from "@/components/icons";

import {
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  HeroMainWrapper,
  ButtonsWrapper,
  SecurityWrapper,
  EclipseContainer,
  AbsoluteDiv,
  IconSecurityContainer,
} from "./hero-section.styled";

import {
  AccountCard,
  AccountCardImage,
  AccountCardInput,
  AccountCardLabel,
  AccountCardTextWrapper,
} from "@/components/ui/account-card";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <HeroContainer>
      <EclipseContainer>
        <Image
          src="/images/eclipse.png"
          alt="eclipse for background"
          width={930}
          height={930}
        />
      </EclipseContainer>

      <HeroMainWrapper>
        <HeroHeading className={rubik.className}>Protect your</HeroHeading>
        <HeroHeading className={rubik.className} color="#CAD1E9">
          privacy online
        </HeroHeading>
        <HeroParagraph>
          IdentityHub offers a suite of services to help you take back control
          of your online identity. Keep your data secure, manage your digital
          footprint, and protect yourself from identity theft.
        </HeroParagraph>

        <ButtonsWrapper>
          <Button
            $width="175"
            $height="48"
            $borderColor="linear-gradient(to right, #FFAB8F, #FF8EC1, #B67EFD) border-box"
          >
            Start free trial
          </Button>
          <Button $width="175" $height="48">
            How it work
          </Button>
        </ButtonsWrapper>
      </HeroMainWrapper>

      <SecurityWrapper>
        <IconSecurityContainer>
          <IconSecurity />
        </IconSecurityContainer>

        <AbsoluteDiv $top="42%" $left="-60%">
          <AccountCard>
            <AccountCardImage>
              <IconMail />
            </AccountCardImage>
            <AccountCardTextWrapper>
              <AccountCardLabel>Email address</AccountCardLabel>
              <AccountCardInput>nija@gmail.com</AccountCardInput>
            </AccountCardTextWrapper>
          </AccountCard>
        </AbsoluteDiv>

        <AbsoluteDiv $top="80%" $left="-28%">
          <AccountCard>
            <AccountCardImage>
              <IconPerson />
            </AccountCardImage>
            <AccountCardTextWrapper>
              <AccountCardLabel>User name</AccountCardLabel>
              <AccountCardInput>tufayel nija</AccountCardInput>
            </AccountCardTextWrapper>
          </AccountCard>
        </AbsoluteDiv>
      </SecurityWrapper>
    </HeroContainer>
  );
};
