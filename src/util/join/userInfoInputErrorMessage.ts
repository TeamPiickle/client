export const emailInvalidMessage = {
  NULL: "",
  nullError: "이메일을 입력해주세요",
  form: "이메일 형식이 올바르지 않습니다",
  duplicaton: "이미 사용중인 이메일입니다",
  PASS: "확인",
};
export type EmailInvalidMessage = typeof emailInvalidMessage[keyof typeof emailInvalidMessage];

export const passwordInvalidMessage = {
  NULL: "",
  nullPwError: "비밀번호를 입력해주세요",
  form: "영문, 숫자, 특수 문자를 하나 이상씩 조합해서 6자 이상으로 입력해주세요",
  PASS: "확인",
};
export type PasswordInvalidMessage = typeof passwordInvalidMessage[keyof typeof passwordInvalidMessage];

export const passwordConfirmInvalidMessage = {
  NULL: "",
  nullPwError: "비밀번호를 입력해주세요",
  nullPwConfirmError: "비밀번호를 다시 확인해주세요",
  noMatch: "비밀번호가 일치하지 않습니다",
  PASS: "확인",
};
export type PasswordConfirmInvalidMessage =
  typeof passwordConfirmInvalidMessage[keyof typeof passwordConfirmInvalidMessage];
