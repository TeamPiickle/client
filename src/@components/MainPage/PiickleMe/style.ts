import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgVoteBanner } from "../../../asset/image";
import { OriginImgVoteBanner } from "../../../asset/image/origin";

const Container = styled.section``;

const VoteBanner = styled(Link)``;

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 11.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${ImgVoteBanner});
  background-image: image-set(${ImgVoteBanner} type("image/webp"), ${OriginImgVoteBanner} type("image/png"));
`;

const BannerContentWrapper = styled.div`
  margin-bottom: 2.3rem;

  width: 13.9rem;
  text-align: center;

  background-color: ${({ theme }) => theme.newColors.lightgreen1};
`;

const MainContentText = styled.div`
  position: absolute;

  margin-top: 2.3rem;

  ${({ theme }) => theme.newFonts.body3};
  color: ${({ theme }) => theme.colors.gray900};
`;

const MainContentSubText = styled.p`
  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.colors.gray900};
`;

const BannerVoteBtn = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.newFonts.btn2}
`;

const ContentWrapper = styled(Link)`
  height: 8rem;

  padding: 0 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    border-top: 0.1rem solid ${({ theme }) => theme.newColors.gray300};
  }
`;

const ContentText = styled.p`
  width: 28rem; // MEMO :: 말줄임표를 위한 값

  ${({ theme }) => theme.newFonts.body4}
  color: ${({ theme }) => theme.newColors.gray900};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const VoteBtn = styled.div`
  width: 4.9rem;
  height: 1.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.newColors.gray100};
  background-color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  Container,
  VoteBanner,
  BannerContainer,
  BannerContentWrapper,
  MainContentText,
  MainContentSubText,
  BannerVoteBtn,
  ContentWrapper,
  ContentText,
  VoteBtn,
};
export default St;
