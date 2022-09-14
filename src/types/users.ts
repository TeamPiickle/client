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

export interface myPiickle {
  cardId: string;
  content: string;
}

export interface userEmail {
  email: string;
}

export interface userInfo {
  email: string;
  password: string;
}

export interface useOutletContexts {
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
}
