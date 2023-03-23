import styled from "styled-components";

import { ImgMedleyBanner } from "../../../asset/image";
import { OriginImgMedleyBanner } from "../../../asset/image/origin";

const Container = styled.section`
  height: 39.8rem;

  margin-top: 2.4rem;
  padding-top: 4rem;

  background-image: url(${ImgMedleyBanner});
  background-image: image-set(${ImgMedleyBanner} type("image/webp"), ${OriginImgMedleyBanner} type("image/png"));
  background-size: cover;
`;

const TitleTag = styled.p`
  width: 17rem;

  padding: 0rem 0.4rem;
  margin: 0.8rem 0 0 1.6rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray900};
  background-color: ${({ theme }) => theme.newColors.green};
`;

const Title = styled.h1`
  margin-left: 1.6rem;

  ${({ theme }) => theme.newFonts.body1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const SubTitle = styled.p`
  height: 6.6rem;

  padding: 2.4rem 0;
  margin-left: 1.6rem;

  ${({ theme }) => theme.newFonts.h2}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const Medley = styled.article`
  display: flex;
  overflow-x: scroll;

  padding-left: 1.6rem;
  & > button:not(:last-child) > div {
    margin-right: 0.8rem;
  }
  & > button:last-child > div {
    margin-right: 1.6rem;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const St = {
  Container,
  TitleTag,
  Title,
  SubTitle,
  Medley,
};
export default St;
