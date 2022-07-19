import styled from "styled-components";

export const St = {
  Container: styled.div`
    padding: 3.5rem 0 0.4rem;
  `,
  Wrapper: styled.article`
    margin-bottom: 2rem;
  `,
  Label: styled.p`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};

    margin-bottom: 0.9rem;
  `,
  CurrentNickname: styled.input`
    width: 100%;
    height: 4.4rem;

    border-radius: 4.9rem;

    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray400};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  NewNickname: styled.input`
    width: 100%;
    height: 4.4rem;

    border-radius: 4.9rem;

    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  ErrorMessage: styled.div`
    ${({ theme }) => theme.fonts.caption5};
    color: ${({ theme }) => theme.colors.red};

    margin-left: 2.3rem;
    margin-top: 0.6rem;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;

    margin-top: 1.3rem;
  `,
  SaveButton: styled.button`
    width: 14.4rem;
    height: 3.6rem;

    ${({ theme }) => theme.fonts.btn5};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.white};

    border-radius: 4.7rem;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
  `,
};
