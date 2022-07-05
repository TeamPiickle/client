import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./pages/Error404";
import Main from "./pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
