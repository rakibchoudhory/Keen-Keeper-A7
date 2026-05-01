import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Layout from "../Layouts/Layout";
import TimeLine from "../pages/timeline/TimeLine";
// import Stats from "../pages/stats/Stats";
import FriendDetails from "../Component/FriendDetails/FriendDetails";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([

{
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/timeline",
            element: <TimeLine></TimeLine>
        },
        {
            path: "/stats",
            element: <Stats></Stats>
        },
        {
            path: "/friends/:id",
            element: <FriendDetails/>
        },
        

    ]
}

]);

