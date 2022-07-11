import styled from "styled-components";

import Header from "./components/common/Header";
import Router from "./Router";

export default function App() {
  return (
    <St.MobileContainer>
      <Header />
      <Router />
    </St.MobileContainer>
  );
}

const St = {
  MobileContainer: styled.div`
    margin: 0 auto;

    @media screen and (min-width: 48rem), screen and (min-height: 48rem) and (orientation: landscape) {
      width: 36rem;
    }
  `,
};
