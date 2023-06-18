import styled from "styled-components";

export const Container = styled.a<{ linktype: "KAKAO" | "NAVER" }>`
  width: 100%;
  height: 5rem;

  margin-top: 0.8rem;
  padding: 0 1.6rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, linktype }) =>
    linktype === "KAKAO" ? theme.newColors.kakaoyellow : theme.newColors.navergreen};
`;

export const Logo = styled.div`
  position: absolute;
  left: 1.6rem;
`;

export const Text = styled.p<{ texttype: "KAKAO" | "NAVER" }>`
  ${({ theme }) => theme.newFonts.btnsocaillogin};
  color: ${({ theme, texttype }) => (texttype === "KAKAO" ? theme.newColors.black : theme.newColors.white)};
`;
