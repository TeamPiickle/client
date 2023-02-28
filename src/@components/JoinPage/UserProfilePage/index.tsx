import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { JOIN_FORM_DATA_KEY } from "../../../core/join/formData";
import { subHeaderInfo } from "../../../core/join/subHeaderInfo";
import { JOIN_PROFILE_ALERT_KEY, JOIN_PROFILE_ALERT_MESSAGE } from "../../../core/join/userProfileErrorMessage";
import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import Footer from "../../@common/Footer";
import SubHeader from "../../@common/SubHeader";
import { UserInfoFormDataContext } from "..";
import ProfileBirth from "./ProfileBirth";
import ProfileGender from "./ProfileGender";
import ProfileImage from "./ProfileImage";
import ProfileNickname from "./ProfileNickname";
import { St } from "./style";

export default function UserProfilePage() {
  const navigate = useNavigate();

  const { formDataNicknameValue, formDataBirthdayValue, formDataGenderValue, setUserInfoFormData } =
    useOutletContext<UserInfoFormDataContext>();

  const [profileImage, setProfileImage] = useState<File>();
  const [nickName, setNickName] = useState(formDataNicknameValue);
  const [birthData, setBirthData] = useState(formDataBirthdayValue);
  const [gender, setGender] = useState(formDataGenderValue);

  const [isChecked, setIsChecked] = useState(false); //닉네임 중복 확인
  const [isInComplete, setisInComplete] = useState(false); // 다음으로 버튼
  const [errorKey, setErrorKey] = useState(""); // 에러메세지

  const completeBtn = () => {
    setisInComplete(true);

    // 중복확인
    if (!isChecked) {
      return;
    }

    if (nickName && birthData && errorKey === "") {
      setUserInfoFormData((prevFormData) => {
        const currentFormData = new FormData();

        currentFormData.append(JOIN_FORM_DATA_KEY.Email, prevFormData.get(JOIN_FORM_DATA_KEY.Email) ?? "");
        currentFormData.append(JOIN_FORM_DATA_KEY.Password, prevFormData.get(JOIN_FORM_DATA_KEY.Password) ?? "");
        currentFormData.append(JOIN_FORM_DATA_KEY.Nickname, nickName);
        currentFormData.append(JOIN_FORM_DATA_KEY.Birthday, birthData);
        if (gender !== "") currentFormData.append(JOIN_FORM_DATA_KEY.Gender, gender);
        if (profileImage) currentFormData.append(JOIN_FORM_DATA_KEY.ImgFile, profileImage);

        return currentFormData;
      });

      navigate(`${routePaths.Join_}${routePaths.Join_Agree}`);
    }
  };

  const errorHandler = (err: string) => {
    setErrorKey(err);
  };

  return (
    <St.Root>
      {/* <SubHeader prevPage={subHeaderInfo[3].prevPage} rate={subHeaderInfo[3].rate} /> */}
      <SubHeader prevPage={subHeaderInfo[1].prevPage} rate={subHeaderInfo[1].rate} />
      <St.ProfileContainer>
        <St.Title>프로필을 설정해주세요</St.Title>
        <St.SubTitle>프로필 사진(선택)</St.SubTitle>
        <ProfileImage setProfileImage={setProfileImage} />

        <St.SubTitle>닉네임(필수)</St.SubTitle>
        <St.Requirement>※ 한글, 영문, 숫자 상관없이 8자 이내</St.Requirement>
        <ProfileNickname
          nickName={nickName}
          isChecked={isChecked}
          isInComplete={isInComplete}
          setNickName={setNickName}
          setIsChecked={setIsChecked}
          handleErrorMsg={errorHandler}
        />
        {(isInComplete && nickName === "") || errorKey === JOIN_PROFILE_ALERT_KEY.nickName.input ? (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.nickName.input}</St.ErrorMessage>
        ) : errorKey === JOIN_PROFILE_ALERT_KEY.nickName.fail ? (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.nickName.fail}</St.ErrorMessage>
        ) : errorKey === JOIN_PROFILE_ALERT_KEY.nickName.valid ? (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.nickName.valid}</St.ErrorMessage>
        ) : isInComplete && !isChecked ? (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.nickName.check}</St.ErrorMessage>
        ) : isChecked ? (
          <St.SuccessMessage>{JOIN_PROFILE_ALERT_MESSAGE.nickName.success}</St.SuccessMessage>
        ) : null}

        <St.SubTitle>생년월일(필수)</St.SubTitle>
        <St.Requirement>※ 만 14세 이상만 가입가능합니다.</St.Requirement>
        <ProfileBirth
          birthData={birthData}
          setBirthData={setBirthData}
          isInComplete={isInComplete}
          handleErrorMsg={errorHandler}
        />
        {isInComplete && birthData === "" && (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.birth.input}</St.ErrorMessage>
        )}
        {errorKey === JOIN_PROFILE_ALERT_KEY.birth.valid && (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.birth.valid}</St.ErrorMessage>
        )}
        {errorKey === JOIN_PROFILE_ALERT_KEY.birth.check && (
          <St.ErrorMessage>{JOIN_PROFILE_ALERT_MESSAGE.birth.check}</St.ErrorMessage>
        )}

        <St.SubTitle>성별(선택)</St.SubTitle>
        <ProfileGender gender={gender} setGender={setGender} />
        <St.NextButton className={GTM_CLASS_NAME.joinProfileNext} onClick={completeBtn}>
          다음으로
        </St.NextButton>
      </St.ProfileContainer>
      <Footer />
    </St.Root>
  );
}
