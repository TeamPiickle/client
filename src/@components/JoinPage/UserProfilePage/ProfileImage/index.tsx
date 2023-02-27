import { useState } from "react";

import { IcAddProfileBtn } from "../../../../asset/icon";
import { ImgDefaultBigProfile } from "../../../../asset/image";
import compressImage from "../../../../util/imageCompressor";
import { St } from "./style";

interface ProfileImageProps {
  setProfileImage: (file: File) => void;
}

const MAX_IMAGE_SIZE = 80 * 2;

export default function ProfileImage(props: ProfileImageProps) {
  const { setProfileImage } = props;
  const [previewImgUrl, setPreviewImgUrl] = useState("");

  const handleImagePatch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const selectedImg = e.target.files[0];
    const compressedSelectedImg = await compressImage(selectedImg, {
      maxWidth: MAX_IMAGE_SIZE,
      maxHeight: MAX_IMAGE_SIZE,
    });

    setProfileImage(compressedSelectedImg);
    setPreviewImgUrl(URL.createObjectURL(compressedSelectedImg));
  };

  return (
    <St.ProfileImage>
      <St.ImageContainer>
        <St.ImageWrapper>
          <St.AddImage src={previewImgUrl === "" ? ImgDefaultBigProfile : previewImgUrl} alt="프로필" />
        </St.ImageWrapper>
        <St.AddBtnWrapper>
          <IcAddProfileBtn />
          <St.AddButton type="file" onChange={handleImagePatch} accept="image/*" />
        </St.AddBtnWrapper>
      </St.ImageContainer>
    </St.ProfileImage>
  );
}
