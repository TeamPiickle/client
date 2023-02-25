import { PropsWithChildren } from "react";

import { IcModalCloseBtn } from "../../../asset/icon";
import ModalPortal from "./Portal";
import St from "./style";

type ModalTheme = "DEFAULT" | "WHITE";

interface ModalContents {
  theme?: ModalTheme;
  closeHandler: () => void;
  closeBtnClassName?: string;
}

export default function Modal(props: PropsWithChildren<ModalContents>) {
  const { theme = "DEFAULT", closeHandler, closeBtnClassName, children } = props;

  if (theme === "WHITE")
    return (
      <ModalPortal>
        <St.WhiteRoot>
          <St.WhiteModal>
            <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
              <IcModalCloseBtn />
            </St.CloseBtn>
            <St.ModalContents>{children}</St.ModalContents>
          </St.WhiteModal>
        </St.WhiteRoot>
      </ModalPortal>
    );

  return (
    <ModalPortal>
      <St.DefaultRoot>
        <St.DefaultModal>
          <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
            <IcModalCloseBtn />
          </St.CloseBtn>
          <St.ModalContents>{children}</St.ModalContents>
        </St.DefaultModal>
      </St.DefaultRoot>
    </ModalPortal>
  );
}
