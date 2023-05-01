import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { filterTagsState } from "../../../../core/atom/slider";

export default function useFilterTags() {
  const [filterTags, setFilterTags] = useRecoilState(filterTagsState);

  useEffect(() => {
    if (!filterTags.isActive) setFilterTags({ tags: new Set(), intimacy: [0], isActive: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTags.isActive]);

  // 태그를 눌렀을 때 함수
  const toggleTag = (_tag: string) => {
    setFilterTags((prevFilterTags) => {
      const tempCheckedTags = new Set(filterTags.tags);
      tempCheckedTags.has(_tag) ? tempCheckedTags.delete(_tag) : tempCheckedTags.add(_tag);
      return { ...prevFilterTags, tags: tempCheckedTags };
    });
  };

  const handleChangeIntimacyValue = (values: number[]) => {
    setFilterTags((prevFilterTags) => {
      return { ...prevFilterTags, intimacy: values };
    });
  };

  return { filterTags, toggleTag, handleChangeIntimacyValue };
}
