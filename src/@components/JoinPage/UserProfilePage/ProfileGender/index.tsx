import { St } from "./style";

interface ProfileJenderProps {
  gender: string;
  setGender: (jender: string) => void;
}

export default function ProfileJender(props: ProfileJenderProps) {
  const { gender, setGender } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  return (
    <St.ProfileGender>
      <St.GenderInputForm onChange={handleSelect} value={gender}>
        <St.Option value="" disabled hidden>
          성별을 선택해주세요
        </St.Option>
        <St.Option value="남">남자</St.Option>
        <St.Option value="여">여자</St.Option>
        <St.Option value="기타">기타</St.Option>
      </St.GenderInputForm>
    </St.ProfileGender>
  );
}
