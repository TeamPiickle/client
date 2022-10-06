export const emailInvalidMessage = {
  NULL: "",
  form: "이메일 형식이 올바르지 않습니다",
  duplicaton: "이미 사용중인 이메일입니다",
};
export type EmailInvalidMessage = typeof emailInvalidMessage[keyof typeof emailInvalidMessage];
