"use client";

import Image from "next/image";

import { footerSocials } from "@/lib/data";

import {
  FooterContainer,
  FooterItem,
  FooterItemLink,
  FooterItemLinksWrapper,
  FooterItemTitle,
  FooterItemsWrapper,
  FooterMainContent,
  FooterSocial,
  FooterSocialTitle,
  FooterSocialsWrapper,
  StyledImage,
} from "./footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterMainContent>
        <StyledImage
          src="/images/identity-hub-logo.png"
          alt="itentity hub logo"
          width={163}
          height={32}
          priority
        />

        <FooterItemsWrapper>
          <FooterItem>
            <FooterItemTitle>It’s free so why not</FooterItemTitle>
            <FooterItemLinksWrapper>
              <FooterItemLink>Pricing</FooterItemLink>
              <FooterItemLink>Features</FooterItemLink>
              <FooterItemLink>FAQ</FooterItemLink>
            </FooterItemLinksWrapper>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>Company</FooterItemTitle>
            <FooterItemLinksWrapper>
              <FooterItemLink>Our company</FooterItemLink>
              <FooterItemLink>Security</FooterItemLink>
              <FooterItemLink>Blog</FooterItemLink>
            </FooterItemLinksWrapper>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>Legal</FooterItemTitle>
            <FooterItemLinksWrapper>
              <FooterItemLink>Privacy policy</FooterItemLink>
              <FooterItemLink>Terms of service</FooterItemLink>
              <FooterItemLink>Prohibited use policy</FooterItemLink>
            </FooterItemLinksWrapper>
          </FooterItem>
        </FooterItemsWrapper>
      </FooterMainContent>

      <FooterSocialsWrapper>
        {footerSocials.map((social) => (
          <FooterSocial key={social.id}>
            <social.icon />
            <FooterSocialTitle>{social.title}</FooterSocialTitle>
          </FooterSocial>
        ))}
      </FooterSocialsWrapper>
    </FooterContainer>
  );
};
