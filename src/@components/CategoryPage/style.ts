import styled from "styled-components";

const Root = styled.main`
  display: flex;
  flex-direction: column;
`;

const CategoryBanner = styled.section`
  height: 17.9rem;
  padding: 2rem 0 0 1.6rem;

  position: relative;
`;

const BgImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 17.9rem;

  object-fit: cover;

  z-index: -10;
`;

const BannerTitle = styled.h2`
  ${({ theme }) => theme.newFonts.graphic1};
  color: ${({ theme }) => theme.colors.darkblue};
`;

const BannerSubTitle = styled.p`
  ${({ theme }) => theme.newFonts.h2};
  color: ${({ theme }) => theme.colors.gray800};
`;

const GoBestPiickleBtn = styled.button`
  position: absolute;

  height: 1.5rem;
  right: 1.6rem;
  bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.newFonts.btn2};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnTitle = styled.p`
  margin-right: 0.8rem;
`;

const St = {
  Root,
  CategoryBanner,
  BgImg,
  BannerTitle,
  BannerSubTitle,
  GoBestPiickleBtn,
  BtnTitle,
};
export default St;
