import { useLocation } from "react-router-dom";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import useModal from "../hooks/useModal";
import MenuBar from "../MenuBar";
import { St } from "./style";

export default function Header() {
  const { pathname } = useLocation();
  const { isModalOpen, toggleModal } = useModal();

  return (
    <St.HeaderWrapper iscardview={pathname === routePaths.CardCollection}>
      <St.Link to={routePaths.Main} className={GTM_CLASS_NAME.mainPiickleLogo}>
        <IcLogo aria-label="피클" />
      </St.Link>
      <St.HamburgerContainer isClicked={isModalOpen}>
        <IcHamburger aria-label="메뉴" className={GTM_CLASS_NAME.mainMenuBtn} onClick={toggleModal} />
      </St.HamburgerContainer>
      {isModalOpen && <MenuBar closeMenuBar={toggleModal} />}
    </St.HeaderWrapper>
  );
}
