import { IcDownArrow } from "../../../../asset/icon";
import { St } from "./style";

export default function ProfileImage() {
  return (
    <St.ProfileBirth>
      <St.InputContainer>
        <St.YearInputForm id="year" />
        <St.Down>
          <IcDownArrow />
        </St.Down>
        <St.Text>년</St.Text>
        <St.MonthInputForm id="month" />
        <St.Down>
          <IcDownArrow />
        </St.Down>
        <St.Text>월</St.Text>
        <St.DateInputForm id="date" />
        <St.Down>
          <IcDownArrow />
        </St.Down>
        <St.Text>일</St.Text>
      </St.InputContainer>
    </St.ProfileBirth>
  );
}
