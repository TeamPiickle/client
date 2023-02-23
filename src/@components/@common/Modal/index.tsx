import { PropsWithChildren } from "react";

import { IcModalCloseBtn } from "../../../asset/icon";
import St from "./style";

interface ModalContents {
  closeHandler: () => void;
  closeBtnClassName?: string;
}

export default function Modal({ closeHandler, closeBtnClassName, children }: PropsWithChildren<ModalContents>) {
  return (
    <St.Root>
      <St.Modal>
        <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
          <IcModalCloseBtn />
        </St.CloseBtn>
        <St.ModalContents>{children}</St.ModalContents>
      </St.Modal>
    </St.Root>
  );
}
