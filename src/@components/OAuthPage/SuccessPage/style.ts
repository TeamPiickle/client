import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuceessPage = styled.main`
  height: 100vh;

  background: ${({ theme }) => theme.colors.card};
`;

export const WelcomeText = styled.p`
  text-align: center;

  ${({ theme }) => theme.newFonts.h1};
`;

export const GoHomeBtn = styled(Link)``;

export const GoMypageBtn = styled(Link)``;
