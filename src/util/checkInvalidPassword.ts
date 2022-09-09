const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,18}$/;

export default function checkPasswordInvalid(password: string) {
  return !regPassword.test(password);
}
