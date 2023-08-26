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
  height: calc(var(--vh, 1vh) * 30);

  background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%);

  z-index: 10;
`;

export const EventCoachMessage = styled.p`
  margin: 2rem 0 1.2rem 0;

  text-align: center;
  ${({ theme }) => theme.newFonts.body4}
`;
