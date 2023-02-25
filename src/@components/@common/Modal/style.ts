import styled from "styled-components";

const Root = styled.div`
  height: 100vh;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

const WhiteRoot = styled(Root)``;

const DefaultRoot = styled(Root)`
  padding: 1.6rem;
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

const ModalContents = styled.main`
  position: relative;
`;

const St = {
  WhiteRoot,
  WhiteModal,
  DefaultRoot,
  DefaultModal,
  CloseBtn,
  ModalContents,
};
export default St;
