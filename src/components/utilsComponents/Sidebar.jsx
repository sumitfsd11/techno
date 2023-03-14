import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AdminSVG } from 'icons';
import img from "assets/icon.png";
import icons from "assets/icons.png";
import { ArrowRight, ArrowLeft } from 'icons';
// model 
export default function SidebarC({ children }) {
    const { collapseSidebar, collapsed } = useProSidebar();
    console.log(collapsed, "")

    let [isOpen, setIsOpen] = React.useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const IconWrapper = React.memo(({ children }) => (
        <div className='p-2 rounded-md icon text-[#38bdf8] text-lg mr-2  '>
            {children}
        </div>
    ));

    return (
        <div className='flex '>
            <Sidebar className='lg:inline md:hidden hidden h-[100vh] custome_scroll overflow-y-auto'>
                <React.Fragment>
                    <header className='mx-5 mt-5 mb-7 rounded-lg'>
                        <div className='flex'>
                            <img src={img} alt={"loading..."} className={collapsed?` hidden`:''} />
                            <div className=''>
                            <button onClick={()=>collapseSidebar()} className={'mr-1 '}>{collapsed?<ArrowRight/>:<ArrowLeft/>}</button>
                            </div>
                        </div>
                    </header>
               
                </React.Fragment>

                <React.Fragment>
                    {!collapsed && (
                        <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>Admin</div>)}
                    <Menu defaultOpen={false}
                        prefix={90}
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                if (level === 0)
                                    return {
                                        color: disabled ? '#' : '#607489',
                                        fontWeight: active ? "600" : "",
                                        backgroundColor: active ? '#' : undefined,
                                    };
                            },
                        }}


                    >
                        <SubMenu className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}>
                            <MenuItem suffix={2} component={<Link to="/documentation" />} className='text-[#607489] text-sm '> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                    </Menu>
                </React.Fragment>

                <React.Fragment>
                    {!collapsed && (
                        <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>Admin</div>)}
                    <Menu defaultOpen={false}
                        prefix={90}
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                if (level === 0)
                                    return {
                                        color: disabled ? '#' : '#607489',
                                        fontWeight: active ? "600" : "",
                                        backgroundColor: active ? '#' : undefined,
                                    };
                            },
                        }}


                    >
                        <SubMenu className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}>
                            <MenuItem suffix={2} component={<Link to="/documentation" />} className='text-[#607489] text-sm '> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                    </Menu>
                </React.Fragment>

                <React.Fragment>
                    {!collapsed && (
                        <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>Admin</div>)}
                    <Menu defaultOpen={false}
                        prefix={90}
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                if (level === 0)
                                    return {
                                        color: disabled ? '#' : '#607489',
                                        fontWeight: active ? "600" : "",
                                        backgroundColor: active ? '#' : undefined,
                                    };
                            },
                        }}


                    >
                        <SubMenu className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}>
                            <MenuItem suffix={2} component={<Link to="/documentation" />} className='text-[#607489] text-sm '> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                    </Menu>
                </React.Fragment>

                <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>General</div>
                <Menu className='text-[#607489] text-sm  ' >
                    <MenuItem className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}> Documentation</MenuItem>
                    <MenuItem className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}> Calendar</MenuItem>
                    <MenuItem className='text-[#607489] text-sm  ' label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}> E-commerce</MenuItem>
                </Menu>

                <React.Fragment>
                    <footer className='mx-5 mt-5 mb-7 rounded-lg'>
                        <div className=''>
                            <img src={icons} alt={"loading..."} />
                        </div>
                    </footer>
                </React.Fragment>

            </Sidebar>
            <main className='w-full'>
                {
                    children
                }
            </main>
        </div>
    );
}