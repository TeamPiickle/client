import { useState } from "react";

import { IcSmallEmptyHeart, IcSmallFullHeart } from "../../../asset/icon";
import { myPiickle } from "..";
import { St } from "./style";

interface MyPiickleItemProps {
  myPiickle: myPiickle;
}

export default function MyPiickleItem(props: MyPiickleItemProps) {
  const { myPiickle } = props;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  return (
    <St.MyPiickle>
      <St.MyPiickleContent>{myPiickle.content}</St.MyPiickleContent>
      <St.HeartWrapper onClick={() => setIsBookmarked((prev) => !prev)}>
        <IcSmallEmptyHeart />
        {isBookmarked && <IcSmallFullHeart />}
      </St.HeartWrapper>
    </St.MyPiickle>
  );
}
