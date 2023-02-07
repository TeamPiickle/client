import React, { PropsWithChildren } from "react";

import { St } from "./style";

export default function Tag({ children }: PropsWithChildren<unknown>) {
  return <St.Tag>{children}</St.Tag>;
}
