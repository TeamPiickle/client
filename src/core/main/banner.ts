import { ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner4 } from "../../asset/image";

type BannerImage = {
  src: string;
  alt: string;
};

export const bannerImage: BannerImage[] = [
  {
    src: ImgBanner1,
    alt: "지금 내게 필요한 대화주제 추천 서비스 피클 시작하기",
  },
  {
    src: ImgBanner2,
    alt: "헬로우 피클 피플",
  },
  {
    src: ImgBanner3,
    alt: "무드 피클",
  },
  {
    src: ImgBanner4,
    alt: "렛츠 피클",
  },
];
