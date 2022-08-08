import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmark, CardCollection, Category, Error404, Login, Main, MyPage, Vote } from "./components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={PublicRoute({ Component: <Main />, restricted: true })} />
        <Route path={routePaths.Login} element={PublicRoute({ Component: <Login />, restricted: false })} />
        <Route path={routePaths.Category} element={PublicRoute({ Component: <Category />, restricted: true })} />
        <Route
          path={routePaths.CardCollection}
          element={PublicRoute({ Component: <CardCollection />, restricted: true })}
        />
        <Route
          path={`${routePaths.Vote}${routePaths.VoteId}`}
          element={PublicRoute({ Component: <Vote />, restricted: true })}
        />
        <Route path={routePaths.MyPage} element={PublicRoute({ Component: <MyPage />, restricted: true })} />
        <Route path={routePaths.Bookmark} element={PublicRoute({ Component: <Bookmark />, restricted: true })} />
        <Route path="*" element={PublicRoute({ Component: <Error404 />, restricted: true })} />
      </Routes>
    </BrowserRouter>
  );
}

interface PublicRouteProps {
  Component: JSX.Element;
  restricted: boolean;
}

const PublicRoute = ({ Component, restricted }: PublicRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined && !restricted ? <Main /> : Component;
};
