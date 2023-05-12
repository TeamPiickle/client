import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.6rem;

  width: 100%;
  height: 5.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  z-index: 10;
`;

export const Link = styled(LinkRouter)`
  padding-top: 0.2rem;
`;

export const HamburgerContainer = styled.div<{ isClicked: boolean }>``;
