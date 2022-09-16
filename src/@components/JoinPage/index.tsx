import { useState } from "react";
import { Outlet } from "react-router-dom";

export interface UserInfoFormDataContext {
  userInfoFormData: FormData;
  setUserInfoFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function JoinPage() {
  const [userInfoFormData, setUserInfoFormData] = useState<FormData>(new FormData());

  // TODO
  // :: useUserInfo 커스텀훅으로 빼내기
  // const handleUserInfoFormData = <K extends keyof typeof userInfoFormData, V extends typeof userInfoFormData[K]>(
  //   key: K,
  //   value: V,
  // ) => {
  //   setUserInfoFormData((prevStack) => {
  //     const currentStack = { ...prevStack };

  //     currentStack[key] = value;

  //     return currentStack;
  //   });
  // };

  return (
    <div>
      <Outlet context={{ userInfoFormData, setUserInfoFormData }} />
    </div>
  );
}
