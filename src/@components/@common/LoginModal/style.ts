import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 6.4rem;

  height: 13.6rem;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ModalContents = styled.p`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  gap: 0.01rem;

  height: 5.8rem;
`;

export const Button = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray100};
  background: ${({ theme }) => theme.newColors.gray900};

  &:first-child {
    margin-right: 0.1rem;
  }
`;
