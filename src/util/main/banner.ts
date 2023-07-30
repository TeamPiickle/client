import { NewImgBanner1, NewImgBanner2, NewImgBanner3 } from "../../asset/image";
import { OriginImgNewBanner1, OriginImgNewBanner2, OriginImgNewBanner3 } from "../../asset/image/origin";
import { CardList } from "../../types/cardCollection";

export type BannerImage = {
  src: string;
  alt: string;
  subSrc: string;
};

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

export interface newBannerType {
  bannerImage: BannerImage;
  phrase: string;
  topic: string;
  date?: string;
  cards?: CardList[];
  linkTo: string;
  isLightMode: boolean;
  isLast?: boolean;
}
