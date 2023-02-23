import { getTrackBackground } from "react-range";
import styled, { css } from "styled-components";

interface RangeTrackProps {
  min: number;
  max: number;
  price: number[];
}

interface RangeThumbAriaProps {
  "aria-valuemax": number;
  "aria-valuemin": number;
  "aria-valuenow": number;
}

const IntimacySlider = styled.div`
  height: 2rem;

  margin: 1.2rem 0 0.2rem;
`;

const RangeThumb = styled.div<RangeThumbAriaProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  box-shadow: 0rem 0.1rem 0.4rem rgba(0, 0, 0, 0.25), 0rem -0.1rem 0.2rem rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.newColors.white};

  cursor: pointer;

  ${(ariaProps) =>
    ariaProps["aria-valuenow"] === ariaProps["aria-valuemin"] &&
    css`
      left: 1rem;
    `}
  ${(ariaProps) =>
    ariaProps["aria-valuenow"] === 1 &&
    css`
      left: 0.7rem;
    `}
  ${(ariaProps) =>
    ariaProps["aria-valuenow"] === 2 &&
    css`
      left: -0.7rem;
    `}
  ${(ariaProps) =>
    ariaProps["aria-valuenow"] === ariaProps["aria-valuemax"] &&
    css`
      left: -1rem;
    `}
`;

const RangeTrack = styled.div`
  position: relative;

  height: 1.1rem;

  background: ${(props: RangeTrackProps) =>
    getTrackBackground({
      values: props.price,
      colors: ["#19BE7E", "#E0E0E0"], // [newColors.green, newColors.gray300]
      min: props.min,
      max: props.max,
    })};
`;

const St = {
  IntimacySlider,
  RangeThumb,
  RangeTrack,
};
export default St;
