import styled from "styled-components";

export const St = {
  ProfileNickname: styled.section``,

  InputContainer: styled.div`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  NickNameInputForm: styled.input`
    width: 27.8rem;
    margin-right: 0.8rem;
    padding-left: 2.4rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ theme }) => theme.colors.bg};
  `,

  CheckBtn: styled.button`
    width: 6.1rem;

    ${({ theme }) => theme.fonts.caption4};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 3.8rem;
  `,
};
