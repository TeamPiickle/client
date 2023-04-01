import { PropsWithChildren } from "react";

import useOutClickCloser from "../hooks/useOutClickCloser";
import ModalCloseBtn from "./ModalCloseBtn";
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
  const outClickCloserRef = useOutClickCloser(closeHandler);

  if (theme === "GRAY")
    return (
      <ModalPortal>
        <St.GrayRoot className={closeOpacityClassName}>
          <St.GrayModal ref={outClickCloserRef}>
            <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
              <ModalCloseBtn closeBtnClassName={closeBtnClassName} />
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
              <ModalCloseBtn closeBtnClassName={closeBtnClassName} />
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
            <ModalCloseBtn closeBtnClassName={closeBtnClassName} />
          </St.CloseBtn>
          <St.ModalContents>{children}</St.ModalContents>
        </St.DefaultModal>
      </St.DefaultRoot>
    </ModalPortal>
  );
}
