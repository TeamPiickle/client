import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../../../../style/theme";

export const St = {
  BestPiickleCard: styled.article`
    width: 20.2rem;
    height: 14.5rem;

    padding: 2rem 1.6rem 1.4rem;

    border-radius: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: ${theme.colors.white};
  `,

  TagsWrapper: styled.ul`
    display: flex;
    gap: 0.8rem;
  `,

  Tag: styled.li`
    ${theme.fonts.caption3};
    color: ${theme.colors.gray600};
  `,

  Content: styled.p`
    ${theme.fonts.caption1};
    color: ${theme.colors.black};

    width: 17rem;
    height: 4.4rem;
    margin: 0.6rem 0 2.3rem;
    // 말줄임표 설정
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,

  PickButtonWrapper: styled.button`
    width: 8.1rem;
    height: 2.5rem;

    background-color: ${theme.colors.green};
    border-radius: 4.2rem;

    float: right;
  `,

  PickButton: styled(Link)`
    ${theme.fonts.btn3}
    color: ${theme.colors.white};

    width: 8.1rem;
    height: 2.5rem;
  `,
};
