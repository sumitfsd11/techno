import React from 'react'
import QuickReach from '../HeaderUtils/QuickReach';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar } from '../..';
import { Link } from 'react-router-dom';
import { Menu, Times } from 'icons';
import { useFetch } from "hooks"
import SocialiconDist from '../SocialiconDist/SocialiconDist';
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

                        </div>
                        <div className=''>

                        </div>
                        <div className=''>

                        </div>
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
    const { data } = useFetch({
        url: `/social_media/`,
        skipOnStart: false,
    })
    const data__ = props ?? responseData?.response?.message

    const redirect_it = React.useCallback((path) => {
        navigate(path)
    }, [navigate])
    return (
        <React.Fragment>

            <nav className='nav_bar_user drop-shadow-2xl'>
            <div className=''>
                <div className='text-black text-xs px-3 my-1 ' style={{fontSize:"13px"}}>
                    <SocialiconDist props={data?.response?.message} />
                </div>
            </div>
                <div className="wrapper border-t border-[#c0c0c036]">
                    <div className="logo">{data__?.logo && (<Link to={data__?.link}>
                        <div className="gird">
                            <img src={data__?.logo} className="w-[190px]   h-auto m-auto" alt="loading..." />
                        </div>
                    </Link>)}</div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn text-black font-extrabold " style={{color:"white"}}>
                            <i className="fas fa-times " />
                            <Times style={{color:"white"}} />
                        </label>
                        <li>
                            <a onClick={() => redirect_it(data__?.columns_1[0]?.link)} className={`desktop-item cursor-pointer ${location?.pathname === data__?.columns_1[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_1[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => redirect_it(data__?.columns_1[0]?.link)} htmlFor="showDrop" className="mobile-item">{data__?.columns_1[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_1?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li className='cursor-pointer'><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_2[0]?.link)} className={`desktop-item cursor-pointer ${location?.pathname === data__?.columns_2[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_2[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => redirect_it(data__?.columns_2[0]?.link)} htmlFor="showDrop" className="mobile-item">{data__?.columns_2[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_2?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li className='cursor-pointer'><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_3[0]?.link)} className={`desktop-item cursor-pointer ${location?.pathname === data__?.columns_3[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_3[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => redirect_it(data__?.columns_3[0]?.link)} htmlFor="showDrop" className="mobile-item">{data__?.columns_3[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_3?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li className='cursor-pointer'><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>

                        <li>
                            <a onClick={() => redirect_it(data__?.columns_4[0]?.link)} className={`desktop-item cursor-pointer ${location?.pathname === data__?.columns_4[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_4[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => redirect_it(data__?.columns_4[0]?.link)} htmlFor="showDrop" className="mobile-item">{data__?.columns_4[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_4?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li className='cursor-pointer'><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li>
                            <a onClick={() => redirect_it(data__?.columns_5[0]?.link)} className={`cursor-pointer desktop-item ${location?.pathname === data__?.columns_5[0]?.link ? 'active_navbar_ ' : ''}`}>{data__?.columns_5[0]?.title}</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => redirect_it(data__?.columns_5[0]?.link)} htmlFor="showDrop" className="mobile-item">{data__?.columns_5[0]?.title}</label>
                            <ul className="drop-menu">
                                {
                                    data__?.columns_5?.filter((i, index) => index !== 0)?.map((i) => (
                                        <li className='cursor-pointer'><Link to="/course/2">{i?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className='lg:hidden md:hidden block'>
                            <a onClick={() => redirect_it(data__?.columns_5[0]?.link)} className={`cursor-pointer desktop-item ${location?.pathname === data__?.columns_5[0]?.link ? 'active_navbar_ ' : ''}`}>Login</a>
                            <input type="checkbox" id="showDrop" />
                            <label onClick={() => window.open('https://portal.technomaticacademy.com/member/#/')} htmlFor="showDrop" className="mobile-item">Login</label>
                        </li>
                        {/* login */}
                        <li>
                            <ul >
                                <a href='https://portal.technomaticacademy.com/member/#/' className={`cursor-pointer desktop-item  ${location?.pathname === data__?.columns_5[0]?.link ? 'active_navbar_ ' : ''} bg-primarybg w-[120px] px-5 text-white rounded-full login_btn `}>Login</a>
                            </ul>
                        </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn text-black"><Menu style={{color:"blakc" , fontWeight:"bolder"}} /></label>
                </div>
            </nav>


        </React.Fragment>
    )
}


