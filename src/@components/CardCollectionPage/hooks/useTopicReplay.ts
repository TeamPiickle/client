import { useEffect, useState } from "react";

export default function useTopicReplay() {
  const [isReplayBtn, setIsReplayBtn] = useState(false);

  const cardType = new URLSearchParams(window.location.search.split("?")[1]).get("type");

  useEffect(() => {
    const noRepalyTypes = ["female", "male", "bookmark", "medley", "recent", "best"];

    setIsReplayBtn(!noRepalyTypes.includes(cardType || ""));
  }, [cardType]);

  return isReplayBtn;
}
