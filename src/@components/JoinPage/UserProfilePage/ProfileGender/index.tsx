import { genderOptions } from "../../../../util/join/userProfileOption";
import { St } from "./style";

interface ProfileJenderProps {
  gender: string;
  handleSelect: (value: string) => void;
}

export default function ProfileJender(props: ProfileJenderProps) {
  const { gender, handleSelect } = props;

  return (
    <St.ProfileGender>
      <St.GenderInputForm onChange={(e) => handleSelect(e.target.value)} value={gender}>
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
            {option.label}
          </option>
        ))}
      </St.GenderInputForm>
    </St.ProfileGender>
  );
}
