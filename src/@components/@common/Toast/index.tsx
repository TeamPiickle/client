import { useRecoilValue } from "recoil";

import { activeStateToast } from "../../../core/atom/menuBar";
import * as St from "./style";

export default function Toast() {
  const { message } = useRecoilValue(activeStateToast);

  return <St.ToastContainer>{message}</St.ToastContainer>;
}
