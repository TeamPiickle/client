import styled from "styled-components";

export const St = {
  HeaderContainer: styled.section`
    height: 5rem;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 1.7rem 1.6rem;
  `,

  GoBackBtnContainer: styled.div``,

  CloseBtnContainer: styled.div``,

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
