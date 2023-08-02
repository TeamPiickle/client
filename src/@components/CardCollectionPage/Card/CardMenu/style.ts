import styled from "styled-components";

export const MenuContainer = styled.article`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 1.7rem;
  right: 1.2rem;

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
  color: ${({ theme }) => theme.newColors.gray600};
`;
