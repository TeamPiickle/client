import styled from "styled-components";

export const St = {
  Container: styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.4rem 0 3.6rem 1.6rem;
    gap: 2.4rem;

    width: 36rem;
    height: 11.8rem;
  `,

  ProfileImage: styled.div`
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 50%;

    background-color: black;
  `,

  Profile: styled.div`
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

  ProfileMyNickname: styled.p`
    width: auto;
    height: 2.6rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
    letter-spacing: -0.03em;
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

    border-radius: 0.7rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 140%;

    letter-spacing: -0.04rem;
  `,

  ProfileEmail: styled.div`
    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
