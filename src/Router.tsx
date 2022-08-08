import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmark, CardCollection, Category, Error404, Login, Main, MyPage, Vote } from "./components";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={PublicRoute({ Component: <Main /> })} />
        <Route path={routePaths.Login} element={PublicRoute({ Component: <Login />, restricted: true })} />
        <Route path={routePaths.Category} element={PublicRoute({ Component: <Category /> })} />
        <Route path={routePaths.CardCollection} element={PublicRoute({ Component: <CardCollection /> })} />
        <Route path={`${routePaths.Vote}${routePaths.VoteId}`} element={PublicRoute({ Component: <Vote /> })} />
        <Route path={routePaths.MyPage} element={PrivateRoute({ Component: <MyPage /> })} />
        <Route path={routePaths.Bookmark} element={PublicRoute({ Component: <Bookmark /> })} />
        <Route path="*" element={PublicRoute({ Component: <Error404 /> })} />
      </Routes>
    </BrowserRouter>
  );
}

interface PublicRouteProps {
  Component: JSX.Element;
  restricted?: boolean;
}
type PrivateRouteProps = Omit<PublicRouteProps, "restricted">;

const PublicRoute = ({ Component, restricted = false }: PublicRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined && restricted ? <Main /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined ? Component : <Login />;
};
