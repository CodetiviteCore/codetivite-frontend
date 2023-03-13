
import React from 'react'
import { Route, Routes } from 'react-router-dom'


const LazyPreference = React.lazy(() => import("../../pages/PrivatePages/Preferences/Prefrence"))




export const PrivateRoutes = () => {
    // const privateLayouts = [
    //     {
    //         path: "/",
    //         component: <LazyLanding />
    //     },
    //     {
    //         path: "/community",
    //         component: <LazyCommunity />
    //     }, {
    //         path: "/about-us",
    //         component: <LazyAboutUs />
    //     },
    //     {
    //         path: "/contact-us",
    //         component: <LazyContactUs />
    //     },
    //     {
    //         path: "/our-blog",
    //         component: <LazyBLog />
    //     },
    //     {
    //         path: "/preferences",
    //         component: <LazyPreference />
    //     },
    // ]


    return (
        <Routes>
            <Route path='/preferences' element={
                <React.Suspense fallback={null}>
                    <LazyPreference/>
                </React.Suspense>} />
            {/* {
                privateLayouts.map((routes, index) => <Route key={index} path={routes.path} element={
                    <React.Suspense fallback={null}>
                        <MainLayout>{routes.component}</MainLayout>
                    </React.Suspense>
                } />)
            } */}
        </Routes>
    )
}
