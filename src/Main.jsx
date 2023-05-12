import React from 'react';
import { ConfigProvider } from "antd"
import { Outlet, Routes, Route, Navigate, BrowserRouter, useLocation } from 'react-router-dom';
import { Layout, UserLayout } from 'components';
import {
    private_routes,
    public_routes_user
} from 'routes/route';
import 'App.css';
import 'index.css';
import { useAuth } from './hooks';

const Authetication = ({ user, link = '/admin/home' }) => {
    if (user) {
        return <Navigate to={link} replace />
    }
    return <Outlet />

}

const Protected = ({ user, link = "/" }) => {
    if (!user) {
        return <Navigate to={link} replace />
    }
    return <Outlet />
}


export default function Main() {
    const { session } = useAuth()

    return (
        <React.Fragment>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#7F002A",
                    },
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route element={session() ? (<Layout />) : (<UserLayout />)}>
                            <Route element={<Authetication user={session()} />}>
                                {
                                    public_routes_user?.map((route, index, arr) => {
                                        return (<Route key={index} path={route?.path} element={route?.component} {...route} />)
                                    })
                                }
                            </Route>
                            <Route element={<Protected user={session()} />}>
                                {
                                    private_routes?.map((route, index, array) => {
                                        return (<Route key={index} path={route?.path} element={route?.component} {...route} />)
                                    })
                                }
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ConfigProvider>
        </React.Fragment>
    )
}
