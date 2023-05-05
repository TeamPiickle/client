import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 37.7rem;

  ${({ theme }) => theme.media.desktop`
  width: 36rem;
  `};
`;

const MedleyPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Tag = styled.p`
  margin: 4.4rem 1.6rem 0 1.6rem;
  padding: 0 0.4rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray200};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const Title = styled.strong`
  margin: 0.4rem 1.6rem 0 1.6rem;
  white-space: pre-wrap;

  ${({ theme }) => theme.newFonts.body1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const Description = styled.p`
  margin: 0.8rem 1.6rem 1.6rem 1.6rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const PreviewCards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;

const CardWrapper = styled.p`
  padding: 0.8rem 1.6rem;

  ${({ theme }) => theme.newFonts.body4}
  color: ${({ theme }) => theme.newColors.gray900};
  background-color: ${({ theme }) => theme.newColors.white};
`;

const St = {
  Container,
  MedleyPreview,
  Tag,
  Title,
  Description,
  PreviewCards,
  CardWrapper,
};
export default St;
