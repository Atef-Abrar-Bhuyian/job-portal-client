import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Route not Found</h2>,
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        }
      ]
    },
  ]);


export default router;