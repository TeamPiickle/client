import styled from "styled-components";

export const St = {
  EmailContainer: styled.article`
    height: 7.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2.4rem;
  `,

  EmailTitleWrapper: styled.h2`
    width: 100%;
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
    /* margin-left: 1.6rem; */
  `,

  EmailTitleText: styled.div`
    margin-left: 0;
  `,

  EmailInputForm: styled.div`
    height: 4.2rem;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.gray100};

    border-radius: 4.9rem;

    margin-top: 1.2rem;
    padding-left: 2.4rem;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray400};

    ${({ theme }) => theme.fonts.body6}
  `,
};
