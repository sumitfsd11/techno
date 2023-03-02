
import React from "react";
/**
 * private routes 
 * public routes
 */
 
import { Login } from "pages";

const private_routes = [
    {
        name: '',
        path:'/',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
    {
        name: '',
        path:'/home',
        key: '',
        permissions: [],
        component: (<p>lorem ioipsum</p>)
    },
]

const public_routes = [
    {
        name: '',
        path:'/',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
    {
        name: '',
        path:'/login',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
]

const private_routes_user = [
    {
        name: '',
        path:'/',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
    {
        name: '',
        path:'/home',
        key: '',
        permissions: [],
        component: (<p>lorem ioipsum</p>)
    },
]

const public_routes_user = [
    {
        name: '',
        path:'/',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
    {
        name: '',
        path:'/login',
        key: '',
        permissions: [],
        component: (<Login/>)
    },
]
export {
    private_routes,
    public_routes,
    public_routes_user,
    private_routes_user
}