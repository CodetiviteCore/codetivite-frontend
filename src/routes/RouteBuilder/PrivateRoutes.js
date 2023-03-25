
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '../../components/Layouts/dashboardLayout';



const LazyPreference = React.lazy(() => import("../../pages/PrivatePages/Preferences/Prefrence"))
const LazyDashboard = React.lazy(() => import("../../pages/PrivatePages/dashboard/dasboard"))
const LazyRoadMap = React.lazy(() => import("../../pages/PrivatePages/Roadmap/Roadmap"))




export const PrivateRoutes = () => {
    const privateLayouts = [
        {
            path: "/dashboard",
            component: <LazyDashboard/>
        },
        {
            path: "/roadmap",
            component: <LazyRoadMap/>
        },
    ]


    return (
        <Routes>
            <Route path='/preferences' element={
                <React.Suspense fallback={null}>
                    <LazyPreference />
                </React.Suspense>} />
            {
                privateLayouts.map((route, index) => <Route key={index} path={route.path} element={
                    <React.Suspense fallback={null}>
                        <DashboardLayout>{route.component}</DashboardLayout>
                    </React.Suspense>
                } />)
            }
        </Routes>
    )
}
