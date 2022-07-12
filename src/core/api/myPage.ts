import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 유저 프로필 조회
function fetchProfile() {
  return realReq.GET(PATH.USERS);
}

export const real = {
  fetchProfile,
};
