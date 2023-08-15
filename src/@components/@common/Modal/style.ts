import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  z-index: 10;

  display: flex;
  justify-content: center;
`;

export const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CoachMarkRoot = styled(Root)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill;

  background-color: ${({ theme }) => theme.newColors.blackblur};
`;

export const GrayRoot = styled(Root)`
  animation: ${fadeOut} 0.8s ease-in-out;
  background-color: ${({ theme }) => theme.newColors.black50};
`;

export const WhiteRoot = styled(Root)`
  align-items: flex-end;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  animation: ${fadeOut} 0.8s ease-in-out;

  background-color: ${({ theme }) => theme.newColors.black50};
`;

export const DefaultRoot = styled(Root)`
  align-items: center;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.newColors.black50};
`;

export const bottomUp = keyframes`
  from {
    transform: translateY(60rem);
  }
  to {
    transform: translateY(0);
  }
`;

const CenterModal = styled.section`
  position: fixed;
  top: 50%;
  bottom: 50%;

  transform: translateX(-50%);
  transform: translateY(-50%);
`;

export const CoachMarkModal = styled(CenterModal)`
  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
  height: 100%;
`;

export const GrayCenterModal = styled(CenterModal)`
  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
  height: 20rem;

  background-color: ${({ theme }) => theme.newColors.gray100};
`;

export const GrayModal = styled.section`
  position: fixed;
  bottom: 0;

  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};

  background-color: ${({ theme }) => theme.newColors.gray100};

  animation: ${bottomUp} 0.6s ease-in-out;
`;

export const WhiteModal = styled.section`
  position: relative;

  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};

  background-color: ${({ theme }) => theme.newColors.white};

  padding: 2rem 0 0;

  animation: ${bottomUp} 0.6s ease-in-out;
`;

export const DefaultModal = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.colors.sub_green5};
  border-radius: 2rem;

  padding: 2rem 1.6rem;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 2rem;

  cursor: pointer;

  width: 2.2rem;
  height: 2.2rem;

  z-index: 10;
`;

export const ModalContents = styled.main``;
