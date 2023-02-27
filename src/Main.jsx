import React from 'react';
import { Outlet, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Layout } from 'components';
import { private_routes, public_routes } from 'routes/route';
import 'App.css';
import 'index.css';

const Authetication = ({ user, link = "/" }) => {
    if (user) {
        return <Navigate tO={link} replace />
    } else {
        return <Outlet />
    }
}

const Protected = ({ user, link = "/login" }) => {
    if (!user) {
        return <Navigate to={link} replace />
    } else {
        <Outlet />
    }
}
export default function Main() {
    const session = false;
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route element={<Authetication user={session} />}>
                            {
                                public_routes?.map((route, index, arr) => {
                                    return (<Route key={index} path={route?.path} element={route?.component} {...route} />)
                                })
                            }
                        </Route>
                        <Route element={<Protected user={session} />}>
                            {
                                private_routes?.map((route, index, array) => {
                                    return (<Route key={index} path={route?.path} element={route?.component} {...route} />)
                                })
                            }
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}
