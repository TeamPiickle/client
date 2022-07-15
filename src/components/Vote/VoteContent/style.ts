import styled from "styled-components";

export const St = {
  VoteContentContainer: styled.article`
    height: 44.2rem;
    width: 30.4rem;

    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25), 0rem 0rem 0.2rem rgba(0, 0, 0, 0.25);

    border-radius: 1.5rem;

    padding-top: 5.3rem;
  `,

  VoteContentTitle: styled.h2`
    ${({ theme }) => theme.fonts.body3}

    color: ${({ theme }) => theme.colors.bg};

    margin-left: 1.6rem;
  `,

  VoteOptionContainer: styled.ul`
    width: 27.2rem;
    height: 14.3rem;

    margin-top: 2.6rem;
    margin-left: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  VoteOptionList: styled.li`
    width: 27.2rem;
    height: 3.7rem;

    border: solid 0.1rem #e0e0e0;
    border-radius: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 1.6rem;
    padding-right: 2.3rem;
  `,

  VoteOptionText: styled.strong`
    color: ${({ theme }) => theme.colors.gray600};

    ${({ theme }) => theme.fonts.body11}
  `,

  VoteOptionCheck: styled.div`
    color: ${({ theme }) => theme.colors.black};
  `,

  VoteBtnContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  VoteBtn: styled.button`
    width: 15.6rem;
    height: 3.4rem;

    border-radius: 6.6rem;

    ${({ theme }) => theme.fonts.h2}

    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};

    margin-top: 8.4rem;
  `,
};
