import styled from "styled-components";

import Link from "next/link";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 5.375rem;
  padding-bottom: 0.25rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: flex-end;

  background: #050520;
  border: 1px solid rgb(31, 32, 53);
  border-radius: 20px;
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
