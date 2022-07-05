import { St } from "./style";

export interface ExampleButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function ExampleButton(props: ExampleButtonProps) {
  const { size, ...buttonProps } = props;

  return <St.Button {...buttonProps}>ExampleButton</St.Button>;
}
