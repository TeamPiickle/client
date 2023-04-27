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
  gap: 0.8rem;

  padding: 0 1.6rem;
  margin-bottom: 3.6rem;
`;
