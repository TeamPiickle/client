import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useTopicReplay() {
  const [isReplayBtn, setIsReplayBtn] = useState(false);
  const [searchParams] = useSearchParams();
  const cardType = searchParams.get("type");

  useEffect(() => {
    const noRepalyTypes = ["female", "male", "bookmark", "medley", "recent", "best"];

    setIsReplayBtn(!noRepalyTypes.includes(cardType || ""));
  }, [cardType]);

  return isReplayBtn;
}
