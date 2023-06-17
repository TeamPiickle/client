import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";

export type NavigateCardCollectionAllType = (sliderIdx?: number) => void;
export type NavigateCardCollectionBestType = (sliderIdx?: number) => void;
export type NavigateCardCollectionBookMarkType = (sliderIdx?: number) => void;
export type NavigateCardCollectionCategoryType = (categoryId: string, sliderIdx?: number) => void;
export type NavigateCardCollectionFilterType = (filterTypes: string[], sliderIdx?: number) => void;
export type NavigateCardCollectionMedleyType = (medleyId: string, sliderIdx?: number) => void;

export default function useNavigateCardCollection(locationType: LocationType) {
  const navigate = useNavigate();
  const setSliderIdx = useSetRecoilState(sliderIdxState);

  switch (locationType) {
    case LocationType.ALL:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.ALL}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.BEST:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.BEST}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.BOOKMARK:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.BOOKMARK}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.CATEGORY:
      return (categoryId: string, sliderIdx = 0) => {
        navigate(routePaths.CardCollection, { state: { type: LocationType.CATEGORY, categoryId } });
        setSliderIdx(sliderIdx);
      };

    case LocationType.FILTER:
      return (filterTypes: string[], sliderIdx = 0) => {
        navigate(routePaths.CardCollection, {
          state: { type: LocationType.FILTER, filterTypes },
        });
        setSliderIdx(sliderIdx);
      };

    case LocationType.MEDLEY:
      return (medleyId: string, sliderIdx = 0) => {
        navigate(routePaths.CardCollection, { state: { type: LocationType.MEDLEY, medleyId } });
        setSliderIdx(sliderIdx);
      };
  }
}
