import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LocationType } from "../../../types/cardCollection";

// 파라미터로 보이지 않아야할 locationType 전달
export default function useShowByCardType(locationTypes: LocationType[]) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cardType = searchParams.get("type");
    setIsShow(!locationTypes.includes((cardType as LocationType) || ""));
  }, [locationTypes]);

  return { isShow };
}
