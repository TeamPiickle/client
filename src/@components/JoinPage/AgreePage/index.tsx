import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { joinApi } from "../../../core/api/join";
import useAuth from "../../../core/hooks/useAuth";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import { agreeListsContents } from "../../../util/join/agreeListsContents";
import { subHeaderInfo } from "../../../util/join/subHeaderInfo";
import Footer from "../../@common/Footer";
import useGTMPage from "../../@common/hooks/useGTMPage";
import useOutClickCloser from "../../@common/hooks/useOutClickCloser";
import useScroll from "../../@common/hooks/useScrollToTop";
import SubHeader from "../../@common/SubHeader";
import { UserInfoFormDataContext } from "..";
import { ModalContainerWithAnimation, St } from "./style";

export default function AgreePage() {
  useGTMPage();
  useScroll();

  const { userInfoFormDataForPost } = useOutletContext<UserInfoFormDataContext>();

  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();
  const loginWithUserToken = (accessToken: string) => {
    login(accessToken);
    navigate(`${routePaths.OAuth_}${routePaths.OAuth_Success}`);
  };

  const outClickCloserRef = useOutClickCloser(() => {
    setIsOpenAlert(false);
  }, false);

  const [isPickedItems, setIsPickedItems] = useState<boolean[]>([false, true, true, true, false]);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const socialLoginToken = location.state?.socialLoginToken;

  function handleChecking(index: number) {
    switch (index) {
      case 0:
        setIsPickedItems((prevItems) => [...prevItems].fill(isPickedItems[0] ? false : true));
        break;

      default:
        setIsPickedItems((prevItems) => {
          const currentItems = [...prevItems];
          currentItems[index] = !currentItems[index];
          return checkAllItems(currentItems);
        });
        break;
    }
  }

  const checkAllItems = (_items: boolean[]) => {
    const noCheckedItemIndex = _items.slice(1).find((el) => el === false);

    switch (noCheckedItemIndex) {
      case undefined:
        _items[0] = true;
        break;

      default:
        _items[0] = false;
        break;
    }

    return _items;
  };

  const completeJoinBtn = async () => {
    try {
      if (checkIsOkayToPass() && !socialLoginToken) {
        await joinApi.postJoin(userInfoFormDataForPost);
        navigate(routePaths.Login);
      } else if (checkIsOkayToPass() && socialLoginToken) {
        loginWithUserToken(socialLoginToken);
      } else {
        setIsOpenAlert(true);
      }
    } catch (error) {
      if (!axios.isAxiosError(error)) return;

      alert("회원가입을 다시 시도해주세요.");
      navigate(`${routePaths.Join_}${routePaths.Join_UserInfo}`);
    }
  };

  const checkIsOkayToPass = () => {
    let flag = true;

    agreeListsContents.every((content, index) => {
      if (content.required) {
        if (isPickedItems[index] === false) {
          flag = false;
          return false;
        }
      }

      return true;
    });

    return flag;
  };

  const agreeLists = agreeListsContents.map((item, index) => (
    <St.AgreeContentItem key={`condition-${index}`} isActive={isPickedItems[index]}>
      <St.CheckBox type="button" onClick={() => handleChecking(index)}>
        {isPickedItems[index] ? <IcFullCheckBox /> : <IcEmptyCheckBox />}
      </St.CheckBox>
      {item.text}
      {item.link && (
        <St.DetailButton href={item.link}>
          <IcNextBtn />
        </St.DetailButton>
      )}
      {index === 0 && (
        <St.Line>
          <hr />
        </St.Line>
      )}
    </St.AgreeContentItem>
  ));

  return (
    <St.Root>
      {/* <SubHeader prevPage={subHeaderInfo[4].prevPage} rate={subHeaderInfo[4].rate} /> */}
      {!socialLoginToken && <SubHeader prevPage={subHeaderInfo[2].prevPage} rate={subHeaderInfo[2].rate} />}
      <St.JoinAgree>
        <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
        <St.AgreeContent>{agreeLists}</St.AgreeContent>
        <ModalContainerWithAnimation isopen={isOpenAlert} ref={outClickCloserRef}>
          필수 항목에 동의해주세요
        </ModalContainerWithAnimation>
        <St.JoinButton className={GTM_CLASS_NAME.joinAgreeComplete} onClick={completeJoinBtn}>
          회원가입 완료하기
        </St.JoinButton>
      </St.JoinAgree>
      <Footer />
    </St.Root>
  );
}
