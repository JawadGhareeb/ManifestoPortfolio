import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loading } from "./Components/Loading/Loading";
import { Root } from "./Pages/Root";
import { Home } from "./Pages/Home/Home";
import { Contact } from "./Pages/Contact/Contact";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Gallery } from "./Pages/Gallery/Gallery";
import "./App.css";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);
export const App = () => {
  const { load } = useSelector((state) => state.load);
  return (
    <Fragment>
      {load ? <RouterProvider router={routes} /> : <Loading />}
    </Fragment>
  );
};
