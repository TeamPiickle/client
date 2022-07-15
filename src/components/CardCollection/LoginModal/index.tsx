import { IcGrayHeart } from "../../../asset/icon/index";
import Modal from "../../common/Modal";
import { St } from "./style";

interface LoginCheckProps {
  closeHandler: () => void;
}

export default function LoginModal(props: LoginCheckProps) {
  const { closeHandler } = props;
  return (
    <Modal closeHandler={closeHandler}>
      <St.Container>
        <St.Wrapper>
          <IcGrayHeart />
          <St.ModalContents>로그인을 하시면 북마크 기능인 마이피클을 이용할 수 있어요!</St.ModalContents>
        </St.Wrapper>
        <St.Buttons>
          <St.LoginButton>로그인</St.LoginButton>
          <St.SignUpButton>회원가입</St.SignUpButton>
        </St.Buttons>
      </St.Container>
    </Modal>
  );
}
