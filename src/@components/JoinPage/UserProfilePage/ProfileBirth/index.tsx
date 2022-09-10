import { useState } from "react";
import DatePicker from "react-mobile-datepicker";

import { IcDownArrow } from "../../../../asset/icon";
import { St } from "./style";

interface birthTypes {
  isbirth: string;
  setIsbirth: (birthDay: string) => void;
}

export default function ProfileBirth(props: birthTypes) {
  const { isbirth, setIsbirth } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  const dateFormat = (defaultTime: typeof time) => {
    const year = defaultTime.getFullYear();
    const month = defaultTime.getMonth() + 1;
    const day = defaultTime.getDate();
    const monthResult = month < 10 ? "0" + month : month;
    const dayResult = day < 10 ? "0" + day : day;

    if (year === time.getFullYear()) {
      if (monthResult >= time.getMonth() + 1) {
        if (day >= time.getDate()) {
          return "null";
        }
      }
    } else if (year > time.getFullYear()) {
      return "null";
    }
    return year + "년 " + monthResult + "월 " + dayResult + "일 ";
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelect = (nextTime: typeof time) => {
    const getTime = dateFormat(nextTime);
    setIsbirth(getTime);
    setIsOpen(false);
  };

  return (
    <St.ProfileBirth>
      <St.InputContainer onClick={handleClick}>
        <St.BirthInputForm type="text" placeholder="생년월일을 선택해주세요" value={isbirth} readOnly />
        <St.Down>
          <IcDownArrow />
        </St.Down>
      </St.InputContainer>
      {isOpen && (
        <St.PickerContainer>
          <DatePicker
            value={time}
            isOpen={isOpen}
            onSelect={handleSelect}
            onCancel={handleCancel}
            isPopup={false}
            showHeader={false}
            dateFormat={["YYYY", "MM", "DD"]}
            theme="ios"
            confirmText="OK"
            cancelText="Cancle"
          />
        </St.PickerContainer>
      )}
    </St.ProfileBirth>
  );
}
