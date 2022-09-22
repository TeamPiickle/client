const regNickName = /[~!@#$%";'^,&*()_+|</>=>`?:{[\\}]/g;

export default function checkInvalidNickName(nickname: string) {
  return regNickName.test(nickname);
}
