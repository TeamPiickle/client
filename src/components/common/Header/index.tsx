import { Link } from "react-router-dom";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { St } from "./style";

export default function Header() {
  return (
    <St.HeaderWrapper>
      <Link to="/">
        <IcLogo aria-label="피클" />
      </Link>
      <IcHamburger aria-label="메뉴" />
    </St.HeaderWrapper>
  );
}
