import { useNavigate } from "react-router-dom";

import { routePaths } from "../../../core/routes/path";
import CustomFullHeart from "../../CardCollectionPage/CustomFullHeart";
import Modal from "../Modal";
import { St } from "./style";

interface LoginCheckProps {
  closeHandler: () => void;
  contents: string;
}
export default function LoginModal(props: LoginCheckProps) {
  const { closeHandler, contents } = props;
  const navigate = useNavigate();

  return (
    <Modal closeHandler={closeHandler}>
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
            onClick={() => {
              closeHandler();
              navigate(routePaths.Login);
            }}>
            로그인
          </St.Button>
          <St.Button
            type="button"
            onClick={() => {
              closeHandler();
              navigate(routePaths.EmailAuthentication);
            }}>
            회원가입
          </St.Button>
        </St.Buttons>
      </St.Container>
    </Modal>
  );
}
