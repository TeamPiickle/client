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
  CurrentNicknameWrapper: styled.div`
    height: 4.4rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;

    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;
  `,
  CurrentNickname: styled.input`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.gray400};
  `,
  NewNicknameWrapper: styled.div`
    height: 4.4rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.bg};
    border-radius: 4.9rem;

    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;
  `,
  NewNickname: styled.input``,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  SaveButton: styled.button`
    width: 14.4rem;
    height: 3.6rem;

    ${({ theme }) => theme.fonts.btn5};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.bg};

    border-radius: 4.7rem;
  `,
};
