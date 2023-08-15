import { useCallback, useState } from "react";

import { cardCollectionApi } from "../../../core/api/cardCollection";
import useAuth from "../../../core/hooks/useAuth";

interface handleClickParams {
  _id: string;
  onSuccess?: () => void;
}

export type handleClickBlacklistType = (params: handleClickParams) => void;

const useBlacklist = (handleClickBeforeLogin: () => void) => {
  const { isLogin } = useAuth();
  const [blacklist, setBlacklist] = useState<string[]>([]);

  const handleClickAddBlacklist: handleClickBlacklistType = useCallback(
    ({ _id, onSuccess: onSuccessAdd }) => {
      switch (isLogin) {
        case true:
          cardCollectionApi.addBlacklist(_id);
          onSuccessAdd && onSuccessAdd();
          setBlacklist((prev) => [...prev, _id]);
          break;
        case false:
          handleClickBeforeLogin();
          break;
      }
    },
    [isLogin, handleClickBeforeLogin],
  );

  const handleClickCancelBlacklist: handleClickBlacklistType = useCallback(({ _id, onSuccess: onSuccessDelete }) => {
    cardCollectionApi.deleteBlacklist(_id);
    setBlacklist((prev) => prev.filter((id) => id !== _id));
    onSuccessDelete && onSuccessDelete();
  }, []);

  const getIsBlacklist = useCallback((_id: string) => blacklist.includes(_id), [blacklist]);

  return {
    getIsBlacklist,
    handleClickAddBlacklist,
    handleClickCancelBlacklist,
  };
};

export default useBlacklist;
