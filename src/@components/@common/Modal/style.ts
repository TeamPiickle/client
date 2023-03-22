import styled from "styled-components";

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
  align-items: center;
`;

const GrayRoot = styled(Root)``;

const WhiteRoot = styled(Root)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
`;

const DefaultRoot = styled(Root)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  padding: 1.6rem;
`;

const GrayModal = styled.section`
  position: fixed;
  bottom: 0;

  width: 100%;
  ${({ theme }) => theme.media.desktop`
  width: 36rem;
  `};

  background-color: ${({ theme }) => theme.newColors.gray100};
`;

const WhiteModal = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.newColors.white};

  padding: 2rem 0 0;
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
