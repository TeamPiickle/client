import { ageOptions } from "../../../../util/join/userProfileOption";
import { St } from "./style";

interface ProfileAgeGroupProps {
  ageGroup: string;
  setAgeGroup: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileAgeGroup(props: ProfileAgeGroupProps) {
  const { ageGroup, setAgeGroup } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeGroup(e.target.value);
  };

  return (
    <St.ProfileAgeGroup>
      <St.AgeGroupInputForm onChange={handleSelect} value={ageGroup}>
        {ageOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
            {option.label}
          </option>
        ))}
      </St.AgeGroupInputForm>
    </St.ProfileAgeGroup>
  );
}
