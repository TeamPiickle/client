import { cardCollectionApi } from "../../../core/api/cardCollection";
import useAuth from "../../../core/hooks/useAuth";

const useBlacklist = (handleClickBeforeLogin: () => void) => {
  const { isLogin } = useAuth();
  // const [cardId, setCardId] = useState<string>();

  // const { data } = useSWR(cardId ? `${PATH.USERS_}${PATH.CARDS_}${PATH.BLACKLIST}` + cardId : null, realReq.POST, {
  //   suspense: true,
  //   onSuccess: onSuccessAdd,
  // });

  const handleClickAddBlacklist = (_id: string, onSuccessAdd: () => void) => {
    switch (isLogin) {
      case true:
        cardCollectionApi.addBlacklist(_id);
        onSuccessAdd();
        break;
      case false:
        handleClickBeforeLogin();
        break;
    }
  };

  const handleClickCancelBlacklist = (_id: string, onSuccessDelete: () => void) => {
    switch (isLogin) {
      case true:
        cardCollectionApi.deleteBlacklist(_id);
        onSuccessDelete();
        break;
      case false:
        handleClickBeforeLogin();
        break;
    }
  };

  return { handleClickAddBlacklist, handleClickCancelBlacklist };
};

export default useBlacklist;
