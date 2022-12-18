import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const St = {
  Root: styled.main`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    z-index: 10;
  `,

  CloseBtnContainer: styled.div`
    position: absolute;
    top: 1.9rem;
    right: 1.6rem;
  `,

  Contents: styled.section`
    position: absolute;
    top: 10rem;
  `,

  RecomendContainer: styled.article`
    padding-top: 3.6rem;
  `,

  Title: styled.h1`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.bg};
    margin-right: 1.2rem;
  `,

  CardRecomendWrapper: styled.div``,

  RecomendWrapper: styled(Link)`
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
  `,

  SubTitle: styled.div`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};

const ani = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 28.8rem;
  }
  100% {
    opacity: 1;
  }
  `;

export const StContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  width: 28.8rem;
  height: 100vh;
  float: right;

  background-color: ${({ theme }) => theme.colors.white};

  padding-left: 1.8rem;

  animation: ${ani} 0.8s ease-in-out;
`;
