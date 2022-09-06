import React, { useState } from "react";

import { IcDownArrow } from "../../../../asset/icon";
import { St } from "./style";

export default function ProfileJender() {
  const [isSelected, setIsSelected] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(e.target.value);
  };

  return (
    <St.ProfileJender>
      <St.GenderInputForm onChange={handleSelect} value={isSelected}>
        <St.Option value="" disabled selected hidden>
          성별을 선택해주세요
        </St.Option>
        <St.Option value="man">남자</St.Option>
        <St.Option value="woman">여자</St.Option>
      </St.GenderInputForm>
      <St.Down isOpened={isOpened} onClick={() => setIsOpened((prev) => !prev)}>
        <IcDownArrow />
      </St.Down>
    </St.ProfileJender>
  );
}
