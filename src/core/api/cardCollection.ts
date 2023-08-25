import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

// 북마크 생성
function addNDeleteBookmark(cardId: string) {
  return realReq.PUT(`${PATH.USERS_}${PATH.USERS_BOOKMARK}`, { cardId });
}

function addBlacklist(cardId: string) {
  return realReq.POST(`${PATH.USERS_}${PATH.CARDS_}${PATH.BLACKLIST}`, { cardId });
}

function deleteBlacklist(cardId: string) {
  return realReq.DELETE(`${PATH.USERS_}${PATH.CARDS_}${PATH.BLACKLIST}/${cardId}`);
}

function addComment(cardId: string, content: string) {
  return realReq.POST(`/mind23/api/comments/${cardId}`, { content });
}

function addPrizeEntry(prizeEntryStatus: boolean) {
  return realReq.POST("/mind23/api/prize-entry", { prizeEntryStatus });
}

export const cardCollectionApi = {
  addNDeleteBookmark,
  addBlacklist,
  deleteBlacklist,
  addComment,
  addPrizeEntry,
};
