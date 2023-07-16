import { genderOptions } from "../../../../util/join/userProfileOption";
import { St } from "./style";

interface ProfileJenderProps {
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileJender(props: ProfileJenderProps) {
  const { gender, setGender } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  return (
    <St.ProfileGender>
      <St.GenderInputForm onChange={handleSelect} value={gender}>
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
            {option.label}
          </option>
        ))}
      </St.GenderInputForm>
    </St.ProfileGender>
  );
}
