import {createBrowserRouter} from "react-router-dom";
import Home from "../education/home/pages/Home.jsx";
import Courses from "../education/courses/pages/Courses.jsx";
import Groups from "../education/groups/pages/Groups.jsx";
import Error from "../share/errors/pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/courses",
                element: <Courses/>,
            },
            {
                path: "/groups",
                element: <Groups/>,
            },
        ],
    },
    /*{
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },*/
]);
export default router;