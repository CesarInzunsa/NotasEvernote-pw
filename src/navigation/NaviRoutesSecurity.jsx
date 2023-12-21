import {createBrowserRouter} from "react-router-dom";
import Home from "../security/home/pages/Home.jsx";
import Users from "../security/users/pages/Users.jsx";
import Periods from "../security/periods/pages/Periods.jsx";
import Labels from "../security/labels/pages/Labels.jsx";
import Institutes from "../security/institutes/pages/Institutes.jsx";
import Error from "../share/errors/pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/labels",
                element: <Labels/>,
            },
            {
                path: "/institutes",
                element: <Institutes/>,
            },
            {
                path: "/users",
                element: <Users/>,
            },
            {
                path: "/periods",
                element: <Periods/>,
            },
        ],
    },
]);
export default router;