import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuceessPage = styled.main`
  height: 100vh;

  background: ${({ theme }) => theme.newColors.gradation};
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10.6rem 4.1rem 0;
  gap: 2.8rem;

  & > :last-child {
    margin-left: auto;
  }
`;

export const WelcomeText = styled.p`
  text-align: center;

  margin: 9.3rem 0 9rem;

  ${({ theme }) => theme.newFonts.h1};
`;

export const GoHomeBtn = styled(Link)`
  height: 5.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.6rem;

  background: ${({ theme }) => theme.newColors.gray900};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.caption1};
`;

export const GoMypageBtn = styled(Link)`
  display: flex;
  justify-content: center;

  margin-bottom: 2.7rem;

  color: ${({ theme }) => theme.newColors.gray700};
  ${({ theme }) => theme.newFonts.caption1};
`;
