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
  padding: 3rem 0 0 2.5rem;
`;

export const SlideTitles = styled.div<{ isLightMode: boolean; isLast: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  align-items: ${({ isLast }) => isLast && "center"};

  > h2 {
    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme, isLightMode }) => (isLightMode ? theme.newColors.gray600 : theme.newColors.gray400)};
    font-size: ${({ isLast }) => isLast && "1.6rem"};
  }

  > h1 {
    ${({ theme }) => theme.newFonts.h1};
    color: ${({ theme }) => theme.newColors.green};
    font-size: ${({ isLast }) => isLast && "2.3rem"};
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3.2rem;

  gap: 1.2rem;
`;

export const SlideDate = styled.span<{ isLightMode: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.4rem;

  > h2 {
    ${({ theme }) => theme.newFonts.h2};
    color: ${({ theme, isLightMode }) => (isLightMode ? theme.newColors.gray600 : theme.newColors.gray400)};
  }
  > div {
    ${({ theme }) => theme.newFonts.caption1};
    color: ${({ theme }) => theme.newColors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 2.1rem;
    border-radius: 4.2rem;

    background: ${({ theme }) => theme.newColors.green};
  }
`;

export const SlideCard = styled.p<{ isLightMode: boolean }>`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme, isLightMode }) => (isLightMode ? theme.newColors.gray900 : theme.newColors.white)};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 26.5rem;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 30.2rem;
  object-fit: cover;
`;

export const Gradient = styled.div<{ isLightMode: boolean }>`
  position: absolute;

  width: 100%;
  height: 10.2rem;

  bottom: 0;
  z-index: 1;

  background: ${({ isLightMode }) =>
    isLightMode
      ? "linear-gradient(0, #EDEDEF 0%, rgba(232, 232, 234, 0.00) 100%);"
      : "linear-gradient(0, #241e20 0%, rgba(36, 30, 32, 0) 100%)"};
`;

export const Button = styled.button`
  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray900};
  text-decoration: underline;

  margin-bottom: 2.4rem;

  z-index: 10;
`;
