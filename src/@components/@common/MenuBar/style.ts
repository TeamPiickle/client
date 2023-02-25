import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Root = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;

  background-color: ${({ theme }) => theme.newColors.black50};

  z-index: 10;
`;

const CloseBtnContainer = styled.div`
  position: absolute;
  top: 6.2rem;
  right: 1.6rem;
`;

const Contents = styled.section`
  position: absolute;
  top: 13.3rem;
`;

const RecomendContainer = styled.article`
  padding-top: 2.4rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.newFonts.body3}
  color: ${({ theme }) => theme.newColors.gray900};
  margin-right: 0.8rem;
`;

const CardRecomendWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RecomendWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray700};
`;

const ani = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 28.8rem;
  }
  100% {
    opacity: 1;
  }
  `;

const ContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  width: 28.8rem;
  height: 100vh;
  float: right;

  background-color: ${({ theme }) => theme.newColors.white};

  padding-left: 1.6rem;

  animation: ${ani} 0.8s ease-in-out;
`;

const St = {
  Root,
  CloseBtnContainer,
  Contents,
  RecomendContainer,
  Title,
  CardRecomendWrapper,
  RecomendWrapper,
  SubTitle,
  ContentsContainer,
};
export default St;
