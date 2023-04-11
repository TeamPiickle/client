import styled from "styled-components";

const MainPage = styled.main`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  padding: 8rem 0 5.1rem;
`;

const FilterBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 5.8rem;

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray100};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  MainPage,
  FilterBtn,
};
export default St;
