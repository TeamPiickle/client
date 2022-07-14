import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { activeState } from "../../../core/atom/menuBar";
import MenuBar from "../MenuBar";
import { St } from "./style";

export default function Header() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(activeState);

  return (
    <St.HeaderWrapper iscardview={pathname === "/card-collection"}>
      <Link to="/">
        <IcLogo aria-label="피클" />
      </Link>
      <St.HamburgerContainer isClicked={isActive}>
        <IcHamburger aria-label="메뉴" onClick={() => setIsActive((prevState) => !prevState)} />
      </St.HamburgerContainer>

      {isActive && <MenuBar />}
    </St.HeaderWrapper>
  );
}
