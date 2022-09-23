import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { IcEmptyCheckBox, IcFullCheckBox, IcNextBtn } from "../../../asset/icon";
import { joinApi } from "../../../core/api/join";
import { agreeListsContents } from "../../../core/join/agreeListsContents";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import useOutClickCloser from "../../@common/hooks/useOutClickCloser";
import { UserInfoFormDataContext } from "..";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import { ModalContainerWithAnimation, St } from "./style";

export default function AgreePage() {
  const navigate = useNavigate();

  const { userInfoFormData } = useOutletContext<UserInfoFormDataContext>();

  const [isPickedItems, setIsPickedItems] = useState<boolean[]>([false, false, false, false, false]);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const alertElement = useOutClickCloser({
    handleOutClickCloser: () => {
      setIsOpenAlert(false);
    },
  });

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

  const completeJoinBtn = () => {
    if (checkIsOkayToPass()) {
      joinApi.postJoin(userInfoFormData);
      navigate(routePaths.Login);
    } else {
      setIsOpenAlert(true);
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
      {item.link ? <a href={item.link}>{item.text}</a> : item.text}
      {index !== 0 && (
        <St.DetailButton to="">
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
      <Header prevPage={prevPages[4].prevPage} />
      <PageProgressBar rate={progressRate[4].rate} />
      <St.JoinAgree>
        <St.AgreeTitle>약관을 동의해주세요</St.AgreeTitle>
        <St.AgreeContent>{agreeLists}</St.AgreeContent>
        <ModalContainerWithAnimation isopen={isOpenAlert} ref={alertElement}>
          필수 항목에 동의해주세요
        </ModalContainerWithAnimation>
        <St.JoinButton onClick={completeJoinBtn} className="GTM_Agree">
          회원가입 완료하기
        </St.JoinButton>
      </St.JoinAgree>
      <Footer />
    </St.Root>
  );
}
