import { cardCollectionApi } from "../../../core/api/cardCollection";
import useAuth from "../../../core/hooks/useAuth";
import { useCardLists } from "./useCardLists";

interface handleClickParams {
  _id: string;
  onSuccess: () => void;
}

type handleClickBlacklistType = (params: handleClickParams) => void;

const useBlacklist = (handleClickBeforeLogin: () => void) => {
  const { isLogin } = useAuth();
  // const [cardId, setCardId] = useState<string>();

  // const { data } = useSWR(cardId ? `${PATH.USERS_}${PATH.CARDS_}${PATH.BLACKLIST}` + cardId : null, realReq.POST, {
  //   suspense: true,
  //   onSuccess: onSuccessAdd,
  // });
  //const { mutateCardlists } = useCardLists();

  const handleClickAddBlacklist: handleClickBlacklistType = ({ _id, onSuccess: onSuccessAdd }) => {
    switch (isLogin) {
      case true:
        cardCollectionApi.addBlacklist(_id);
        //mutateCardlists();
        onSuccessAdd();
        break;
      case false:
        handleClickBeforeLogin();
        break;
    }
  };

  const handleClickCancelBlacklist: handleClickBlacklistType = ({ _id, onSuccess: onSuccessDelete }) => {
    switch (isLogin) {
      case true:
        cardCollectionApi.deleteBlacklist(_id);
        //mutateCardlists();
        onSuccessDelete();
        break;
      case false:
        handleClickBeforeLogin();
        break;
    }
  };

  return {
    handleClickAddBlacklist,
    handleClickCancelBlacklist,
  };
};

export default useBlacklist;