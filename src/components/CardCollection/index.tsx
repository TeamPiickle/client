import CardSlider from "./CardSlider";
import { St } from "./style";

export default function CardCollection() {
  return (
    <St.MainPage>
      <CardSlider />
      <St.IcFilterBtn />
    </St.MainPage>
  );
}
