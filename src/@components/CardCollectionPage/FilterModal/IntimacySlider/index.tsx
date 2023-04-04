import { Range } from "react-range";

import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useFilterTags from "../@hooks/useFilterTags";
import St from "./style";
interface IntimacySliderProps {
  price: number[];
}

const rangeOption = {
  min: 0,
  max: 3,
  step: 1,
};

export default function IntimacySlider(props: IntimacySliderProps) {
  const { price } = props;

  const { handleChangeIntimacyValue } = useFilterTags();

  return (
    <St.IntimacySlider>
      <Range
        step={rangeOption.step}
        min={rangeOption.min}
        max={rangeOption.max}
        values={price}
        onChange={handleChangeIntimacyValue}
        renderTrack={({ props, children }) => (
          <St.RangeTrack {...props} min={rangeOption.min} max={rangeOption.max} price={price}>
            {children}
            <St.FirstGTMOnRangeTrack className={GTM_CLASS_NAME.filter상관없음} />
            <St.SecondGTMOnRangeTrack className={GTM_CLASS_NAME.filter새로워요} />
            <St.ThirdGTMOnRangeTrack className={GTM_CLASS_NAME.filter친근해요} />
            <St.ForthGTMOnRangeTrack className={GTM_CLASS_NAME.filter절친해요} />
          </St.RangeTrack>
        )}
        renderThumb={({ props }) => <St.RangeThumb {...props} />}
      />
    </St.IntimacySlider>
  );
}
