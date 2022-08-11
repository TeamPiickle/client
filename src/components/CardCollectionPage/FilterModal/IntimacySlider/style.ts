/* eslint-disable indent */
import { getTrackBackground } from "react-range";
import styled from "styled-components";

interface RangeTrackProps {
  min: number;
  max: number;
  price: number[];
}

export const St = {
  IntimacySlider: styled.div`
    height: 2.2rem;

    margin: 1.2rem 0 0.2rem;
    padding: 0 1.5rem;
  `,

  RangeThumb: styled.div`
    position: absolute;
    top: 0;
    width: 1.8em;
    height: 1.8rem;
    border-radius: 2.4rem;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.25);

    cursor: pointer;
  `,

  RangeTrack: styled.div`
    position: relative;
    height: 0.8rem;
    width: 100%;
    border-radius: 0.4rem;
    background: ${(props: RangeTrackProps) =>
      getTrackBackground({
        values: props.price,
        colors: ["#19BE7E", "#ffffff"],
        min: props.min,
        max: props.max,
      })};

    box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
  `,
};
