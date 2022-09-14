export interface invalidType {
  input: boolean;
  confirm: boolean;
}

export interface UserPasswordProps {
  isPasswordInvalid: invalidType;
  checkInputInvalid: () => void;
  checkConfirmInvalid: () => void;
  debouncedQuery: string;
  changePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePasswordConfirm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentStep: string;
  isUnfilled: invalidType;
}
