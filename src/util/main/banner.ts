import { ImgBanner1, ImgBanner2, ImgBanner3 } from "../../asset/image";
import { OriginImgBanner1, OriginImgBanner2, OriginImgBanner3 } from "../../asset/image/origin";

type BannerImage = {
  src: string;
  alt: string;
  subSrc: string;
};

export const bannerImage: BannerImage[] = [
  {
    src: ImgBanner1,
    alt: "지금 내게 필요한 대화주제 추천 서비스 피클 시작하기",
    subSrc: OriginImgBanner1,
  },
  {
    src: ImgBanner2,
    alt: "피클피클피클",
    subSrc: OriginImgBanner2,
  },
];
