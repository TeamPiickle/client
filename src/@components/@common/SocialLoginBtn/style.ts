import styled from "styled-components";

export const LoginBtn = styled.button<{ bgColor: string }>`
  width: 32.8rem;
  height: 5rem;

  margin-top: 0.8rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme, bgColor }) => (bgColor === "KAKAO" ? theme.newColors.red : theme.newColors.green)};
`;

export const BtnLogo = styled.div``;

export const BtnText = styled.p`
  ${({ theme }) => theme.newFonts.h1};
`;
