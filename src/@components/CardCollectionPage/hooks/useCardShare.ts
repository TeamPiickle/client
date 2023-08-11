import copyLink from "clipboard-copy";

import { LocationType } from "../../../types/cardCollection";
import useNavigateCardCollection, {
  NavigateCardCollectionShareType,
} from "../../@common/hooks/useNavigateCardCollection";
import useToast from "../../@common/Toast/hooks/useToast";

export default function useCardShare() {
  const navigateCardCollection = useNavigateCardCollection(LocationType.SHARE) as NavigateCardCollectionShareType;
  const showToast = useToast();

  const getShareUrl = (_id: string) => {
    const basePath = `${import.meta.env.DEV ? "http://127.0.0.1:5173" : import.meta.env.VITE_SERVICE_URL}`;
    const shareNavigation = navigateCardCollection(_id);
    return `${basePath}${shareNavigation.url}`;
  };

  const handleCopyClipBoard = (_id: string) => {
    const shareUrl = getShareUrl(_id);
    const textToCopy = `이런 대화주제는 어때요?\n지금 한번 확인해보세요.\n${shareUrl}?utm_content=sharelink`;

    copyLink(textToCopy);
    showToast({ message: "📤 링크를 복사했어요", duration: 2.5 });
  };

  return { handleCopyClipBoard };
}
