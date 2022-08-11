import { Link } from "react-router-dom";
import styled from "styled-components";

import { St as StCard } from "../style";

export const St = {
  Card: styled(StCard.Card)``,

  ContentTitle: styled(StCard.ContentWrapper)`
    margin-top: 8.6rem;

    ${({ theme }) => theme.fonts.body5};
  `,

  Content: styled.p`
    margin: 1.2rem 0 0 2.4rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  CategoryLink: styled(Link)`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  `,

  HomeLink: styled(Link)`
    position: absolute;
    bottom: 3.2rem;
    left: 50%;
    transform: translateX(-50%);

    width: 8.3rem;
    height: 1.9rem;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.fonts.btn1};
    color: ${({ theme }) => theme.colors.gray600};

    border-bottom: 0.08rem solid ${({ theme }) => theme.colors.gray600};
  `,
};
