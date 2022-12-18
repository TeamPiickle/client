export interface UserProfile {
  name: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
}

export interface JoinUserInfo {
  email: string;
  password: string;
  nickname: string;
  birthday: string;
  gender: string;
  imgFile: File;
}

export interface MyPiickle {
  cardId: string;
  content: string;
}

export interface UserInfo {
  email: string;
  password: string;
}
