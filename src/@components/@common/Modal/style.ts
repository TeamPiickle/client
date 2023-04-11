import styled, { keyframes } from "styled-components";

const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 10;

  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GrayRoot = styled(Root)`
  animation: ${fadeOut} 0.8s ease-in-out;
`;

const WhiteRoot = styled(Root)`
  align-items: flex-end;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  animation: ${fadeOut} 0.8s ease-in-out;
`;

const DefaultRoot = styled(Root)`
  align-items: center;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  padding: 1.6rem;
`;

const bottomUp = keyframes`
  from {
    transform: translateY(60rem);
  }
  to {
    transform: translateY(0);
  }
`;

const GrayModal = styled.section`
  position: fixed;
  bottom: 0;

  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};

  background-color: ${({ theme }) => theme.newColors.gray100};

  animation: ${bottomUp} 0.6s ease-in-out;
`;

const WhiteModal = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.newColors.white};

  padding: 2rem 0 0;

  animation: ${bottomUp} 0.6s ease-in-out;
`;

const DefaultModal = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.colors.sub_green5};
  border-radius: 2rem;

  padding: 2rem 1.6rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 2rem;

  cursor: pointer;

  width: 2.2rem;
  height: 2.2rem;

  z-index: 10;
`;

const ModalContents = styled.main``;

const St = {
  GrayRoot,
  GrayModal,
  WhiteRoot,
  WhiteModal,
  DefaultRoot,
  DefaultModal,
  CloseBtn,
  ModalContents,
};
export default St;
