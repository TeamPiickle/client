import styled from "styled-components";

export const St = {
  HeaderWrapper: styled.header<{ iscardview: boolean }>`
    display: flex;
    position: ${({ iscardview }) => (iscardview ? "absolute" : "sticky")};
    top: 0;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.6rem;

    width: 100%;
    height: 5.2rem;

    background-color: ${({ theme, iscardview }) => (iscardview ? "transparent" : theme.colors.white)};

    z-index: 10;
  `,

  HamburgerContainer: styled.div<{ isClicked: boolean }>``,

  LogoTitle: styled.h1`
    ${({ theme }) => theme.visually_hidden};
  `,
};
