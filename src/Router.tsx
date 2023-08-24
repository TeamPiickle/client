import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AgreePage,
  BestPiicklePage,
  BookmarkPage,
  CardCollectionPage,
  CategoryPage,
  DeletePage,
  // EmailAuthenticationPage,
  // EmailConfirmPage,
  Error404Page,
  JoinPage,
  LoginPage,
  MainPage,
  MyPage,
  OAuthKakaoPage,
  OAuthNaverPage,
  SuccessPage,
  UserInfoPage,
  UserProfilePage,
  VotePage,
} from "./@components";
import EventPage from "./@components/EventPage";
import useAuth from "./core/hooks/useAuth";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={PublicRoute({ Component: <MainPage /> })} />
        <Route path={routePaths.Login} element={PublicRoute({ Component: <LoginPage />, restricted: true })} />
        <Route path={routePaths.BestPiicklePage} element={PublicRoute({ Component: <BestPiicklePage /> })} />
        <Route path={routePaths.Category} element={PublicRoute({ Component: <CategoryPage /> })} />
        <Route
          path={routePaths.CardCollection}
          element={PublicRoute({
            Component: <CardCollectionPage />,
          })}
        />
        <Route path={`${routePaths.Vote}${routePaths.VoteId}`} element={PublicRoute({ Component: <VotePage /> })} />
        <Route path={routePaths.MyPage} element={PrivateRoute({ Component: <MyPage /> })} />
        <Route path={routePaths.BookmarkPage} element={PublicRoute({ Component: <BookmarkPage /> })} />
        <Route path={routePaths.Delete} element={PrivateRoute({ Component: <DeletePage /> })} />
        <Route path={routePaths.Event} element={PrivateRoute({ Component: <EventPage /> })} />
        <Route path={`${routePaths.Join_}*`} element={PublicRoute({ Component: <JoinPage />, restricted: true })}>
          <Route path={routePaths.Join_Agree} element={<AgreePage />} />
          {/* <Route path={routePaths.Join_EmailAuthentication} element={<EmailAuthenticationPage />} />
          <Route path={routePaths.Join_EmailConfirm} element={<EmailConfirmPage />} /> */}
          <Route path={routePaths.Join_UserProfile} element={<UserProfilePage />} />
          <Route path={routePaths.Join_UserInfo} element={<UserInfoPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
        <Route path={`${routePaths.OAuth_}*`}>
          <Route path={routePaths.OAuth_Kakao} element={PublicRoute({ Component: <OAuthKakaoPage /> })} />
          <Route path={routePaths.OAuth_Naver} element={PublicRoute({ Component: <OAuthNaverPage /> })} />
          <Route path={routePaths.OAuth_Success} element={PrivateRoute({ Component: <SuccessPage /> })} />
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
  const { isLogin } = useAuth();
  return isLogin && restricted ? <MainPage /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const { isLogin } = useAuth();
  return isLogin ? Component : <LoginPage />;
};
