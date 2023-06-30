import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuceessPage = styled.main`
  height: 100vh;

  background: ${({ theme }) => theme.colors.card};
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15.6rem 4.1rem 0;
  gap: 2.8rem;

  & > :last-child {
    margin-left: auto;
  }
`;

export const WelcomeText = styled.p`
  text-align: center;

  margin: 13.3rem 0 9rem;

  ${({ theme }) => theme.newFonts.h1};
`;

export const GoHomeBtn = styled(Link)`
  display: flex;

  height: 5.3rem;

  margin: 0 1.6rem 0.8rem;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.newColors.gray900};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.caption1};
`;

export const GoMypageBtn = styled(Link)`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.newColors.gray700};
  ${({ theme }) => theme.newFonts.caption1};
`;
