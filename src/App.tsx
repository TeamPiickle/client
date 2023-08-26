import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import ToastProvider from "./@components/@common/Toast/ToastProvider";
import { activeStateModal } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";
import setScreenSize from "./util/setScreenSize";

export default function App() {
  const isActiveModal = useRecoilValue(activeStateModal);

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <St.MobileContainer>
      <ToastProvider>
        <Router />
        {isActiveModal && <ModalStyle />}
      </ToastProvider>
      <div id="modal"></div>
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
