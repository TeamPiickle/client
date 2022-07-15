import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 유저 프로필 조회
async function fetchUserProfile() {
  const data = await realReq.GET(PATH.USERS);

  return data.data;
}

// 프로필사진 수정
// async function patchProfileImg() {
//   return realReq.PATCH(PATH.USERS);
// }

// 유저의 북마크 리스트 조회
async function fetchUserBookmarks() {
  const data = await realReq.GET(`${PATH.USERS}/bookmarks`);

  return data.data;
}

// 유저 닉네임 수정
async function patchUserNickName(nickname: string) {
  return await realReq.PATCH(`${PATH.USERS}/nickname`, nickname);
}

// 유저 비밀번호 재설정
async function patchUserPassword(email: string, newPassword: string) {
  return await realReq.PATCH(`${PATH.USERS}/me/password`, {
    email,
    newPassword,
  });
}

export const real = {
  fetchUserProfile,
  fetchUserBookmarks,
  patchUserNickName,
  patchUserPassword,
};
