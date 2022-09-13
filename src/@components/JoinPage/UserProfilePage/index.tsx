import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { joinApi } from "../../../core/api/join";
import { prevPages } from "../../../core/join/prevPages";
import { progressRate } from "../../../core/join/progressRate";
import { routePaths } from "../../../core/routes/path";
import Footer from "../../@common/Footer";
import Header from "../common/Header";
import PageProgressBar from "../common/PageProgressBar";
import ProfileBirth from "./ProfileBirth";
import ProfileGender from "./ProfileGender";
import ProfileImage from "./ProfileImage";
import ProfileNickname from "./ProfileNickname";
import { St } from "./style";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false); //닉넴 중복 확인
  const [isbirth, setIsbirth] = useState<string>("");
  const [isSelected, setIsSelected] = useState(""); // 성별
  const [isInComplete, setisInComplete] = useState(false); // 다음으로 버튼
  const [image, setImage] = useState(new FormData());

  const completeBtn = () => {
    setisInComplete(true);
    postJoin();

    /*
    nickName && isbirth && isChecked ? navigate(`${routePaths.Join_}${routePaths.Join_Agree}`) : null;
    */
  };

  const postJoin = () => {
    const postingUserInfo = {
      email: "skdus728@gmail.com",
      password: "1234",
      file: image,
      nickname: nickName,
      birthday: isbirth,
      gender: isSelected,
    };
    joinApi.postJoin(postingUserInfo);
  };

  return (
    <St.Root>
      <Header prevPage={prevPages[4].prevPage} />
      <PageProgressBar rate={progressRate[3].rate} />
      <St.ProfileContainer>
        <St.Title>프로필을 설정해주세요</St.Title>
        <St.SubTitle>프로필 사진(선택)</St.SubTitle>
        <ProfileImage setImage={setImage} />
        <St.SubTitle>닉네임(필수)</St.SubTitle>
        <St.Requirement>※ 한글, 영문, 숫자 상관없이 8자 이내</St.Requirement>
        <ProfileNickname
          nickName={nickName}
          isChecked={isChecked}
          isInComplete={isInComplete}
          setNickName={setNickName}
          setIsChecked={setIsChecked}
        />
        <St.SubTitle>생년월일(필수)</St.SubTitle>
        <St.Requirement>※ 만 14세 이상만 가입가능합니다.</St.Requirement>
        <ProfileBirth isbirth={isbirth} setIsbirth={setIsbirth} isInComplete={isInComplete} />
        <St.SubTitle>성별(선택)</St.SubTitle>
        <ProfileGender isSelected={isSelected} setIsSelected={setIsSelected} />
        <St.NextButton onClick={completeBtn}>다음으로</St.NextButton>
      </St.ProfileContainer>
      <Footer />
    </St.Root>
  );
}
