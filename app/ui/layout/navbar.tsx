"use client";

import Image from "next/image";

import {
  NavbarContainer,
  NavbarContent,
  NavLink,
  NavLinks,
} from "./navbar.styled";
import { navlinks } from "@/app/lib/config";
import { Button } from "@/app/ui/shared/button";
import { roboto } from "@/app/ui/fonts";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Image
          src="/images/identity-hub-logo.png"
          alt="itentity hub logo"
          width={163}
          height={32}
          priority
        />

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
          width="166"
          height="48"
          $borderColor="linear-gradient(to right, #191934, #4b4b66) border-box"
        >
          Start free trial
        </Button>
      </NavbarContent>
    </NavbarContainer>
  );
};
