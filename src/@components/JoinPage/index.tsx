import { useState } from "react";
import { Outlet } from "react-router-dom";

import { JOIN_FORM_DATA_KEY } from "../../util/join/formData";
import useGTMPage from "../@common/hooks/useGTMPage";

export interface UserInfoFormDataContext {
  userInfoFormDataForPost: FormData;
  formDataEmailValue: string;
  formDataNicknameValue: string;
  formDataBirthdayValue: string;
  formDataGenderValue: string;
  formDataImgFile: File;
  setUserInfoFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function JoinPage() {
  useGTMPage();

  const [userInfoFormData, setUserInfoFormData] = useState<FormData>(new FormData());

  return (
    <Outlet
      context={{
        userInfoFormDataForPost: userInfoFormData,
        formDataEmailValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Email) ?? "",
        formDataNicknameValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Nickname) ?? "",
        formDataBirthdayValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Birthday) ?? "",
        formDataGenderValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Gender) ?? "",
        formDataImgFile: userInfoFormData.get(JOIN_FORM_DATA_KEY.ImgFile),
        setUserInfoFormData,
      }}
    />
  );
}
