import { Link } from "react-router-dom";

import { IcHamburger, IcLogo } from "../../../asset/icon";
import { St } from "./style";

export default function Header() {
  return (
    <St.HeaderWrapper>
      <Link to="/">
        <IcLogo />
      </Link>
      <IcHamburger />
    </St.HeaderWrapper>
  );
}
