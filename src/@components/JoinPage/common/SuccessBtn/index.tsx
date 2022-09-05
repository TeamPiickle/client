import { St } from "./style";

interface ButtonContentsProps {
  name: string;
}

export default function SuccessBtn({ name }: ButtonContentsProps) {
  return <St.SuccessButton>{name}</St.SuccessButton>;
}
