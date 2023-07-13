import styled from "styled-components";

export const RankContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 7.2rem;
`;

export const ButtonWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 1.2rem;
`;

export const ContinueButton = styled.button`
  width: 20rem;
  height: 3.6rem;
  border-radius: 4.6rem;
  background: ${({ theme }) => theme.newColors.green};

  ${({ theme }) => theme.newFonts.body4};
  color: white;
  text-align: center;
`;
