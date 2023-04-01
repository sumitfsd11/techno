
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
import LandingBanner from "pages/ActionAdmin/Banners/components/LandingBanner";
import EventEdit from "pages/ActionAdmin/Events/components/EventEdit";
import EventsList from "pages/ActionAdmin/Events/components/Events";
import BlogEdit from "pages/ActionAdmin/Blog/components/BlogEdit";
import Blogs from "pages/ActionAdmin/Blog/components/Blogs";
import CourseList from "pages/ActionAdmin/Courses/components/Courses";
import ApplyList from "pages/ActionAdmin/Apply/components/ApplyList";
import Profile from "pages/ActionAdmin/Profile/Profile";
import AboutUsEdit from "pages/ActionAdmin/About-us/components/AboutUs";
import About from "pages/VisitorPages/AboutUS/components/About";
import ApplyForm from "pages/VisitorPages/Apply/components/ApplyForm";
import FeedBacks from "pages/ActionAdmin/Feedback/components/FeedBacks";
import FeedBackAction from "pages/ActionAdmin/Feedback/components/FeedBackAction";

const private_routes = [
    {
        name: '',
        path: '/admin/home',
        key: '',
        permissions: [],
        component: (<ApplyList />)
    },
    {
        name: '',
        path: '/admin/course-listing',
        key: '',
        permissions: [],
        component: (<CourseList />)
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
        component: (<Blogs/>)
    },
    {
        name: '',
        path: '/admin/blog/:id',
        key: '',
        permissions: [],
        component: (<BlogEdit />)
    },
    {
        name: '',
        path: '/admin/event-listing',
        key: '',
        permissions: [],
        component: (<EventsList />)
    },
    {
        name: '',
        path: '/admin/event/:id',
        key: '',
        permissions: [],
        component: (<EventEdit />)
    },
    {
        name: '',
        path: '/admin/profile',
        key: '',
        permissions: [],
        component: (<Profile />)
    },
    {
        name: '',
        path: '/admin/about-us-edit',
        key: '',
        permissions: [],
        component: (<AboutUsEdit />)
    },
    {
        name: '',
        path: '/admin/feedback-list',
        key: '',
        permissions: [],
        component: (<FeedBacks />)
    },
    {
        name: '',
        path: '/admin/feedback/:id',
        key: '',
        permissions: [],
        component: (<FeedBackAction />)
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
    {
        name: '',
        path: '/Apply',
        key: '',
        permissions: [],
        component: (<ApplyForm />)
    },
    {
        name: '',
        path: '/about-us',
        key: '',
        permissions: [],
        component: (<About/>)
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
    }

]

export {
    private_routes,
    public_routes_user,
}