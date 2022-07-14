import styled from "styled-components";

export const St = {
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

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
  `,
  VotedDescription: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  IconTextContainer: styled.div`
    display: flex;
  `,

  CheckIcon: styled.div``,

  VoteOptionText: styled.strong`
    ${({ theme }) => theme.fonts.btn2}
    color: ${({ theme }) => theme.colors.gray800};

    margin-left: 0.4rem;
  `,

  VotedPercent: styled.strong``,

  VotedProgressBar: styled.div`
    width: 27.2rem;
    height: 1rem;

    border-radius: 4rem;

    background-color: ${({ theme }) => theme.colors.green};

    margin-top: 0.8rem;
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
