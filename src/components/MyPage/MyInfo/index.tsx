import axios from "axios";
import { useEffect, useState } from "react";

import { St } from "./style";

export default function MyInfo() {
  const [profile, setProfile] = useState([]);

  async function getDataList() {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    setProfile(result.data.data);
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
