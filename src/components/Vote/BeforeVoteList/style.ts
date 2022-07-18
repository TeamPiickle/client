import styled from "styled-components";

export const St = {
  VoteOptionContainer: styled.ul`
    height: 14.3rem;

    margin: 2.6rem 1.6rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
  `,
  VoteOptionList: styled.li<{ isClicked: boolean }>`
    height: 3.7rem;

    border: solid 0.1rem #e0e0e0;
    border-radius: 0.5rem;

    background-color: ${({ theme, isClicked }) => (isClicked ? theme.colors.green : theme.colors.white)};
    color: ${({ theme, isClicked }) => (isClicked ? theme.colors.white : theme.colors.gray600)};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 1.6rem;
    padding-right: 2.3rem;
  `,

  VoteOptionText: styled.strong`
    ${({ theme }) => theme.fonts.body11}
  `,

  VoteOptionCheck: styled.div`
    color: ${({ theme }) => theme.colors.black};
  `,

  VoteBtnContainer: styled.div`
    display: flex;
    justify-content: center;

    bottom: 3.2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,

  VoteBtn: styled.button`
    width: 15.6rem;
    height: 3.4rem;

    border-radius: 6.6rem;

    ${({ theme }) => theme.fonts.body6}

    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
  `,
};
