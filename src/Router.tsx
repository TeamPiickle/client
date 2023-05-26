import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import JoinPage from "./@components/JoinPage";
import { routePaths } from "./core/routes/path";

const MainPage = lazy(() => import("../src/@components/MainPage/index"));
const AgreePage = lazy(() => import("../src/@components/JoinPage/AgreePage/index"));
const BookmarkPage = lazy(() => import("../src/@components/BookmarkPage/index"));
const CardCollectionPage = lazy(() => import("../src/@components/CardCollectionPage/index"));
const CategoryPage = lazy(() => import("../src/@components/CategoryPage/index"));
const DeletePage = lazy(() => import("../src/@components/DeletePage/index"));
// const EmailAuthenticationPage = lazy(() => import("../src/@components/EmailAuthenticationPage/index"));
// const EmailConfirmPage = lazy(() => import("../src/@components/EmailConfirmPage/index"));
const Error404Page = lazy(() => import("../src/@components/Error404Page/index"));
const LoginPage = lazy(() => import("../src/@components/LoginPage/index"));
const MyPage = lazy(() => import("../src/@components/MyPage/index"));
const UserInfoPage = lazy(() => import("../src/@components/JoinPage/UserInfoPage/index"));
const UserProfilePage = lazy(() => import("../src/@components/JoinPage/UserProfilePage/index"));
const VotePage = lazy(() => import("../src/@components/VotePage/index"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={PublicRoute({ Component: <MainPage /> })} />
        <Route path={routePaths.Login} element={PublicRoute({ Component: <LoginPage />, restricted: true })} />
        <Route path={routePaths.Category} element={PublicRoute({ Component: <CategoryPage /> })} />
        <Route path={routePaths.CardCollection} element={PublicRoute({ Component: <CardCollectionPage /> })} />
        <Route path={`${routePaths.Vote}${routePaths.VoteId}`} element={PublicRoute({ Component: <VotePage /> })} />
        <Route path={routePaths.MyPage} element={PrivateRoute({ Component: <MyPage /> })} />
        <Route path={routePaths.BookmarkPage} element={PublicRoute({ Component: <BookmarkPage /> })} />
        <Route path={routePaths.Delete} element={PrivateRoute({ Component: <DeletePage /> })} />
        <Route path={`${routePaths.Join_}*`} element={PublicRoute({ Component: <JoinPage />, restricted: true })}>
          <Route path={routePaths.Join_Agree} element={<AgreePage />} />
          {/* <Route path={routePaths.Join_EmailAuthentication} element={<EmailAuthenticationPage />} />
          <Route path={routePaths.Join_EmailConfirm} element={<EmailConfirmPage />} /> */}
          <Route path={routePaths.Join_UserProfile} element={<UserProfilePage />} />
          <Route path={routePaths.Join_UserInfo} element={<UserInfoPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
        <Route path="*" element={PublicRoute({ Component: <Error404Page /> })} />
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
  return isLogined && restricted ? <MainPage /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined ? Component : <LoginPage />;
};
