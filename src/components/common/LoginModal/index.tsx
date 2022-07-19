import { IcGrayHeart } from "../../../asset/icon/index";
import Modal from "../Modal";
import { St } from "./style";

interface LoginCheckProps {
  closeHandler: () => void;
  contents: string;
}
export default function LoginModal(props: LoginCheckProps) {
  const { closeHandler, contents } = props;

  return (
    <Modal closeHandler={closeHandler}>
      <St.Container>
        <St.Wrapper>
          <IcGrayHeart />
          <St.ModalContents>로그인을 하시면 {contents} 이용할 수 있어요!</St.ModalContents>
        </St.Wrapper>
        <St.Buttons>
          <St.LoginLink to="/login">
            <St.Button type="button">로그인</St.Button>
          </St.LoginLink>
          <St.Button type="button">회원가입</St.Button>
        </St.Buttons>
      </St.Container>
    </Modal>
  );
}
