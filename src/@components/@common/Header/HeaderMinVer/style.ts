import { Link as LinkComponent } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 3.3rem;

  display: flex;
  justify-content: end;
  align-items: center;

  z-index: 10;
`;

const Link = styled(LinkComponent)`
  margin-right: 1.6rem;

  ${({ theme }) => theme.newFonts.caption1};
`;

const St = {
  Header,
  Link,
};
export default St;
