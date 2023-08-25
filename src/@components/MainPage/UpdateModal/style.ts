import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 37rem;

  ${({ theme }) => theme.media.desktop`
  width: 36rem;
  `};
`;

export const Tag = styled.p`
  width: 9.7rem;

  margin: 4.9rem 1.6rem 0 1.6rem;
  padding: 0 0.4rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray200};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

export const Title = styled.h1`
  margin: 0.8rem 1.6rem 0 1.6rem;

  ${({ theme }) => theme.newFonts.body1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Description = styled.p`
  margin: 0.4rem 1.6rem 1.6rem 1.6rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const UpdateLists = styled.div`
  width: 100%;

  padding: 1.6rem;

  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  background-color: ${({ theme }) => theme.newColors.white};
`;

export const ContentsWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.newFonts.body4}
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Content = styled.p`
  margin-left: 0.8rem;
`;
