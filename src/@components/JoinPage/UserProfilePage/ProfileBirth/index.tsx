import { ageOptions } from "../../../../util/join/userProfileOption";
import { St } from "./style";

interface ProfileBirthProps {
  birthData: string;
  setBirthData: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileBirth(props: ProfileBirthProps) {
  const { birthData, setBirthData } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthData(e.target.value);
  };

  return (
    <St.ProfileBirth>
      <St.BirthInputForm onChange={handleSelect} value={birthData}>
        {ageOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled} hidden={option.hidden}>
            {option.label}
          </option>
        ))}
      </St.BirthInputForm>
    </St.ProfileBirth>
  );
}
