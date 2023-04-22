import React from 'react'
import QuickReach from '../HeaderUtils/QuickReach';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar } from '../..';
import { Link } from 'react-router-dom';
import { Menu, Times } from 'icons';
import { useFetch } from "hooks"
export default function TopHeader() {
    const location = useLocation()


    return (
        <React.Fragment>
            <div className='grid border-b gap-2 bg-[#f6fbfe] border-b-[#c0c0c074] grid-cols-12 h-[8vh]'>
                <div className='col-span-4 h-full'>
                    <div className='h-full flex items-center capitalize pl-2'>
                        {location.pathname.replaceAll("/", " ").replaceAll("-", " ")}
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='mt-2 '>
                        <SearchBar />
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='flex justify-between w-full'>
                        <div className=''>

                        </div>
                        <div className=''>
                            <QuickReach />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const Navbar = ({ props }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data: responseData } = useFetch({
        url: `/navbar/`,
        skipOnStart: false,
    })

    const data__ = props ?? responseData?.response?.message

    const redirect_it = React.useCallback((path) => {
        navigate(path)
    }, [navigate])
    return (
        <React.Fragment>
            <nav className='nav_bar_user drop-shadow-2xl'>
                <div className="wrapper">
                    <div className="logo">{data__?.logo && (<Link to={data__?.link}><span className="text-[#070707c4] font-semibold">Technomatic</span></Link>)}</div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /><Times /></label>
                        <li>
                            <a onClick={() => redirect_it(data__?.columns_1[0]?.link)} className={`desktop-item ${location?.pathname === data__?.columns_1[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_1[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">{data__?.columns_1[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_1?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_2[0]?.link)} className={`desktop-item ${location?.pathname === data__?.columns_2[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_2[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">{data__?.columns_2[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_2?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_3[0]?.link)} className={`desktop-item ${location?.pathname === data__?.columns_3[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_3[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">{data__?.columns_3[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_3?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_4[0]?.link)} className={`desktop-item ${location?.pathname === data__?.columns_4[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_4[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">{data__?.columns_4[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_4?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_5[0]?.link)} className={`desktop-item ${location?.pathname === data__?.columns_5[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_5[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">{data__?.columns_5[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_5?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn text-black"><Menu /></label>
                </div>
            </nav>


        </React.Fragment>
    )
}


