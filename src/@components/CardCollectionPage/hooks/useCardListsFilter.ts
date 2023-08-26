import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { filterTagsState } from "../../../core/atom/slider";
import { LocationType } from "../../../types/cardCollection";
import { intimacyTags } from "../../../util/cardCollection/filter";
import useNavigateCardCollection, {
  NavigateCardCollectionFilterType,
} from "../../@common/hooks/useNavigateCardCollection";

const useCardListsFilter = (isFilterTypeLocation: boolean) => {
  const navigateCardCollection = useNavigateCardCollection(LocationType.FILTER) as NavigateCardCollectionFilterType;

  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);

  useEffect(() => {
    if (isFilterTypeLocation) setFilterTags((prev) => ({ ...prev, isActive: false }));
  }, [isFilterTypeLocation, setFilterTags]);

  const fetchCardListsWithFilter = () => {
    // 남 -> 남자, 여 -> 여자
    const _fetchingCheckedTags = new Set([...filterTags.tags, intimacyTags[filterTags.intimacy[0]]]);
    if (_fetchingCheckedTags.has("남")) {
      _fetchingCheckedTags.delete("남");
      _fetchingCheckedTags.add("남자");
    }
    if (_fetchingCheckedTags.has("여")) {
      _fetchingCheckedTags.delete("여");
      _fetchingCheckedTags.add("여자");
    }

    setFilterTags((prevFilterTags) => {
      return { ...prevFilterTags, isActive: true };
    });

    navigateCardCollection([..._fetchingCheckedTags]);
  };

  return { fetchCardListsWithFilter };
};

export default useCardListsFilter;
