import { St } from "./style";

interface jenderTypes {
  isSelected: string;
  setIsSelected: (jender: string) => void;
}

export default function ProfileJender(props: jenderTypes) {
  const { isSelected, setIsSelected } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(e.target.value);
  };

  return (
    <St.ProfileGender>
      <St.GenderInputForm onChange={handleSelect} value={isSelected}>
        <St.Option value="" disabled selected hidden>
          성별을 선택해주세요
        </St.Option>
        <St.Option value="남">남자</St.Option>
        <St.Option value="여">여자</St.Option>
        <St.Option value="기타">기타</St.Option>
      </St.GenderInputForm>
    </St.ProfileGender>
  );
}
