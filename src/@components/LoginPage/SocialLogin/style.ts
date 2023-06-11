import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6.8rem;
`;

export const ContentsWrapper = styled.div`
  width: 32.9rem;
  height: 1.7rem;

  position: relative;
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.hr`
  width: 100%;

  border: 0.1rem solid ${({ theme }) => theme.newColors.gray200};
`;

export const Contents = styled.p`
  position: absolute;

  padding: 0 1rem;
  display: inline-block;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray900};
  background-color: ${({ theme }) => theme.newColors.white};
`;
