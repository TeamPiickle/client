import { useEffect } from "react";

import Footer from "../common/Footer";
import Header from "../common/Header";
import MyInfo from "./MyInfo";
import MyPiickle from "./MyPiickle";
import MySetting from "./MySetting";
import { St } from "./style";

export default function MyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <St.MyPage>
      <Header />
      <MyInfo />
      <MyPiickle />
      <MySetting />
      <Footer />
    </St.MyPage>
  );
}
