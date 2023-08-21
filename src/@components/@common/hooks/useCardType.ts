import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LocationType } from "../../../types/cardCollection";

export default function useCardType() {
  const [searchParams] = useSearchParams();
  const [cardType, setCardType] = useState<LocationType>();

  const isLocationType = (searchParams: string): searchParams is LocationType => {
    return (searchParams as LocationType) !== undefined;
  };

  useEffect(() => {
    const typeParams = searchParams.get("type");
    if (!typeParams || !isLocationType(typeParams)) return;
    setCardType(typeParams);
  }, [searchParams]);

  return { cardType };
}
