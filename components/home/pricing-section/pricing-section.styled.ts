import styled from "styled-components";

export const PricingSectionContainer = styled.section`
  padding: 2rem 2rem 8rem;

  @media (min-width: 768px) {
    padding: 4rem 4rem 8rem;
  }

  @media (min-width: 1440px) {
    padding: 0 10.5rem 12rem;
  }
`;

export const PricingSwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PricingSwitch = styled.div`
  padding: 0.25rem;
  width: 22.375rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 16px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 38.943%,
    rgba(112, 113, 122, 0.16) 60.368%
  );

  cursor: pointer;
  margin-bottom: 3.75rem;
`;

export const PricingSwitchActive = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  backdrop-filter: blur(11.7px);
  background: linear-gradient(
    175.36deg,
    rgba(27, 28, 54, 0.16) 27.532%,
    rgba(112, 113, 122, 0.16) 64.457%
  );

  color: rgb(202, 209, 233);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const PricingSwitchInactive = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgb(175, 179, 202);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const PricingCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
