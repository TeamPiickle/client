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
export const EventHeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  display: flex;
  flex-direction: column;

  z-index: 10;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3.7rem;

  ${({ theme }) => theme.newFonts.caption1}

  :last-child {
    padding: 0 1.6rem;
    justify-content: space-between;
  }
`;

export const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;

  margin-right: 0.8rem;

  background: ${({ theme }) => theme.newColors.green};
`;

export const CountString = styled.div`
  color: ${({ theme }) => theme.newColors.gray500};
`;

export const CountNumber = styled.span`
  color: ${({ theme }) => theme.newColors.green};
`;
