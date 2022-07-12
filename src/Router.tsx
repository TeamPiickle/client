import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmark, CardCollection, Category, Error404, Login, Main, MyPage, Vote } from "./components";
import Header from "./components/common/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
