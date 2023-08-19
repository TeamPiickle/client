import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LocationType } from "../../../types/cardCollection";

export default function useCardType() {
  const [searchParams] = useSearchParams();
  const [cardType, setCardType] = useState<LocationType>();

  useEffect(() => {
    setCardType(searchParams.get("type") as LocationType);
  }, [searchParams]);

  return { cardType };
}
