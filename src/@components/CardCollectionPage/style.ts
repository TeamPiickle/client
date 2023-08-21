import styled from "styled-components";

export const MainPage = styled.main`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  overflow-y: hidden;
`;

export const EventCoach = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 37rem;
  background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%);

  z-index: 10;
`;

export const EventCoachMessage = styled.p`
  margin-bottom: 1.2rem;
  margin-top: 18.2rem;

  text-align: center;
  ${({ theme }) => theme.newFonts.body4}
`;
