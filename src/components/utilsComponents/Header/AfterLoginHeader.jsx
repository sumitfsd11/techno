import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarC from '../Sidebar';
import TopHeader from './TopHeader';
import Footer from '../Footer/Footer';
import { Navbar } from './TopHeader';
export default function AfterLoginHeader() {
    return (
        <div>
            <SidebarC>
                <React.Fragment>
                    <TopHeader />
                    <main className='lg:p-1 md:p-2 p-1 w-full lg:h-[92vh] lg:overflow-y-auto customeScrollbar '>
                        <Outlet />
                    </main>
                </React.Fragment>
            </SidebarC>
        </div>
    )
}


export const UserAfterLoginHeader = () => {
    return (
        <div>
            <React.Fragment>
                <Navbar />
                <main className='   w-full lg:h-[92vh] lg:overflow-y-auto customeScrollbar '>
                    <Outlet />
                    <Footer />
                </main>
            </React.Fragment>
        </div>
    )
}
