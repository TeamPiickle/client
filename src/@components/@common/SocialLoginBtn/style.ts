import styled from "styled-components";

export const LoginBtn = styled.div<{ btntype: "KAKAO" | "NAVER" }>`
  width: 32.8rem;
  height: 5rem;

  margin-top: 0.8rem;
  padding: 0 1.6rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, btntype }) =>
    btntype === "KAKAO" ? theme.newColors.kakaoyellow : theme.newColors.navergreen};
`;

export const BtnLogo = styled.div`
  position: absolute;
  left: 1.6rem;
`;

export const BtnText = styled.p<{ texttype: "KAKAO" | "NAVER" }>`
  ${({ theme }) => theme.newFonts.btnsocaillogin};
  color: ${({ theme, texttype }) => (texttype === "KAKAO" ? theme.newColors.black : theme.newColors.white)};
`;
