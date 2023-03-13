
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Layouts'



const LazyLanding = React.lazy(() => import("../../pages/SharedPages/LandingPage/LandingPage"))
const LazyCommunity = React.lazy(() => import("../../pages/SharedPages/CommunityPage/CommunityPage"))
const LazyAboutUs = React.lazy(() => import("../../pages/SharedPages/AboutUsPage/AboutUs"))
const LazyContactUs = React.lazy(() => import("../../pages/SharedPages/ContactUsPage/ContactUs"))
const LazyBLog = React.lazy(() => import("../../pages/SharedPages/BlogPage/Blog"))
const LazyPreference = React.lazy(() => import("../../pages/PrivatePages/Preferences/Prefrence"))





export const SharedRoutes = () => {
    const sharedLayouts = [
        {
            path: "/",
            component: <LazyLanding />
        },
        {
            path: "/community",
            component: <LazyCommunity />
        }, {
            path: "/about-us",
            component: <LazyAboutUs />
        },
        {
            path: "/contact-us",
            component: <LazyContactUs />
        },
        {
            path: "/our-blog",
            component: <LazyBLog />
        },
        {
            path: "/preferences",
            component: <LazyPreference />
        },
    ]


    return (
        <Routes>
            {
                sharedLayouts.map((routes, index) => <Route key={index} path={routes.path} element={
                    <React.Suspense fallback={null}>
                        <MainLayout>{routes.component}</MainLayout>
                    </React.Suspense>
                } />)
            }
        </Routes>
    )
}
