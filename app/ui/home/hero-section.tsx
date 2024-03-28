"use client";

import Image from "next/image";

import {
  HeroContainer,
  HeroHeading,
  HeroParagraph,
  HeroMainWrapper,
  ButtonsWrapper,
  SecurityWrapper,
  LoginCard,
  LoginCardImage,
  LoginCardLabel,
  LoginCardInput,
  LoginCardTextWrapper,
  EclipseContainer,
} from "./hero-section.styled";
import { Button } from "@/app/ui/shared/button";

import { rubik } from "@/app/ui/fonts";
import { IconMail, IconPerson, IconSecurity } from "../icons";

export const HeroSection = () => {
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
            width="175"
            height="48"
            $borderColor="linear-gradient(to right, #FFAB8F, #FF8EC1, #B67EFD) border-box"
          >
            Start free trial
          </Button>
          <Button width="175" height="48">
            How it work
          </Button>
        </ButtonsWrapper>
      </HeroMainWrapper>

      <SecurityWrapper>
        <IconSecurity />

        <LoginCard top="42%" left="-60%">
          <LoginCardImage>
            <IconMail />
          </LoginCardImage>
          <LoginCardTextWrapper>
            <LoginCardLabel>Email address</LoginCardLabel>
            <LoginCardInput>nija@gmail.com</LoginCardInput>
          </LoginCardTextWrapper>
        </LoginCard>

        <LoginCard top="80%" left="-28%">
          <LoginCardImage>
            <IconPerson />
          </LoginCardImage>
          <LoginCardTextWrapper>
            <LoginCardLabel>User name</LoginCardLabel>
            <LoginCardInput>tufayel nija</LoginCardInput>
          </LoginCardTextWrapper>
        </LoginCard>
      </SecurityWrapper>
    </HeroContainer>
  );
};
