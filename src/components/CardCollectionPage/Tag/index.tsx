import React from "react";

import { St } from "./style";

interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return <St.Tag>{children}</St.Tag>;
}
