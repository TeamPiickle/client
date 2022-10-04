import { useNavigate } from "react-router-dom";

import { IcCloseBtn, IcGoBackBtn } from "../../../asset/icon";
import { routePaths } from "../../../core/routes/path";
import { St } from "./style";

export interface HeaderProps {
  prevPage: string;
  rate?: number;
}

export default function SubHeader(props: HeaderProps) {
  const { prevPage, rate } = props;
  const navigate = useNavigate();

  const goBackClickHandle = () => {
    navigate(prevPage);
  };

  const closeBtnClickHandle = () => {
    navigate(routePaths.Main);
  };

  return (
    <>
      <St.HeaderContainer>
        <St.GoBackBtnContainer onClick={goBackClickHandle}>
          <IcGoBackBtn />
        </St.GoBackBtnContainer>
        <St.CloseBtnContainer onClick={closeBtnClickHandle}>
          <IcCloseBtn />
        </St.CloseBtnContainer>
      </St.HeaderContainer>
      {rate && (
        <St.ProgressBarContainer>
          <St.ProgressRate rate={rate} />
        </St.ProgressBarContainer>
      )}
    </>
  );
}
