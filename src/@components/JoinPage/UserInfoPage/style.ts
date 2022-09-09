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
};
