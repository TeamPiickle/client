export const emailInvalidMessage = {
  NULL: "",
  nullError: "이메일을 입력해주세요",
  form: "이메일 형식이 올바르지 않습니다",
  duplicaton: "이미 사용중인 이메일입니다",
  PASS: "확인",
};
export type EmailInvalidMessage = typeof emailInvalidMessage[keyof typeof emailInvalidMessage];
