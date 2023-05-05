import { PropsWithChildren } from "react";

import * as St from "./style";

type HeadlessCTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const HeadlessCTAButton = (props: PropsWithChildren<HeadlessCTAButtonProps>) => {
  const { children, ...buttonProps } = props;

  return (
    <St.CTAButtonWrapper>
      <St.CTAButton {...buttonProps}>{children}</St.CTAButton>
    </St.CTAButtonWrapper>
  );
};

export default HeadlessCTAButton;
