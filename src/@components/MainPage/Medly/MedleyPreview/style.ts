import styled from "styled-components";

const Root = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;

  background-color: ${({ theme }) => theme.newColors.black50};

  z-index: 10;
`;

const Container = styled.section`
  width: 100%;
  height: 37.7rem;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${({ theme }) => theme.newColors.gray100};

  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
`;

const CloseBtnContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

const MedleyPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Tag = styled.p`
  padding: 0 0.4rem;
  margin: 4.4rem 1.6rem 0 1.6rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray200};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const Title = styled.strong`
  margin: 0.4rem 1.6rem 0 1.6rem;

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

const MoveBtn = styled.button`
  display: flex;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.8rem;
  margin-top: 1.6rem;

  backdrop-filter: blur(0.6rem);
  ${({ theme }) => theme.newFonts.btn1}
  color: ${({ theme }) => theme.newColors.white};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  Root,
  Container,
  CloseBtnContainer,
  MedleyPreview,
  Tag,
  Title,
  Description,
  PreviewCards,
  CardWrapper,
  MoveBtn,
};
export default St;
