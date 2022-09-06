import { IcDownArrow } from "../../../../asset/icon";
import { St } from "./style";

export default function ProfileJender() {
  return (
    <St.ProfileJender>
      <St.InputContainer>
        <St.GenderInputForm id="gender" placeholder="성별을 체크해주세요" />
        <St.Down>
          <IcDownArrow />
        </St.Down>
      </St.InputContainer>
    </St.ProfileJender>
  );
}
