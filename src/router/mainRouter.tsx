import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import HomeScreen from "../pages/HomeScreen";
import TestHOC from "../pages/test/TestHOC";
import Detail from "../pages/test/Detail";
import TestBuild from "../pages/test/TestBuild";
import Register from "../auth/Register";
import Layout2 from "../components/block/Layout2";
import SignIn from "../auth/SignIn";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout2/>,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/test",
        element: <TestHOC />,
      },
      {
        path: "/test/:id",
        element: <Detail />,
      },
      {
        path: "/testing",
        element: <TestBuild />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/homeScreen",
        element: <HomeScreen/>,
      },
     
    ],
  }
]);
