import { useNavigate } from "react-router-dom";

import { IcCloseBtn, IcGoBackBtn } from "../../../asset/icon";
import { PrevPages } from "../../../core/join/prevPages";
import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

export interface HeaderProps {
  prevPage: PrevPages;
}

export default function Header(props: PrevPages) {
  const { prevPage } = props;
  const navigate = useNavigate();

  const goBackClickHandle = () => {
    navigate(prevPage);
  };

  const closeBtnClickHandle = () => {
    navigate(routePaths.Main);
  };
  return (
    <St.HeaderContainer>
      <St.GoBackBtnContainer onClick={goBackClickHandle}>
        <IcGoBackBtn />
      </St.GoBackBtnContainer>
      <St.CloseBtnContainer onClick={closeBtnClickHandle}>
        <IcCloseBtn />
      </St.CloseBtnContainer>
    </St.HeaderContainer>
  );
}
