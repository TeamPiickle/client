/* eslint-disable indent */
import styled, { css, keyframes } from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  JoinAgree: styled.section`
    height: 54.2rem;

    position: relative;
  `,

  AgreeTitle: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 2.4rem 1.6rem 3.2rem;
    height: 9.2rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeContent: styled.ul``,

  AgreeContentItem: styled.li<{ isActive: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    gap: 1.6rem;
    padding: 1.6rem;
    height: 5.6rem;

    ${({ theme }) => theme.fonts.body12};

    color: ${({ theme, isActive }) => (isActive ? theme.colors.bg : theme.colors.gray600)};
  `,

  CheckBox: styled.button``,

  DetailButton: styled.a`
    position: absolute;
    right: 1.6rem;
  `,

  Line: styled.div`
    position: absolute;
    margin-top: 5.6rem;
    margin-left: -1.6rem;
    width: 100%;

    & > hr {
      height: 0.2rem;
      border-width: 0;
      background-color: ${({ theme }) => theme.colors.gray100};
      color: ${({ theme }) => theme.colors.gray100};
    }

    ${({ theme }) => theme.media.desktop`
      width: 36rem;
    `};
  `,

  ModalContainer: styled.div<{ isopen: boolean }>`
    margin: auto;
    align-items: center;

    position: absolute;
    right: 1.6rem;
    bottom: 7.4rem;
    left: 1.6rem;

    padding: 0 1.6rem;
    height: 4rem;

    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 10px;

    color: ${({ theme }) => theme.colors.bg};
    ${({ theme }) => theme.fonts.caption4};

    ${({ isopen }) =>
      isopen
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `};
  `,

  JoinButton: styled.button`
    margin: auto;
    display: block;
    margin-top: 10.9rem;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    width: calc(100% - 3.2rem);
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,
};

const 토스트애니메이션 = keyframes`
  0% {
    opacity: 0;
    transform : translateY(1.2rem);
  } 
  
  80% {
    transform : translateY(-0.3rem);
  } 
  
  100% {
    opacity: 1;
    transform : translateY(0);
  }
`;

export const ModalContainerWithAnimation = styled(St.ModalContainer)`
  animation: ${토스트애니메이션} 0.6s ease-in-out;
`;
