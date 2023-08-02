import styled from "styled-components";

import { ImgTopicLinkBanner } from "../../../asset/image";
import { OriginImgTopicLinkBanner } from "../../../asset/image/origin";

export const TopicLinkContainer = styled.section`
  position: relative;
  display: flex;

  height: 13.4rem;
  margin: 0 0.8rem 0.8rem;
  border-radius: 0.8rem;

  background-image: url(${ImgTopicLinkBanner});
  background-image: image-set(${ImgTopicLinkBanner} type("image/webp"), ${OriginImgTopicLinkBanner} type("image/png"));
  background-size: cover;
`;

export const TopicTitles = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  width: 100%;
  margin: 0 1.2rem 1rem;

  z-index: 2;
`;

export const Text = styled.h1`
  ${({ theme }) => theme.newFonts.body3}
  color: ${({ theme }) => theme.newColors.darkblue}
`;

export const Link = styled.a`
  ${({ theme }) => theme.newFonts.btn2}
  color: ${({ theme }) => theme.newColors.gray900};
  text-decoration-line: underline;
`;

export const Gradient = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;

  background: linear-gradient(0, #ccd3d3 0%, rgba(204, 211, 211, 0) 100%);
  z-index: 1;
`;
