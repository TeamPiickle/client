import styled from "styled-components";

export const ModalContainer = styled.aside`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ModalItemWrapper = styled.div`
  display: flex;

  padding: 1.6rem;

  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray900};

  &:first-child {
    padding-top: 0;
    border-bottom: 0.1rem solid ${({ theme }) => theme.newColors.gray200};
  }
  &:last-child {
    border-top: 1.2rem solid ${({ theme }) => theme.newColors.gray100};
  }
`;

export const EmojiWrapper = styled.span`
  margin-right: 0.8rem;
`;

export const MessageWrapper = styled.span`
  margin-left: 1.2rem;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray600};
`;
