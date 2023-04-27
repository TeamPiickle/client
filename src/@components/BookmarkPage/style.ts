import styled from "styled-components";

export const Root = styled.main`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  border-top: 0.2rem solid ${({ theme }) => theme.newColors.gray100};
  border-bottom: 0.2rem solid ${({ theme }) => theme.newColors.gray100};
  background-color: ${({ theme }) => theme.newColors.gray100};
`;
