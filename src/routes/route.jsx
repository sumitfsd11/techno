
import React from "react";
/**
 * private routes 
 * public routes
 */

import {
    Login
    , ResetPassword
    , VerifyOtp
} from "pages";
import Home from "pages/VisitorPages/Home/Home";

const private_routes = [
    {
        name: '',
        path: '/',
        key: '',
        permissions: [],
        component: (<Login />)
    },
    {
        name: '',
        path: '/admin/home',
        key: '',
        permissions: [],
        component: (<VerifyOtp />)
    },
    {
        name: '',
        path: '*',
        key: '',
        permissions: [],
        component: (<p>not font </p>)
    },
]

const public_routes = [
    {
        name: '',
        path: '/',
        key: '',
        permissions: [],
        component: (<Login />)
    },
    {
        name: '',
        path: '/verify-otp',
        key: '',
        permissions: [],
        component: (<VerifyOtp />)
    },
    {
        name: '',
        path: '/forget-password',
        key: '',
        permissions: [],
        component: (<ResetPassword />)
    },
    {
        name: '',
        path: '*',
        key: '',
        permissions: [],
        component: (<p>not font </p>)
    },
]

const private_routes_user = [
    {
        name: '',
        path: '/',
        key: '',
        permissions: [],
        component: (<Home />)
    },
    {
        name: '',
        path: '/home',
        key: '',
        permissions: [],
        component: (<Home />)
    },
]

const public_routes_user = [
    {
        name: '',
        path: '/',
        key: '',
        permissions: [],
        component: (<Login />)
    },
    {
        name: '',
        path: '/login',
        key: '',
        permissions: [],
        component: (<Login />)
    },
]

export {
    private_routes,
    public_routes,
    public_routes_user,
    private_routes_user
}