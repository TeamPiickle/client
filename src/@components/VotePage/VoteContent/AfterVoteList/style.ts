import styled from "styled-components";

import { IcCheckWithBg as _IcCheckWithBg } from "../../../../asset/icon";

const VoteOptionContainer = styled.ul`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  position: relative;
`;

const VoteOptionList = styled.li`
  height: 3.7rem;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
`;

const VotedDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconTextContainer = styled.div`
  display: flex;
`;

const IcCheckWithBg = styled(_IcCheckWithBg)<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (!isSelected ? "none" : "block")};
`;

const VoteOptionText = styled.strong<{ isSelected: boolean }>`
  ${({ theme }) => theme.fonts.btn2};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.gray800 : theme.colors.gray600)};

  margin-left: 0.4rem;
`;

const VotedPercent = styled.strong`
  ${({ theme }) => theme.fonts.h2};
`;

const VotedProgressBarContainer = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 1rem;

  border-radius: 4rem;

  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);
  opacity: ${({ isSelected }) => (isSelected ? "rgba(0, 0, 0, 0.25)" : "1")};

  margin-top: 0.8rem;

  overflow: hidden;
`;

const VotedProgressBar = styled.div<{ isSelected: boolean; width: number }>`
  height: 1rem;
  width: ${({ width }) => (width ? `${width}%` : 0)};

  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.green : theme.colors.sub_green1)};
  opacity: 1;
`;

const VoteBtn = styled.button`
  width: 100%;
  height: 5.4rem;

  margin-top: 4rem;

  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.btn3}
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const St = {
  VoteOptionContainer,
  VoteOptionList,
  VotedDescription,
  IconTextContainer,
  IcCheckWithBg,
  VoteOptionText,
  VotedPercent,
  VotedProgressBarContainer,
  VotedProgressBar,
  VoteBtn,
};

export default St;
