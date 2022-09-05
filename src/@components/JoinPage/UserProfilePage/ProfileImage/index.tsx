import { IcAddProfileBtn } from "../../../../asset/icon";
import { ImgDefaultBigProfile } from "../../../../asset/image";
import { St } from "./style";

export default function ProfileImage() {
  return (
    <St.ProfileImage>
      <St.Image>
        <St.AddImage src={ImgDefaultBigProfile} alt="프로필" />
        <St.AddBtnWrapper>
          <IcAddProfileBtn />
          <St.AddButton />
        </St.AddBtnWrapper>
      </St.Image>
    </St.ProfileImage>
  );
}
