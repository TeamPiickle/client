import { ImgBanner1, ImgBanner2, NewImgBanner1, NewImgBanner2, NewImgBanner3 } from "../../asset/image";
import {
  OriginImgBanner1,
  OriginImgBanner2,
  OriginImgNewBanner1,
  OriginImgNewBanner2,
  OriginImgNewBanner3,
} from "../../asset/image/origin";

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

export const newBannerImages: BannerImage[] = [
  {
    src: NewImgBanner1,
    alt: "가장 최근 북마크 된 핫한 대화주제",
    subSrc: OriginImgNewBanner1,
  },
  {
    src: NewImgBanner2,
    alt: "가장 최근 업데이트 된 새로운 대화주제",
    subSrc: OriginImgNewBanner2,
  },
  {
    src: NewImgBanner3,
    alt: "여러분만의 톡톡 튀는 대화주제를 얘기해주세요",
    subSrc: OriginImgNewBanner3,
  },
];
