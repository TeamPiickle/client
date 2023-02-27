import { useState } from "react";
import { Outlet } from "react-router-dom";

import { JOIN_FORM_DATA_KEY } from "../../core/join/formData";

export interface UserInfoFormDataContext {
  userInfoFormDataForPost: FormData;
  formDataEmailValue: string;
  formDataPasswordValue: string;
  formDataNicknameValue: string;
  formDataBirthdayValue: string;
  formDataGenderValue: string;
  setUserInfoFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function JoinPage() {
  const [userInfoFormData, setUserInfoFormData] = useState<FormData>(new FormData());

  return (
    <Outlet
      context={{
        userInfoFormDataForPost: userInfoFormData,
        formDataEmailValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Email) ?? "",
        formDataPasswordValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Password) ?? "",
        formDataNicknameValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Nickname) ?? "",
        formDataBirthdayValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Birthday) ?? "",
        formDataGenderValue: userInfoFormData.get(JOIN_FORM_DATA_KEY.Gender) ?? "",
        setUserInfoFormData,
      }}
    />
  );
}
