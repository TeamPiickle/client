import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { activeState } from "../../../core/atom/menuBar";
import MenuBar from "../MenuBar";
import { St } from "./style";

export default function Header() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useRecoilState(activeState);

  const handleModal = () => {
    setIsOpened(!isOpened);
  };

  if (isOpened) {
    return <MenuBar handleModal={handleModal} />;
  } else {
    return (
      <St.HeaderWrapper iscardview={pathname === "/card-collection"}>
        <Link to="/">
          <IcLogo aria-label="피클" />
        </Link>
        <St.HamburgerContainer isClicked={isOpened}>
          <IcHamburger aria-label="메뉴" onClick={handleModal} />
        </St.HamburgerContainer>
      </St.HeaderWrapper>
    );
  }
}
