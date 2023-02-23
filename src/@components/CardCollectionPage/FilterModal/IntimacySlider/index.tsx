import { Range } from "react-range";

import St from "./style";
interface IntimacySliderProps {
  price: number[];
  onChange: (values: number[]) => void;
}

const rangeOption = {
  min: 0,
  max: 3,
  step: 1,
};

export default function IntimacySlider(props: IntimacySliderProps) {
  const { price, onChange } = props;

  return (
    <St.IntimacySlider>
      <Range
        step={rangeOption.step}
        min={rangeOption.min}
        max={rangeOption.max}
        values={price}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <St.RangeTrack {...props} min={rangeOption.min} max={rangeOption.max} price={price}>
            {children}
          </St.RangeTrack>
        )}
        renderThumb={({ props }) => <St.RangeThumb {...props} />}
      />
    </St.IntimacySlider>
  );
}
