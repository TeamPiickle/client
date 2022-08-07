import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmark, CardCollection, Category, Error404, Login, Main, MyPage, Vote } from "./components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={<Main />} />
        <Route path={routePaths.Login} element={<Login />} />
        <Route path={routePaths.Category} element={<Category />} />
        <Route path={routePaths.CardCollection} element={<CardCollection />} />
        <Route path={`${routePaths.Vote}${routePaths.VoteId}`} element={<Vote />} />
        <Route path={routePaths.MyPage} element={<MyPage />} />
        <Route path={routePaths.Bookmark} element={<Bookmark />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
