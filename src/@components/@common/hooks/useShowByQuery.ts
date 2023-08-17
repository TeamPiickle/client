import { useEffect, useState } from "react";

import { LocationType } from "../../../types/cardCollection";

// 파라미터로 보이지 않아야할 locationType 전달
export default function useShowByCardType(locationTypes: LocationType[]) {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const cardType = new URLSearchParams(window.location.search.split("?")[1]).get("type");
    setIsShow(!locationTypes.includes((cardType as LocationType) || ""));
  }, [locationTypes]);

  return { isShow };
}
