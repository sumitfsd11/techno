import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarC from '../Sidebar';
import TopHeader from './TopHeader';

export default function AfterLoginHeader() {
    const session = false

    return (
        <div>
            <SidebarC>
                <React.Fragment>
                    <TopHeader />
                     <main className='lg:p-3 md:p-2 p-1 w-full lg:h-[92vh] lg:overflow-y-auto customeScrollbar '>
                        <Outlet />
                    </main>
                </React.Fragment>
            </SidebarC>

        </div>
    )
}
