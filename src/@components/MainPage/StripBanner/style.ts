import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgEventStripBanner, ImgStripBanner } from "../../../asset/image";
import { OriginImgEventStripBanner, OriginImgStripBanner } from "../../../asset/image/origin";

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

export const Content = styled.p<{ islogin?: boolean }>`
  margin-bottom: 0.2rem;

  ${({ theme }) => theme.newFonts.footer1}
  color: ${({ theme, islogin }) => (islogin ? theme.newColors.white : theme.newColors.purple)}
`;

export const SubContent = styled.p<{ islogin?: boolean }>`
  ${({ theme }) => theme.newFonts.caption2}
  color: ${({ theme, islogin }) => (islogin ? theme.newColors.white : theme.newColors.gray700)}
`;

export const EventContainer = styled(Link)`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 4rem;

  background-image: url(${ImgEventStripBanner});
  background-image: image-set(
    ${ImgEventStripBanner} type("image/webp"),
    ${OriginImgEventStripBanner} type("image/png")
  );
  background-size: 100% 100%;
`;

export const EventContentWrapper = styled(ContentWrapper)`
  padding: 0 0 0.8rem 8rem;
  margin: auto;
`;
