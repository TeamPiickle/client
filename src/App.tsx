import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { activeState, activeStateModal } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";

export default function App() {
  const isActive = useRecoilValue(activeState);
  const isActiveModal = useRecoilValue(activeStateModal);

  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <St.MobileContainer>
      {(isActive || isActiveModal) && <ModalStyle />}
      <Router />
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    position: relative;

    margin: 0 auto;

    ${({ theme }) => theme.media.desktop`
      width: 36rem;
    `};
  `,
};
