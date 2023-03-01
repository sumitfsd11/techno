
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
        path:'/',
        key: '',
        permissions: [],
        component: (<React.Fragment>kk</React.Fragment>)
    },
]

const public_routes = [
    {
        name: '',
        path:'/',
        key: '',
        permissions: [],
        component: (<React.Fragment><Login/></React.Fragment>)
    },
    {
        name: '',
        path:'/login',
        key: '',
        permissions: [],
        component: (<React.Fragment>kk</React.Fragment>)
    },
]

export {
    private_routes,
    public_routes
}