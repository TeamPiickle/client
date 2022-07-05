import { St } from "./style";

export interface ExampleInputProps {
  name?: string;
}

export default function ExampleInput(props: ExampleInputProps) {
  const { name } = props;

  return <St.Input type="text" value={name} />;
}
