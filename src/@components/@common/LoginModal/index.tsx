import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import { GTM_CLASS_NAME } from "../../../util/const/gtm";
import CustomFullHeart from "../../CardCollectionPage/CustomFullHeart";
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
          <St.HeartWrapper>
            <St.IcEmptyHeart />
            <CustomFullHeart />
          </St.HeartWrapper>
          <St.ModalContents>로그인을 하시면 {contents} 이용할 수 있어요!</St.ModalContents>
        </St.Wrapper>
        <St.Buttons>
          <St.Button
            type="button"
            // 투표에서의 로그인인지, 카드 좋아요에서의 로그인인지
            className={voteLoginClassName ? voteLoginClassName : GTM_CLASS_NAME.cardLogin}
            onClick={() => {
              closeHandler();
              navigate(routePaths.Login);
            }}>
            로그인
          </St.Button>
          <St.Button
            type="button"
            // 투표에서의 회원가입인지, 카드 좋아요에서의 회원가입인지
            className={voteJoinClassName ? voteJoinClassName : GTM_CLASS_NAME.cardJoin}
            onClick={() => {
              closeHandler();
              // navigate(`${routePaths.Join_}${routePaths.Join_EmailAuthentication}`);
              navigate(`${routePaths.Join_}${routePaths.Join_UserInfo}`);
            }}>
            회원가입
          </St.Button>
        </St.Buttons>
      </St.Container>
    </Modal>
  );
}
