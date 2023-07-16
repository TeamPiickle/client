import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgStripBanner } from "../../../asset/image";
import { OriginImgStripBanner } from "../../../asset/image/origin";

export const Container = styled(Link)`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.8rem 1.5rem;
  margin-top: 4rem;

  background-image: url(${ImgStripBanner});
  background-image: image-set(${ImgStripBanner} type("image/webp"), ${OriginImgStripBanner} type("image/png"));
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  text-align: left;
`;

export const Content = styled.p`
  margin-bottom: 0.2rem;

  ${({ theme }) => theme.newFonts.footer1}
  color: ${({ theme }) => theme.newColors.purple};
`;

export const SubContent = styled.p`
  ${({ theme }) => theme.newFonts.caption2}
  color: ${({ theme }) => theme.newColors.gray700};
`;
