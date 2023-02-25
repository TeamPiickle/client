import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export default function ModalPortal(props: PropsWithChildren) {
  const { children } = props;
  const el = document.getElementById("modal") as HTMLElement;

  return ReactDOM.createPortal(children, el);
}
