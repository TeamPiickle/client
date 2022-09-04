import { prevPages } from "../../../core/join/prevPages";
import Header from "../common/Header";
import { St } from "./style";

export default function UserProfilePage() {
  return (
    <St.Root>
      <Header prevPage={prevPages[4].prevPage} />
    </St.Root>
  );
}
