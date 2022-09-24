import { ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner4, ImgBanner5, ImgBanner6 } from "../../asset/image";

type BannerImage = {
  src: string;
  alt: string;
};

export const bannerImage: BannerImage[] = [
  {
    src: ImgBanner1,
    alt: "헬로우 피클 피플",
  },
  {
    src: ImgBanner2,
    alt: "렛츠 피클",
  },
  {
    src: ImgBanner3,
    alt: "지금 내게 필요한 대화주제 추천 서비스 피클 시작하기",
  },
  {
    src: ImgBanner4,
    alt: "무드 피클",
  },
  {
    src: ImgBanner5,
    alt: "피클피클피클",
  },
  {
    src: ImgBanner6,
    alt: "회원가입을 하면 더 즐겁게 피클을 이용할 수 있어요",
  },
];
