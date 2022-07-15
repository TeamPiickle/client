import styled from "styled-components";

import { IcCheck1 } from "../../../asset/icon";

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

  IcCheck1: styled(IcCheck1)<{ isSelected: boolean }>`
    display: ${({ isSelected }) => (!isSelected ? "none" : "block")};
  `,

  VoteOptionText: styled.strong<{ isSelected: boolean }>`
    ${({ theme }) => theme.fonts.btn2};
    color: ${({ theme, isSelected }) => (isSelected ? theme.colors.gray800 : theme.colors.gray600)};

    margin-left: 0.4rem;
  `,

  VotedPercent: styled.strong``,

  VotedProgressBarContainer: styled.div<{ isSelected: boolean }>`
    width: 27.2rem;
    height: 1rem;

    border-radius: 4rem;

    background-color: ${({ theme }) => theme.colors.gray100};
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);
    opacity: ${({ isSelected }) => (isSelected ? "rgba(0, 0, 0, 0.25)" : "1")};

    margin-top: 0.8rem;

    overflow: hidden;
  `,

  VotedProgressBar: styled.div<{ isSelected: boolean }>`
    height: 1rem;
    width: 65%;

    background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.green : theme.colors.sub_green1)};
    opacity: 1;
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
