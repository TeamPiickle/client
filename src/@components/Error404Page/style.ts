import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    min-height: -webkit-fill-available;

    padding: 6.4rem 1.6rem 0;

    background-color: ${({ theme }) => theme.colors.sub_green5};
  `,

  Title: styled.h1`
    ${({ theme }) => theme.fonts.h1};
  `,

  Content: styled.p`
    margin-top: 0.8rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  GoHomeBtn: styled(Link)`
    position: absolute;
    bottom: 6.5rem;
    left: 50%;
    transform: translateX(-50%);

    width: 9rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.08rem solid ${({ theme }) => theme.colors.gray600};

    ${({ theme }) => theme.fonts.btn2};
  `,
};
