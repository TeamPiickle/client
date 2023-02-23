import { getTrackBackground } from "react-range";
import styled from "styled-components";

interface RangeTrackProps {
  min: number;
  max: number;
  price: number[];
}

const IntimacySlider = styled.div`
  height: 2rem;

  margin: 1.2rem 0 0.2rem;
`;

const RangeThumb = styled.div`
  position: absolute;
  top: 0;

  width: 2em;
  height: 2rem;

  border-radius: 50%;
  box-shadow: 0rem 0.1rem 0.4rem rgba(0, 0, 0, 0.25), 0rem -0.1rem 0.2rem rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.newColors.white};

  cursor: pointer;
`;

const RangeTrack = styled.div`
  position: relative;

  height: 1.1rem;

  background: ${(props: RangeTrackProps) =>
    getTrackBackground({
      values: props.price,
      colors: ["#19BE7E", "#ffffff"], // [newColors.green, newColors.white]
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
