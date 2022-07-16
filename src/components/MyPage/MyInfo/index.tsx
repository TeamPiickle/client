import { useEffect, useState } from "react";

import useUserProfile from "../../../core/api/myPage";
import { St } from "./style";

export default function MyInfo() {
  const { userProfile, isLoading, isError } = useUserProfile();
  // 아래 state 삭제하고, 위에 프로필 데이터로 진행해주면 돼 !
  const [profile, setProfile] = useState([]);

  async function getDataList() {
    // const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    // setProfile(result.data.data);
  }

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <St.MyInfoContainer>
      {profile &&
        profile.map((content) => {
          const { name, nickname, email, profile_image_url } = content;
          return (
            <St.Profile key={name}>
              <St.ProfileImage src={profile_image_url} alt="프로필이미지" />
              <St.ProfileDetail>
                <St.ProfileNickname>
                  <St.ProfileMyNickname>{nickname}</St.ProfileMyNickname>
                  <St.ProfileNicknameEdit>닉네임 수정</St.ProfileNicknameEdit>
                </St.ProfileNickname>
                <St.ProfileEmail>{email}</St.ProfileEmail>
              </St.ProfileDetail>
            </St.Profile>
          );
        })}
    </St.MyInfoContainer>
  );
}
