import styled from "styled-components";

export const SlideContainer = styled.div`
  position: relative;
`;

export const SlideContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding-top: 3rem;
`;

export const SlideSubtitle = styled.h2`
  ${({ theme }) => theme.newFonts.h2};
`;
export const SlideTitle = styled.h1`
  ${({ theme }) => theme.newFonts.h1};
  color: ${({ theme }) => theme.newColors.green};
`;

export const SlideTitles = styled.div<{ islightmode: boolean; isLast: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  align-items: ${({ isLast }) => isLast && "center"};
  margin-left: ${({ isLast }) => !isLast && "2.5rem"};

  ${SlideSubtitle} {
    color: ${({ theme, islightmode }) => (islightmode ? theme.newColors.gray600 : theme.newColors.gray400)};
    font-size: ${({ isLast }) => isLast && "1.6rem"};
  }

  ${SlideTitle} {
    font-size: ${({ isLast }) => isLast && "2.3rem"};
  }
`;
export const ImageWrapper = styled.img`
  width: 100%;
  height: 30.2rem;
  object-fit: cover;
`;

export const Gradient = styled.div<{ islightmode: boolean }>`
  position: absolute;

  width: 100%;
  height: 10.2rem;

  bottom: 0;
  z-index: 1;

  background: ${({ islightmode }) =>
    islightmode
      ? "linear-gradient(0, #EDEDEF 0%, rgba(232, 232, 234, 0.00) 100%);"
      : "linear-gradient(0, #241e20 0%, rgba(36, 30, 32, 0) 100%)"};
`;
