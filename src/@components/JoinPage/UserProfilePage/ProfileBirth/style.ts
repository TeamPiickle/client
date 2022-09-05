import styled from "styled-components";

export const St = {
  ProfileBirth: styled.section``,

  InputContainer: styled.div`
    height: 4.4rem;

    display: flex;
    justify-content: center;
    margin: 1.2rem 0 2.4rem 0;
  `,

  YearInputForm: styled.input`
    width: 10.4rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
  `,

  MonthInputForm: styled.input`
    width: 7.2rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
  `,

  DateInputForm: styled.input`
    width: 7.2rem;

    border: solid 0.1rem ${({ theme }) => theme.colors.gray300};
    border-radius: 4.9rem;
  `,

  Text: styled.p`
    margin: 1rem 0.8rem 0 1.8rem;

    color: ${({ theme }) => theme.colors.bg};
    ${({ theme }) => theme.fonts.body6};
  `,

  Down: styled.div`
    display: inline-block;
    margin-left: -3rem;
    margin-top: 1.3rem;
  `,
};
