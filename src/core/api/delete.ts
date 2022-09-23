import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function putDelete(reasons: string[]) {
  return realReq.PUT(`${PATH.USERS_}/me`, reasons);
}

export const deleteApi = {
  putDelete,
};
