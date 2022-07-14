import styled from "styled-components";

export const St = {
  MyInfoContainer: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.4rem 0 3.6rem 1.6rem;
    gap: 2.4rem;

    //width: 36rem;
    height: 11.8rem;
  `,

  ProfileImage: styled.div`
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.black};
  `,

  Profile: styled.article`
    align-items: center;
    width: auto;
    height: 4.7rem;
  `,

  ProfileNickname: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
    gap: 0.8rem;

    width: auto;
    height: 2.6rem;

    opacity: 0.8;
  `,

  ProfileMyNickname: styled.strong`
    width: auto;
    height: 2.6rem;

    letter-spacing: -0.03em;
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  ProfileNicknameEdit: styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.3rem 0.8rem;
    gap: 0.8rem;

    width: 6rem;
    height: 2rem;

    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.btn4};
    border-radius: 0.7rem;
  `,

  ProfileEmail: styled.p`
    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
