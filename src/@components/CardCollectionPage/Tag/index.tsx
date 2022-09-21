import React, { PropsWithChildren } from "react";

import { St } from "./style";

export default function Tag({ children }: PropsWithChildren<unknown>) {
  return <St.Tag className="GTM_Tag">{children}</St.Tag>;
}
