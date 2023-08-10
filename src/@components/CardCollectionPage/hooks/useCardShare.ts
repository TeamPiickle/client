import copyLink from "clipboard-copy";
import { useEffect, useState } from "react";

import { LocationType } from "../../../types/cardCollection";
import useNavigateCardCollection, {
  NavigateCardCollectionShareType,
} from "../../@common/hooks/useNavigateCardCollection";
import useToast from "../../@common/Toast/hooks/useToast";

export default function useCardShare() {
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [isCopyProcessed, setIsCopyProcessed] = useState(false);
  const navigateCardCollection = useNavigateCardCollection(LocationType.SHARE) as NavigateCardCollectionShareType;
  const showToast = useToast();

  useEffect(() => {
    if (isCopyProcessed) {
      const textToCopy = `이런 대화주제는 어때요?\n지금 한번 확인해보세요.\n${updatedAddress}?utm_content=sharelink`;
      copyLink(textToCopy);
      setIsCopyProcessed(false);
    }
  }, [isCopyProcessed, updatedAddress]);

  const handleCopyClipBoard = async (_id: string) => {
    const basePath = `${import.meta.env.DEV ? "http://127.0.0.1:5173" : "https://dev.piickle.link"}`;
    const shareNavigation = navigateCardCollection(_id);
    const shareUrl = `${basePath}${shareNavigation.url}`;
    setUpdatedAddress(shareUrl);
    setIsCopyProcessed(true);
    showToast({ message: "📤 링크를 복사했어요", duration: 2.5 });
  };

  return { handleCopyClipBoard };
}
