
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
import CourseDetail from "pages/VisitorPages/Courses/CourseDetail";
import Blog from "pages/VisitorPages/Blog/Blog";
import Events from "pages/VisitorPages/Events/Events";
// admin pages
import LandingBanner from "pages/ActionAdmin/Banners/components/LandingBanner";
// event edit 
// import {EventEdit} from "pages/ActionAdmin/Events/Index";
import EventEdit from "pages/ActionAdmin/Events/components/EventEdit";

const private_routes = [
    {
        name: '',
        path: '/admin/home',
        key: '',
        permissions: [],
        component: (<LandingBanner />)
    },
    {
        name: '',
        path: '/admin/course-listing',
        key: '',
        permissions: [],
        component: (<LandingBanner />)
    },
    {
        name: '',
        path: '/admin/course/:id',
        key: '',
        permissions: [],
        component: (<LandingBanner />)
    },
    {
        name: '',
        path: '/admin/blogs-listing',
        key: '',
        permissions: [],
        component: (<VerifyOtp />)
    },
    {
        name: '',
        path: '/admin/blog/:id',
        key: '',
        permissions: [],
        component: (<VerifyOtp />)
    },
    {
        name: '',
        path: '/admin/event-listing',
        key: '',
        permissions: [],
        component: (<EventEdit />)
    },
    {
        name: '',
        path: '/admin/events/:id',
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


const public_routes_user = [
    {
        name: '',
        path: '/',
        key: '',
        permissions: [],
        component: (<Home />)
    },
    {
        name: '',
        path: '/events',
        key: '',
        permissions: [],
        component: (<Events />)
    },
    {
        name: '',
        path: '/blogs',
        key: '',
        permissions: [],
        component: (<Blog />)
    },
    {
        name: '',
        path: '/course/:id',
        key: '',
        permissions: [],
        component: (<CourseDetail />)
    },
    // authrization
    {
        name: '',
        path: '/admin/login',
        key: '',
        permissions: [],
        component: (<Login />)
    },
    {
        name: '',
        path: '/admin/forget-password',
        key: '',
        permissions: [],
        component: (<ResetPassword />)
    },
    {
        name: '',
        path: '/admin/otp-verfication',
        key: '',
        permissions: [],
        component: (<VerifyOtp />)
    },

]

export {
    private_routes,
    public_routes_user,
}