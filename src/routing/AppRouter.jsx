import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import Home from "../pages/home/Home";
import Error404 from "../pages/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LayoutRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
