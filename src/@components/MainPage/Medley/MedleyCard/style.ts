import styled from "styled-components";

import { medleyGradation } from "../../../../util/main/medleyGradation";

const Container = styled.button``;

const MedleyCard = styled.div<{ bgcolorId: string }>`
  width: 14rem;
  height: 20rem;

  padding: 0 0.9rem;
  gap: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${({ bgcolorId }) => medleyGradation[bgcolorId]};
`;

const ContentTag = styled.p<{ iseditorpick: boolean }>`
  padding: 0rem 0.4rem;
  margin-top: 2.4rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme, iseditorpick }) => (iseditorpick ? theme.newColors.gray900 : theme.newColors.gray200)};
  background-color: ${({ theme, iseditorpick }) => (iseditorpick ? theme.newColors.green : theme.newColors.darkblue)};
`;

const ContentTitle = styled.strong`
  width: 12.2rem;

  white-space: pre-wrap;

  ${({ theme }) => theme.newFonts.body3}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  Container,
  MedleyCard,
  ContentTag,
  ContentTitle,
};
export default St;
