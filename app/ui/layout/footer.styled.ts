import styled from "styled-components";

export const FooterContainer = styled.footer``;

export const FooterMainContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3.25rem 12.5rem 11.75rem;
  border-radius: 50px 50px 0px 0px;
  border: 1px solid #2a2b45;
`;

export const FooterItemsWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

export const FooterItem = styled.div``;

export const FooterItemTitle = styled.h4`
  color: rgb(202, 209, 233);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.21px;

  margin-bottom: 1.5rem;
`;

export const FooterItemLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterItemLink = styled.h4`
  color: rgba(202, 209, 233, 0.7);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.21px;

  cursor: pointer;
`;

export const FooterSocialsWrapper = styled.div`
  padding: 2.625rem 0;

  display: flex;
  justify-content: center;
  gap: 5.5rem;
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const FooterSocialTitle = styled.div`
  color: rgb(202, 209, 233);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.21px;
`;
