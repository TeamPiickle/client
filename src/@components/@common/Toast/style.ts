import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 7.2rem;

  width: 100%;
  padding: 0 0.8rem;

  z-index: 10;
`;

export const ToastMessage = styled.div<{ isdark?: boolean }>`
  display: flex;
  justify-content: space-between;

  height: 4.8rem;
  padding: 0.8rem 1.6rem;
  align-items: center;

  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.newColors.gray200};
  background: ${({ theme, isdark }) => (isdark ? theme.newColors.blackblur : theme.newColors.white)};

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme, isdark }) => (isdark ? theme.newColors.white : theme.newColors.gray900)};
`;

export const CancelButton = styled.button`
  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray600};
`;
