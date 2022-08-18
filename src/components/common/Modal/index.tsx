import { PropsWithChildren } from "react";

import { IcModalCloseBtn } from "../../../asset/icon";
import { St } from "./style";

interface ModalContents {
  closeHandler: () => void;
}

export default function Modal({ closeHandler, children }: PropsWithChildren<ModalContents>) {
  return (
    <St.Root>
      <St.Modal>
        <St.CloseBtn type="button" onClick={closeHandler}>
          <IcModalCloseBtn aria-label="필터 모달 닫기" />
        </St.CloseBtn>
        <St.ModalContents>{children}</St.ModalContents>
      </St.Modal>
    </St.Root>
  );
}
