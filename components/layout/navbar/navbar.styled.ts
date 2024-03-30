import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 5.375rem;
  padding: 0 2rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;

  background: #050520;
  border: 1px solid rgb(31, 32, 53);
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 0 3rem 0.25rem;
  }

  @media (min-width: 1024px) {
    padding: 0 0 0.25rem;
    align-items: flex-end;
  }
`;

export const NavbarContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2.262rem;

  align-items: center;
`;

export const NavLink = styled(Link)`
  color: rgb(202, 209, 233);

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  text-decoration: none;

  &:hover {
    color: rgba(202, 209, 233, 0.7);
  }
`;
