import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { activeState } from "./core/atom/menuBar";
import Router from "./Router";
import { ModalStyle } from "./style/modalStyle";

export default function App() {
  const isActive = useRecoilValue(activeState);

  return (
    <St.MobileContainer>
      {isActive && <ModalStyle />}
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
