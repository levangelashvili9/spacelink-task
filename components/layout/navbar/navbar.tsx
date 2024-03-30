"use client";

import { useRouter } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";

import { navlinks } from "@/lib/data";
import { roboto } from "@/components/fonts";

import {
  NavbarContainer,
  NavbarContent,
  NavLink,
  NavLinks,
  StyledImage,
} from "./navbar.styled";

import { Button } from "@/components/ui/button";
import { IconBurgerMenu } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const onNavigateToHome = () => {
    router.push("/");
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <StyledImage
          onClick={onNavigateToHome}
          src="/images/identity-hub-logo.png"
          alt="itentity hub logo"
          width={163}
          height={32}
          priority
        />

        {width <= 1024 ? (
          <IconBurgerMenu />
        ) : (
          <>
            <NavLinks>
              {navlinks.map((link) => (
                <NavLink
                  className={roboto.className}
                  href={link.href}
                  key={link.id}
                >
                  {link.name}
                </NavLink>
              ))}
            </NavLinks>

            <Button
              $width="166"
              $height="48"
              $borderColor="linear-gradient(to right, #191934, #4b4b66) border-box"
            >
              Start free trial
            </Button>
          </>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
};
