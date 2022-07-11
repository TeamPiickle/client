import Slider from "react-slick";
import styled from "styled-components";

export const St = {
  Root: styled.section``,
  HeaderWrapper: styled.header``,
  Title: styled.h2``,
  Desc: styled.p``,
  SliderWrapper: styled.div`
    width: 36rem;
    padding-left: 1.6rem;

    .slick-list {
      height: 15.3rem;
    }
  `,
  Slider: styled(Slider)`
    display: flex;
    gap: 0.8rem;
  `,
};
