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

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Image
          src="/images/identity-hub-logo.png"
          alt="itentity hub logo"
          width={163}
          height={32}
        />

        <NavLinks>
          {navlinks.map((link) => (
            <NavLink href={link.href} key={link.id}>
              {link.name}
            </NavLink>
          ))}
        </NavLinks>

        <Button>Start free trial</Button>
      </NavbarContent>
    </NavbarContainer>
  );
};
