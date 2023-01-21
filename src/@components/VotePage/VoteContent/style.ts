import styled from "styled-components";

const VoteContentContainer = styled.article`
  padding: 2.4rem 1.6rem 3.4rem;

  display: flex;
  flex-direction: column;
`;

const VoteContentTitle = styled.h2`
  ${({ theme }) => theme.fonts.body5}
  color: ${({ theme }) => theme.colors.gray900};
`;

const VoteBtnContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  gap: 0.1rem;
`;

const VoteBtn = styled.button`
  width: 100%;
  height: 5.8rem;

  ${({ theme }) => theme.fonts.btn3}

  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const St = {
  VoteContentContainer,
  VoteContentTitle,
  VoteBtnContainer,
  VoteBtn,
};

export default St;
