import { useLocation } from "react-router-dom";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import useModal from "../../../util/hooks/useModal";
import MenuBar from "../MenuBar";
import { St } from "./style";

export default function Header() {
  const { pathname } = useLocation();
  const { isModalOpen, toggleModal } = useModal();

  return (
    <St.HeaderWrapper iscardview={pathname === "/card-collection"}>
      <St.Link to={routePaths.Main}>
        <IcLogo aria-label="피클" />
      </St.Link>
      <St.HamburgerContainer isClicked={isModalOpen}>
        <IcHamburger aria-label="메뉴" onClick={toggleModal} />
      </St.HamburgerContainer>
      {isModalOpen && <MenuBar closeMenuBar={toggleModal} />}
    </St.HeaderWrapper>
  );
}
