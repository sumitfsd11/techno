import React from 'react';
import { Outlet, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Layout , UserLayout } from 'components';
import { private_routes, public_routes } from 'routes/route';
import 'App.css';
import 'index.css';

const Authetication = ({ user, link = "/home" }) => {
    if (user) {
        return <Navigate to={link} replace />
    }
    return <Outlet />
    
}

const Protected = ({ user, link = "/login" }) => {
    if (!user) {
        return <Navigate to={link} replace />
    }
    return <Outlet />
}


export default function Main() {
    const session = true;
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    {
                        false ? (
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

                        ) : (
                            <Route element={<UserLayout />}>
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
                        )
                    }
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}
