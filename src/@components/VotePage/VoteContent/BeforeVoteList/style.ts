import styled from "styled-components";

const VoteOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 4rem;
`;

const VoteOptionList = styled.li<{ isClicked: boolean }>`
  height: 4rem;

  border: solid 0.1rem #e0e0e0;
  border-radius: 0.5rem;

  background-color: ${({ theme, isClicked }) => (isClicked ? theme.colors.green : theme.colors.white)};
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.white : theme.colors.gray700)};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 1.6rem;
  padding-right: 2.3rem;
`;

const VoteOptionText = styled.strong`
  ${({ theme }) => theme.newFonts.btn1}
`;

const VoteBtn = styled.button`
  width: 100%;
  height: 5.4rem;

  margin-top: 4rem;

  border-radius: 0.4rem;

  ${({ theme }) => theme.newFonts.btn1}
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const St = {
  VoteOptionContainer,
  VoteOptionList,
  VoteOptionText,
  VoteBtn,
};

export default St;
