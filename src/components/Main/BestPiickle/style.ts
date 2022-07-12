import Slider from "react-slick";
import styled from "styled-components";

export const St = {
  Root: styled.section``,

  HeaderWrapper: styled.header``,

  Title: styled.h2``,

  Desc: styled.p``,

  SliderWrapper: styled.div`
    padding-left: 1.6rem;
    width: 36rem;

    .slick-list {
      height: 15.3rem;
    }
  `,

  Slider: styled(Slider)`
    display: flex;
    gap: 0.8rem;
  `,
};
