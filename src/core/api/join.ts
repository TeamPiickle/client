import { userEmail } from "./../../types/users";
import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function postEmail(postingEmail: string) {
  return realReq.POST(PATH.EMAIL, postingEmail);
}

export const emailApi = {
  postEmail,
};
