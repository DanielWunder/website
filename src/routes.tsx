import { RouteObject } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DatenschutzPage from "./pages/datenschutz/DatenschutzPage";
import DatenschutzPage2 from "./pages/datenschutz/DatenschutzPage2";
import ImpressumPage from "./pages/impressum/ImpressumPage";
import HomePage from "./pages/index/HomePage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "datenschutz",
        element: <DatenschutzPage />,
      },
      {
        path: "datenschutz2",
        element: <DatenschutzPage2 />,
      },
      {
        path: "impressum",
        element: <ImpressumPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
