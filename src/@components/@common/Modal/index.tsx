import { PropsWithChildren } from "react";

import IcModalCloseBtn from "../../../asset/icon/IcModalCloseBtn";
import useOutClickCloser from "../hooks/useOutClickCloser";
import ModalPortal from "./Portal";
import * as St from "./style";

type ModalTheme = "DEFAULT" | "WHITE_BOTTOM" | "GRAY_CENTER" | "GRAY_BOTTOM";

interface ModalContents {
  theme?: ModalTheme;
  closeHandler: () => void;
  closeOpacityClassName?: string;
  closeBtnClassName?: string;
  isNoCloseBtn?: boolean;
}

export default function Modal(props: PropsWithChildren<ModalContents>) {
  const { theme = "DEFAULT", closeHandler, closeOpacityClassName, closeBtnClassName, isNoCloseBtn, children } = props;
  const outClickCloserRef = useOutClickCloser(closeHandler, true);

  if (theme === "GRAY_CENTER")
    return (
      <ModalPortal>
        <St.GrayRoot>
          <St.GrayCenterModal ref={outClickCloserRef}>
            <St.CloseBtn type="button" onClick={closeHandler}>
              <IcModalCloseBtn />
            </St.CloseBtn>
            <St.ModalContents>{children}</St.ModalContents>
          </St.GrayCenterModal>
        </St.GrayRoot>
      </ModalPortal>
    );

  if (theme === "GRAY_BOTTOM")
    return (
      <ModalPortal>
        <St.GrayRoot className={closeOpacityClassName}>
          <St.GrayModal ref={outClickCloserRef}>
            {isNoCloseBtn || (
              <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
                <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
              </St.CloseBtn>
            )}
            <St.ModalContents>{children}</St.ModalContents>
          </St.GrayModal>
        </St.GrayRoot>
      </ModalPortal>
    );

  if (theme === "WHITE_BOTTOM")
    return (
      <ModalPortal>
        <St.WhiteRoot>
          <St.WhiteModal ref={outClickCloserRef}>
            {isNoCloseBtn || (
              <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
                <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
              </St.CloseBtn>
            )}
            <St.ModalContents>{children}</St.ModalContents>
          </St.WhiteModal>
        </St.WhiteRoot>
      </ModalPortal>
    );

  return (
    <ModalPortal>
      <St.DefaultRoot>
        <St.DefaultModal ref={outClickCloserRef}>
          {isNoCloseBtn || (
            <St.CloseBtn type="button" className={closeBtnClassName} onClick={closeHandler}>
              <IcModalCloseBtn closeBtnClassName={closeBtnClassName} />
            </St.CloseBtn>
          )}
          <St.ModalContents>{children}</St.ModalContents>
        </St.DefaultModal>
      </St.DefaultRoot>
    </ModalPortal>
  );
}
