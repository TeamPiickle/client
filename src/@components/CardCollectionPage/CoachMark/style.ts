import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  right: 0;

  margin-top: 5.2rem;
  height: calc((100% + 3.3rem) * 0.77);
  padding-bottom: 10.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Contents = styled.p`
  text-align: right;
  padding-right: 1.6rem;
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.white};
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2.1rem;

  gap: 2.4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 4.1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
`;

export const ButtonLabel = styled.p`
  margin-top: 0.6rem;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.white};
`;
