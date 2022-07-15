import { St } from "../style";

interface MyPiickleItemProps {
  cardId: string;
  content: string;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { cardId, content } = props;

  return (
    <St.MyPiickle>
      <St.MyPiickleContent>{content}</St.MyPiickleContent>
    </St.MyPiickle>
  );
}
