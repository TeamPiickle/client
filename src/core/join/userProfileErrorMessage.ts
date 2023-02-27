export const JOIN_PROFILE_ALERT_KEY = {
  Okay: "",
  nickName: {
    input: "nickNameInput",
    // check: "닉네임 중복 확인을 해주세요",
    valid: "nickNameValid",
    fail: "nickNameFail",
    // success: "사용가능한 닉네임입니다",
  },
  birth: {
    // input: "생년월일을 입력해주세요",
    check: "birthCheck",
    valid: "birthValid",
  },
};

export const JOIN_PROFILE_ALERT_MESSAGE = {
  nickName: {
    input: "닉네임을 입력해주세요",
    check: "닉네임 중복 확인을 해주세요",
    valid: "닉네임에 특수문자를 포함할 수 없습니다",
    fail: "이미 존재하는 닉네임입니다",
    success: "사용가능한 닉네임입니다",
  },
  birth: {
    input: "생년월일을 입력해주세요",
    check: "만 14세 이상이 맞는지 다시 한번 확인해주세요",
    valid: "생년월일을 다시 확인해주세요",
  },
};
