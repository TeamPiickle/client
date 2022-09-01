import styled from "styled-components";

export const St = {
  ProgressBarContainer: styled.section`
    width: 100%;
    height: 0.4rem;
  `,

  ProgressRate: styled.div<{ rate: number }>`
    height: 100%;
    width: ${({ rate }) => rate}%;

    background-color: ${({ theme }) => theme.colors.green};
  `,
};
