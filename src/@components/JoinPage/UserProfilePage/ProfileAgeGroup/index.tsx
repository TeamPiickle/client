import { ageOptions } from "../../../../util/join/userProfileOption";
import { St } from "./style";

interface ProfileAgeGroupProps {
  ageGroup: string;
  handleSelect: (value: string) => void;
}

export default function ProfileAgeGroup(props: ProfileAgeGroupProps) {
  const { ageGroup, handleSelect } = props;

  return (
    <St.ProfileAgeGroup>
      <St.AgeGroupInputForm onChange={(e) => handleSelect(e.target.value)} value={ageGroup}>
        {ageOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
            {option.label}
          </option>
        ))}
      </St.AgeGroupInputForm>
    </St.ProfileAgeGroup>
  );
}
