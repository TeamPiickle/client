import styled from "styled-components";

export const MenuContainer = styled.article<{ ismenuadded?: boolean }>`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 1.7rem;
  right: 1.2rem;

  gap: ${({ ismenuadded }) => (ismenuadded ? "1.6rem" : "2.4rem")};
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

export const ButtonLabel = styled.p<{ ismenuadded?: boolean; islighted?: boolean }>`
  margin-top: ${({ ismenuadded }) => !ismenuadded && "0.6rem"};

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme, islighted }) => (islighted ? theme.newColors.green : theme.newColors.gray600)};
`;
