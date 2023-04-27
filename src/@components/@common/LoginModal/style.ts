import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  margin-top: 6.9rem;
  height: 13.6rem;
  background: #eef5f3;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ModalContents = styled.p`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  gap: 0.1rem;

  height: 5.8em;
`;

export const Button = styled.button`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray100};
  background: ${({ theme }) => theme.newColors.gray900};
`;
