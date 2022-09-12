export interface UserProfile {
  name: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
}
export interface JoinUserInfo {
  nickname: string;
  birthday: string;
  gender: string;
  imgFile: File;
}

export interface myPiickle {
  cardId: string;
  content: string;
}
