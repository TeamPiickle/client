import styled from "styled-components";

export const RankContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 4.8rem;
`;

export const ButtonWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 1.2rem;
  /* opacity: 소수점 수정 요구 */
`;

export const ContinueButton = styled.button`
  width: 20rem;
  height: 3.6rem;
  border-radius: 4.6rem;
  background: ${({ theme }) => theme.newColors.green};

  ${({ theme }) => theme.newFonts.body4};
  color: white;
  text-align: center;
  letter-spacing: -0.056rem; /* todo: 흠.. 폰트왜 다르지 */

  opacity: 0.8;
`;

/* todo: stylelint 적용하기 */
