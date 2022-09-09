import { IcAddProfileBtn } from "../../../../asset/icon";
import { ImgDefaultBigProfile } from "../../../../asset/image";
import { St } from "./style";

export default function ProfileImage() {
  return (
    <St.ProfileImage>
      <St.AddImage src={ImgDefaultBigProfile} alt="프로필" />
      <St.AddBtnWrapper>
        <IcAddProfileBtn />
        <St.AddButton type="file" accept="image/*" />
      </St.AddBtnWrapper>
    </St.ProfileImage>
  );
}
