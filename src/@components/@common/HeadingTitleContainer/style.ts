import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Container: styled.header<{ paddingVerticalValue: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.4rem 0;
    padding: ${({ paddingVerticalValue }) => `${paddingVerticalValue}rem 0`};
  `,

  Wrapper: styled.div<{ ismore: boolean }>`
    margin-left: 1.6rem;
    width: ${({ ismore }) => (ismore ? "29rem" : "100%")};
  `,

  Title: styled.h2`
    ${({ theme }) => theme.newFonts.h1};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  Content: styled.p`
    margin-top: 0.4rem;

    white-space: pre-wrap;

    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme }) => theme.newColors.gray700};
  `,

  Link: styled(Link)`
    margin-right: 1.6rem;

    ${({ theme }) => theme.newFonts.body4};
  `,
};
