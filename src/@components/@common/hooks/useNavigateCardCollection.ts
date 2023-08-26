import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sliderIdxState } from "../../../core/atom/slider";
import { routePaths } from "../../../core/routes/path";
import { LocationType } from "../../../types/cardCollection";

export type NavigateCardCollectionAllType = (sliderIdx?: number) => void;
export type NavigateCardCollectionBestType = (sliderIdx?: number) => void;
export type NavigateCardCollectionBookMarkType = (sliderIdx?: number) => void;
export type NavigateCardCollectionRecentType = (sliderIdx?: number) => void;
export type NavigateCardCollectionUpdateType = (sliderIdx?: number) => void;
export type NavigateCardCollectionCategoryType = (categoryId: string, sliderIdx?: number) => void;
export type NavigateCardCollectionFilterType = (filterTypes: string[], sliderIdx?: number) => void;
export type NavigateCardCollectionMedleyType = (medleyId: string, sliderIdx?: number) => void;
export type NavigateRecentCollectionType = (sliderIdx?: number) => void;
export type NavigateFemaleCollectionType = (sliderIdx?: number) => void;
export type NavigateMaleCollectionType = (sliderIdx?: number) => void;
export type NavigateCardCollectionShareType = (
  cardId: string,
  sliderIdx?: number,
) => { navigate: () => void; url: string };

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
        navigate(`${routePaths.CardCollection}?type=${LocationType.CATEGORY}&categoryId=${categoryId}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.FILTER:
      return (filterTypes: string[], sliderIdx = 0) => {
        navigate(
          `${routePaths.CardCollection}?type=${LocationType.FILTER}&filterTypes=${parseFilterTypesToString(
            filterTypes,
          )}`,
        );
        setSliderIdx(sliderIdx);
      };

    case LocationType.MEDLEY:
      return (medleyId: string, sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.MEDLEY}&medleyId=${medleyId}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.RECENT:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.RECENT}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.UPDATE:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.UPDATE}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.FEMALE:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.FEMALE}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.MALE:
      return (sliderIdx = 0) => {
        navigate(`${routePaths.CardCollection}?type=${LocationType.MALE}`);
        setSliderIdx(sliderIdx);
      };

    case LocationType.SHARE:
      return (cardId: string, sliderIdx = 0) => {
        const shareUrl = `${routePaths.CardCollection}?type=${LocationType.SHARE}&cardId=${cardId}`;
        return {
          navigate: () => {
            navigate(shareUrl);
            setSliderIdx(sliderIdx);
          },
          url: shareUrl,
        };
      };
  }
}

function parseFilterTypesToString(filterTypes: string[]): string {
  return qs.stringify(
    {
      search: filterTypes,
    },
    { arrayFormat: "repeat" },
  );
}
