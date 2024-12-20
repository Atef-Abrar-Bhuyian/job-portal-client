import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>Route not Found</h2>,
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Signin></Signin>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
      ]
    },
  ]);


export default router;