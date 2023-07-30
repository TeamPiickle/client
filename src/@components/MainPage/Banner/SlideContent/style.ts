import styled from "styled-components";

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3.2rem;
  margin-left: 2.5rem;

  gap: 1.2rem;
`;

export const SlideDate = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.4rem;
`;

export const DateString = styled.h2<{ islightmode: boolean }>`
  ${({ theme }) => theme.newFonts.h2};
  color: ${({ theme, islightmode }) => (islightmode ? theme.newColors.gray600 : theme.newColors.gray400)};
`;

export const NewBadge = styled.div`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 2.1rem;
  border-radius: 4.2rem;

  background: ${({ theme }) => theme.newColors.green};
`;

export const SlideCard = styled.p<{ islightmode: boolean }>`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme, islightmode }) => (islightmode ? theme.newColors.gray900 : theme.newColors.white)};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 26.5rem;
`;

export const LinkTo = styled.a`
  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray900};
  text-decoration: underline;

  margin-bottom: 2.4rem;
  align-self: center;

  z-index: 10;
`;

export const LinkScope = styled.a`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 9;
`;
