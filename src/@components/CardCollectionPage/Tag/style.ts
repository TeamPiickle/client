import styled from "styled-components";

export const St = {
  Tag: styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    margin: 0 0.4rem;
    padding: 0.4rem 0.8rem;
    height: 2.5rem;

    background-color: ${({ theme }) => theme.newColors.white};
    border-radius: 2.5rem;

    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.newColors.gray900};
  `,
};
