import styled from "styled-components";

import Link from "next/link";

export const NavbarContainer = styled.header`
  height: 5.375rem;

  display: flex;
  align-items: flex-end;
`;

export const NavbarContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`;
