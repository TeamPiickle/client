import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { activeStateModal } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";

export default function App() {
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
      {isActiveModal && <ModalStyle />}
      <Router />
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    position: relative;

    margin: 0 auto;

    @media screen and (min-width: 48rem), screen and (min-height: 48rem) and (orientation: landscape) {
      width: 36rem;
    }
  `,
};
