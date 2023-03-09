import React from 'react'
// import { IconProvider } from '../../../utils/common.utils';
// import {AiOutlineSlack} from "react-icons/ai"
export default function TopBanner() {
    return (
        <div className='banner'>
            <div className=' bg-primarybg'>
                <div className='lg:px-36 pt-28 '>
                    <div className='grid grid-cols-12 py-14 '>
                        <div className='col-span-7 flex '>
                                <div className='animate__animated  animate__slideInLeft flex items-center '>
                                    <div className='grid grid-cols-12'>
                                        <div className='col-span-9 '>
                                            <section className=''>
                                                <h2 className='text-title-bg text-7xl font-semibold '>Technomatic Academy</h2>
                                                <br />
                                                <h2 className='text-white mb-1 text-4xl font-light my-5 '>Grow With Us </h2>
                                                <br />
                                            </section>
                                        </div>
                                        <div className=''>

                                        </div>
                                        <div className=' col-span-9 mt-2 '>
                                            <article className='text-white '>
                                            The object of education is to prepare the young to educate themselves throughout their lives.  </article>
                                            <section className='mt-3 text-white'>
                                                <div className='flex cursor-pointer justify text-[#77838f] text-sm'>
                                        <div className='mt-[1.5px] mr-2'>
                                            {/* <IconProvider className={'text-lg text-[#dea160] '}>
                                                <AiOutlineSlack />
                                            </IconProvider> */}
                                        </div>
                                        <div className=' text-white '> Join Technomatic Slack Community </div>
                                    </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className=' col-span-5'>
                                <div className='px-10 animate__animated  animate__slideInRight'>
                                    <img className='w-full h-auto p-3' src={'https://www.izaanschool.com/assets/img/illustrations/hero-img.png'} alt="loading" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ border: "none" }} className=" text-[#f0fdf8] shape-blur border-none mb-n-1 shape-bottom shape-fluid-x svg-shim text-white-ice">
                <svg className='bg-primarybg border-none border-b-[f0fdf8] boder-2 ' style={{ border: "none" }} viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-xbt-c27=""
                    style={{ border: "none" }} fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z"></path></svg></div>
            <div className='bg-[#f0fdf8] h-[10px] mt-[-4px]'>

            </div>
        </div>
    )
}
