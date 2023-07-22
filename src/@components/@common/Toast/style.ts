import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  left: 0.8rem;
  bottom: 7.2rem;

  display: flex;

  width: 34.4rem;
  height: 4.8rem;
  padding: 0.8rem 1.6rem;
  align-items: center;

  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.newColors.gray200};
  background: ${({ theme }) => theme.newColors.white};

  z-index: 50;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray900};
`;
