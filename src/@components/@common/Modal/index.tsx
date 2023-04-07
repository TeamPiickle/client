import { PropsWithChildren } from "react";

import IcModalCloseBtn from "../../../asset/icon/IcModalCloseBtn";
import useOutClickCloser from "../hooks/useOutClickCloser";
import ModalPortal from "./Portal";
import St from "./style";

type ModalTheme = "DEFAULT" | "WHITE" | "GRAY";

interface ModalContents {
  theme?: ModalTheme;
  closeHandler: () => void;
  closeOpacityClassName?: string;
  closeBtnClassName?: string;
}

export default function Modal(props: PropsWithChildren<ModalContents>) {
  const { theme = "DEFAULT", closeHandler, closeOpacityClassName, closeBtnClassName, children } = props;
  const outClickCloserRef = useOutClickCloser(closeHandler, true);

  if (theme === "GRAY")
    return (
      <ModalPortal>
        <St.GrayRoot className={closeOpacityClassName}>
          <St.GrayModal ref={outClickCloserRef}>
            <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
              <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
            </St.CloseBtn>
            <St.ModalContents>{children}</St.ModalContents>
          </St.GrayModal>
        </St.GrayRoot>
      </ModalPortal>
    );

  if (theme === "WHITE")
    return (
      <ModalPortal>
        <St.WhiteRoot>
          <St.WhiteModal ref={outClickCloserRef}>
            <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
              <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
            </St.CloseBtn>
            <St.ModalContents>{children}</St.ModalContents>
          </St.WhiteModal>
        </St.WhiteRoot>
      </ModalPortal>
    );

  return (
    <ModalPortal>
      <St.DefaultRoot>
        <St.DefaultModal ref={outClickCloserRef}>
          <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
            <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
          </St.CloseBtn>
          <St.ModalContents>{children}</St.ModalContents>
        </St.DefaultModal>
      </St.DefaultRoot>
    </ModalPortal>
  );
}
