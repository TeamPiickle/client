import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import Modal from "../Modal";
import * as St from "./style";

interface LoginCheckProps {
  closeHandler: () => void;
  contents: string;
  voteLoginClassName?: string;
  voteJoinClassName?: string;
}
export default function LoginModal(props: LoginCheckProps) {
  const { closeHandler, contents, voteLoginClassName, voteJoinClassName } = props;
  const navigate = useNavigate();

  return (
    <Modal theme="GRAY_CENTER" closeHandler={closeHandler}>
      <St.Container role="dialog">
        <St.Wrapper>
          <St.ModalContents>로그인을 하시면 {contents} 이용할 수 있어요</St.ModalContents>
        </St.Wrapper>
        <St.Button
          type="button"
          // 투표에서의 로그인인지, 카드 좋아요에서의 로그인인지
          className={voteLoginClassName ? voteLoginClassName : GTM_CLASS_NAME.cardLogin}
          onClick={() => {
            closeHandler();
            navigate(routePaths.Login);
          }}>
          로그인 하기
        </St.Button>
      </St.Container>
    </Modal>
  );
}
