export interface UserProfile {
  name: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
}

export interface myPiickle {
  cardId: string;
  content: string;
}

export interface userEmail {
  email: string;
}

export interface userInfo {
  email: string | null;
  password: string;
}
