import styled from "styled-components";

export const St = {
  ProfileNickname: styled.section``,

  InputContainer: styled.div`
    width: calc(100% - 3.2rem);
    height: 4.4rem;
    margin: 1.2rem auto 2.4rem auto;

    display: flex;
    justify-content: center;
  `,

  NickNameInputForm: styled.input<{ isincompletestate: boolean; iserrorstate: boolean }>`
    width: calc(100% + 25rem);
    margin-right: 0.8rem;
    padding-left: 2.4rem;

    border: solid 0.1rem
      ${({ isincompletestate, theme }) => (isincompletestate ? theme.colors.red : theme.colors.gray300)};
    border-radius: 4.9rem;
    ${({ theme }) => theme.fonts.body6}
    color: ${({ iserrorstate, theme }) => (iserrorstate ? theme.colors.gray400 : theme.colors.bg)};
    background-color: ${({ iserrorstate, theme }) => (iserrorstate ? theme.colors.gray100 : theme.colors.white)};

    ${({ theme }) => theme.media.desktop`
    width: 25.9rem;
    `};
  `,

  CheckBtn: styled.button`
    width: calc(100% - 18rem);

    ${({ theme }) => theme.fonts.caption4};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 3.8rem;

    ${({ theme }) => theme.media.desktop`
      width: 6.1rem;
    `};
  `,

  ErrorMessage: styled.div`
    margin: -2rem 4.2rem 1.6rem 2rem;

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.caption3}
  `,

  SuccessMessage: styled.div`
    margin: -2rem 4.2rem 1.6rem 2rem;

    color: ${({ theme }) => theme.colors.green};
    ${({ theme }) => theme.fonts.caption3}
  `,
};
