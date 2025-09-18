import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home"
import Dashboard from "../dashboard/Dashboard";
import Achievements from "../dashboard/Achievements";
import ActivityFeed from "../dashboard/ActivityFeed";
import Bookmarks from "../dashboard/Bookmarks";
import Contributions from "../dashboard/Contributions";
import Discussions from "../dashboard/Discussions";
import Profile from "../dashboard/Profile";
import Projects from "../pages/Projects";
import Community from "../pages/Community";
import Discover from "../pages/Discover";
import Register from "../pages/Register";
import Page from "../components/page";
import Login from "../pages/Login";
import ExploreProjects from "../dashboard/ExploreProjects";
import ForgetPassword from "../pages/ForgetPassword";
const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                element: (
                    <Page title="OpenSourceFinder">
                        <Home />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard",
                element: (
                    <Page title="Dashboard">
                        <Dashboard />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/explore",
                element: (
                    <Page title="Explore Projects">
                        <ExploreProjects />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/achievements",
                element: (
                    <Page title="Achievements">
                        <Achievements />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/activity",
                element: (
                    <Page title="Activity Feed">
                        <ActivityFeed />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/bookmarks",
                element: (
                    <Page title="Bookmarks">
                        <Bookmarks />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/contributions",
                element: (
                    <Page title="Contributions">
                        <Contributions />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/discussions",
                element: (
                    <Page title="Discussions">
                        <Discussions />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/dashboard/profile",
                element: (
                    <Page title="Profile">
                        <Profile />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/projects",
                element: (
                    <Page title="Projects">
                        <Projects />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/discover",
                element: (
                    <Page title="Discover">
                        <Discover />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/community",
                element: (
                    <Page title="Community">
                        <Community />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/register",
                element: (
                    <Page title="Register">
                        <Register />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "/login",
                element: (
                    <Page title="Login">
                        <Login />
                    </Page>
                ),
                errorElement: <Error />,
            },
            {
                path: "//forget",
                element: (
                    <Page title="Forget">
                        <ForgetPassword />
                    </Page>
                ),
                errorElement: <Error />,
            },
        ],
    },
]);

export default router;
