import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import MenuBar from "../../Main/MenuBar";
import { St } from "./style";

export default function Header() {
  const { pathname } = useLocation();
  const [isOpened, setIsOpened] = useState(false);

  const handleModal = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    console.log(isOpened);
  }, [isOpened]);

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
