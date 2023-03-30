import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgStripBanner } from "../../../asset/image";
import { OriginImgStripBanner } from "../../../asset/image/origin";

const Container = styled(Link)`
  width: 100%;
  height: 8rem;

  display: block;

  padding: 2.2rem 1.6rem;
  margin-top: 2.4rem;

  text-align: left;

  background-image: url(${ImgStripBanner});
  background-image: image-set(${ImgStripBanner} type("image/webp"), ${OriginImgStripBanner} type("image/png"));
  background-size: cover;
`;

const Content = styled.p`
  margin-bottom: 0.2rem;

  ${({ theme }) => theme.newFonts.footer1}
  color: ${({ theme }) => theme.newColors.green};
`;

const SubContent = styled.p`
  ${({ theme }) => theme.newFonts.caption2}
  color: ${({ theme }) => theme.newColors.white};
`;

const St = {
  Container,
  Content,
  SubContent,
};
export default St;
