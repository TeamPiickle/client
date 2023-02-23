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

  padding: 1.6rem;
`;

const Modal = styled.section`
  position: relative;

  background-color: ${({ theme }) => theme.colors.sub_green5};
  border-radius: 2rem;

  padding: 2rem 1.6rem;
  width: 100%;
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
  Root,
  Modal,
  CloseBtn,
  ModalContents,
};
export default St;
