import styled from "styled-components";

export const St = {
  Tag: styled.li`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    margin-right: 0.9rem;
    padding: 0.4rem 1rem;
    height: 2.3rem;

    background-color: ${({ theme }) => theme.colors.sub_green1};
    backdrop-filter: blur(1.2rem);
    border-radius: 1.5rem;

    ${({ theme }) => theme.fonts.caption2};
    color: ${({ theme }) => theme.colors.caption2_color};
  `,
};
