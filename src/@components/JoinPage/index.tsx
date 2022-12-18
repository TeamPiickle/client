import { useState } from "react";
import { Outlet } from "react-router-dom";

export interface UserInfoFormDataContext {
  userInfoFormData: FormData;
  setUserInfoFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function JoinPage() {
  const [userInfoFormData, setUserInfoFormData] = useState<FormData>(new FormData());

  return <Outlet context={{ userInfoFormData, setUserInfoFormData }} />;
}
