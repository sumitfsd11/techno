import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AdminSVG } from 'icons';
import img from "assets/icon.png";
import icons from "assets/icons.png";
import { ArrowRight, ArrowLeft } from 'icons';
import { sidebar_utils } from 'utils/SidebarUtils';

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
                            <img src={img} alt={"loading..."} className={collapsed ? ` hidden` : ''} />
                            <div className=''>
                                <button onClick={() => collapseSidebar()} className={'mr-1 '}>{collapsed ? <ArrowRight /> : <ArrowLeft />}</button>
                            </div>
                        </div>
                    </header>
                </React.Fragment>
                {
                    sidebar_utils?.map((sidebar_) => {
                        return sidebar_?.SubMenu?.length > 0 ? (
                            <React.Fragment>
                                {!collapsed && (
                                    <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>{sidebar_?.title}</div>)}
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
                                    {

                                        <SubMenu className='text-[#607489] text-sm  ' label={sidebar_?.title} icon={sidebar_.icon?sidebar_.icon: (<IconWrapper><AdminSVG /></IconWrapper>)}>
                                            {sidebar_?.SubMenu?.map((i, index) => (
                                                <MenuItem key={index} suffix={null} component={<Link to={i?.link} />} className='text-[#607489] text-sm '>{i?.title}</MenuItem>
                                            ))
                                            }
                                        </SubMenu>

                                    }
                                </Menu>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className='px-6 mb-2 mt-3 text-gray-500 text-sm font-semibold  '>General</div>
                                <Menu className='text-[#607489] text-sm  ' >
                                    <MenuItem className='text-[#607489] text-sm  ' suffix={null} component={<Link to={sidebar_?.link} />}  label="Charts" icon={(<IconWrapper><AdminSVG /></IconWrapper>)}> {sidebar_?.title}</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )
                    }
                    )
                }
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