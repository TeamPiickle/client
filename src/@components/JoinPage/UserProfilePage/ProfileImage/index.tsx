import { useState } from "react";

import { IcAddProfileBtn } from "../../../../asset/icon";
import { ImgDefaultBigProfile } from "../../../../asset/image";
import { St } from "./style";

interface ProfileImageProps {
  setImage: (file: FormData) => void;
}

export default function ProfileImage(props: ProfileImageProps) {
  const { setImage } = props;
  const [imgUrl, setImgUrl] = useState<string>("");

  const handleImagePatch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    setImgUrl(URL.createObjectURL(selectedImg));

    const formData = new FormData();
    formData.append("file", selectedImg);
    setImage(formData);
  };

  return (
    <St.ProfileImage>
      <St.ImageContainer>
        <St.ImageWrapper>
          <St.AddImage src={imgUrl ? imgUrl : ImgDefaultBigProfile} alt="프로필" />
        </St.ImageWrapper>
        <St.AddBtnWrapper>
          <IcAddProfileBtn />
          <St.AddButton type="file" onChange={handleImagePatch} accept="image/*" />
        </St.AddBtnWrapper>
      </St.ImageContainer>
    </St.ProfileImage>
  );
}
