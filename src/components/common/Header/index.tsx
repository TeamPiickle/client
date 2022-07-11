import { IcHamburger, IcLogo } from "../../../asset/icon";
import { St } from "./style";

export default function Header() {
  return (
    <St.HeaderWrapper>
      <IcLogo />
      <IcHamburger />
    </St.HeaderWrapper>
  );
}
