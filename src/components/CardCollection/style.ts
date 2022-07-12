import styled from "styled-components";

import { IcFilterBtn } from "../../asset/icon";

export const St = {
  MainPage: styled.main`
    height: 100vh;

    padding: 6.4rem 2.8rem 5.1rem;

    background: ${({ theme }) => theme.colors.card};
  `,

  IcFilterBtn: styled(IcFilterBtn)`
    position: absolute;
    right: 2.3rem;
    bottom: 3.4rem;
  `,
};
