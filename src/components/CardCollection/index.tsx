import Header from "../common/Header";
import CardSlider from "./CardSlider";
import { St } from "./style";

export default function CardCollection() {
  return (
    <St.MainPage>
      <Header />
      <CardSlider />
    </St.MainPage>
  );
}
