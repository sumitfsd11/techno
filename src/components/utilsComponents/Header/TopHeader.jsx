import React from 'react'
import QuickReach from '../HeaderUtils/QuickReach';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../..';
import { Link } from 'react-router-dom';
import { Menu , Times} from 'icons';
export default function TopHeader() {
    const location = useLocation()


    return (
        <React.Fragment>
            <div className='grid border-b gap-2 bg-[#f6fbfe] border-b-[#c0c0c074] grid-cols-12 h-[8vh]'>
                <div className='col-span-4 h-full'>
                    <div className='h-full flex items-center capitalize pl-2'>
                        { location.pathname.replaceAll("/", " ").replaceAll("-", " ")}
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

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className='nav_bar_user drop-shadow-2xl'>
                <div className="wrapper">
                    <div className="logo"><Link to="/"><span className="text-[#070707c4] font-semibold">Technomatic</span></Link></div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /><Times/></label>
                        <li className=' '><Link to="/"><span className=''>Home</span></Link></li>
                        <li className=' '><Link to="/">Events</Link></li>
                        <li>
                            <a href="#" className="desktop-item">Couses</a>

                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">Couser</label>
                            <ul className="drop-menu">
                                <li><Link to="/course/2">AWS</Link></li>
                                <li><Link to="/course/3">Azura</Link></li>
                                <li><Link to="/course/3">Google Cloud</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="desktop-item">Contact </a>
                            <input type="checkbox" id="showMega" />
                            <label htmlFor="showMega" className="mobile-item">Contact</label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <img src="img.jpg" alt />
                                    </div>
                                    <div className="row">
                                        <header> Services</header>
                                        <ul className="mega-links">
                                            <li><Link to="">Aws</Link></li>
                                            <li><a href="#">Vectors</a></li>
                                            <li><a href="#">Business cards</a></li>
                                            <li><a href="#">Custom logo</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Email Services</header>
                                        <ul className="mega-links">
                                            <li><a href="#">Personal Email</a></li>
                                            <li><a href="#">Business Email</a></li>
                                            <li><a href="#">Mobile Email</a></li>
                                            <li><a href="#">Web Marketing</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Security services</header>
                                        <ul className="mega-links">
                                            <li><a href="#">Site Seal</a></li>
                                            <li><a href="#">VPS Hosting</a></li>
                                            <li><a href="#">Privacy Seal</a></li>
                                            <li><a href="#">Website design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn text-black"><Menu  /></label>
                </div>
            </nav>


        </React.Fragment>
    )
}


