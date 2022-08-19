import { St } from "./style";

export default function ErrorPopup(props: any) {
  const { isPopupOpen, setIsPopupOpen } = props;

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <St.Root>
      <St.ErrorPopupContainer>
        <St.ErrorTitle>이메일 형식이 올바르지 않습니다</St.ErrorTitle>
        <St.ErrorDescription>이메일을 제대로 입력하셨나요?</St.ErrorDescription>
        <St.Closebtn onClick={closePopup}>닫기</St.Closebtn>
      </St.ErrorPopupContainer>
    </St.Root>
  );
}
