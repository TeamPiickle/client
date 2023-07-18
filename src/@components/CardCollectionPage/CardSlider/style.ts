import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  height: 100%;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    height: calc((100% + 3.3rem) * 0.77);
  }

  & .swiper-slide:last-child {
    height: calc((100% + 3.3rem) * 0.23);
  }
`;

export const Footer = styled.footer`
  margin-top: 2.4rem;
  text-align: center;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Text = styled.p`
  margin-bottom: 0.8rem;
`;

export const feedBackLink = styled(Link)`
  text-decoration-line: underline;
`;
