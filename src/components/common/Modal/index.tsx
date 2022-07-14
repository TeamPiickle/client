import { IcCloseBtn } from "../../../asset/icon";
import { St } from "./style";

type ModalContents = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalContents) {
  return (
    <St.Root>
      <St.Modal>
        <St.CloseBtn type="button">
          <IcCloseBtn aria-label="필터 모달 닫기" />
        </St.CloseBtn>
        <St.ModalContents>{children}</St.ModalContents>
      </St.Modal>
    </St.Root>
  );
}
