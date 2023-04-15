import styled from "styled-components";

const MainPage = styled.main`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
`;

const FilterBtn = styled.button`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 5.8rem;

  z-index: 1;

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray100};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  MainPage,
  FilterBtn,
};
export default St;
