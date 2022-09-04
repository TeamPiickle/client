import styled from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  ProfileContainer: styled.section``,

  Title: styled.article`
    padding: 2.4rem 1.6rem 0.8rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  SubTitle: styled.p`
    margin-left: 1.6rem;

    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  Requirement: styled.p`
    margin: 0.4rem 0 0 1.6rem;

    ${({ theme }) => theme.fonts.caption3};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  ProfileImageContainer: styled.article``,

  Image: styled.div`
    width: 8rem;
    height: 8rem;

    position: relative;
    margin: 3.2rem auto;
    display: block;
  `,

  ProfileImage: styled.img``,

  AddBtnWrapper: styled.label`
    position: absolute;
    top: 5.8rem;
    left: 6rem;
  `,

  ProfileNickNameContainer: styled.article``,

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

  ProfileBrithContainer: styled.article``,

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

  ProfileGenderContainer: styled.article``,

  GenderInputForm: styled.input`
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

  NextButton: styled.button`
    width: calc(100% - 3.2rem);
    height: 5rem;

    margin: 6.9rem auto 2rem;
    display: block;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
      width: 32.8rem;
    `};
  `,
};
