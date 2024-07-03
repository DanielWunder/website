import { RouteObject } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DatenschutzPage from "./pages/datenschutz/DatenschutzPage";
import DatenschutzPage2 from "./pages/datenschutz/DatenschutzPage2";
import ImpressumPage from "./pages/impressum/ImpressumPage";
import HomePage from "./pages/index/HomePage";
import LivePage from "./pages/live/LivePage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "live/:id",
        element: <LivePage />,
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
    ],
  },
];

export default routes;
