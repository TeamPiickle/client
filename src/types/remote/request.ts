export interface PatchingUserPassword {
  email: string;
  newPassword: string;
}

export interface PatchingUserNickName {
  nickname: string;
}

export interface PostingVote {
  ballotTopicId: string;
  ballotItemId: string;
}
