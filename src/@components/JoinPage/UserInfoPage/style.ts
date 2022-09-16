import styled from "styled-components";

export const St = {
  ContainerWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 1.6rem 2rem;

    height: 51.3rem;
  `,

  UserInfoContainer: styled.section`
    position: relative;
  `,

  ContentTitle: styled.h1`
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};

    margin: 2.4rem 0 3.2rem 0;
  `,

  SuccessBtnContainer: styled.div`
    bottom: 2rem;

    width: 100%;
  `,

  SuccessBtn: styled.button`
    height: 5rem;
    width: 100%;
    /* width: 32.8rem; */

    background-color: ${({ theme }) => theme.colors.black};

    border-radius: 5rem;

    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.btn2}
  `,
};
