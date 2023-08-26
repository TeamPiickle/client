import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0.8rem 0.8rem;
  height: 100%;

  border: 0.1rem solid ${({ theme }) => theme.newColors.gray200};
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #ddfbf0 0%, rgba(232, 252, 244, 0.5) 100%);

  text-align: center;
`;

export const Title = styled.pre`
  margin-top: 5.6rem;
  ${({ theme }) => theme.newFonts.body2};
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Subtitle = styled.pre`
  margin-top: 1.6rem;
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.black};
`;
