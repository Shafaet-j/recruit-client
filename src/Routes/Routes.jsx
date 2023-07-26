import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(
            `https://recruit-pro-server-shafaet-j.vercel.app/job/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
