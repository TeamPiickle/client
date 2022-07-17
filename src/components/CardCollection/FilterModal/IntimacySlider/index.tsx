// import { Range } from "react-range";

import { RangeTrack, St } from "./style";

interface IntimacySliderProps {
  min: number;
  max: number;
  step: number;

  price: number[];
  onChange: (values: number[]) => void;
}

export default function IntimacySlider(props: IntimacySliderProps) {
  const { min, max, step, price, onChange } = props;

  return (
    <St.IntimacySlider>
      {/* <Range
        step={step}
        min={min}
        max={max}
        values={price}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <RangeTrack {...props} min={min} max={max} price={price}>
            {children}
          </RangeTrack>
        )}
        renderThumb={({ props }) => <St.RangeThumb {...props} />}
      /> */}
    </St.IntimacySlider>
  );
}
