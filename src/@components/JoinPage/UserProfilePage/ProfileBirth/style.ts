import styled from "styled-components";

export const St = {
  ProfileBirth: styled.section``,

  InputContainer: styled.div`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  BirthInputForm: styled.input`
    width: 32.8rem;
    padding-left: 2.4rem;
    margin-left: -1.5rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ theme }) => theme.colors.bg};
  `,

  Down: styled.div`
    display: inline-block;
    margin-left: -3rem;
    margin-top: 1.3rem;
  `,
};
