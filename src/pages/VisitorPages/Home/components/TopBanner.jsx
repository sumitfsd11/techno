import React from 'react'
import Loader from 'components/utilsComponents/Loader';
import { useFetch } from "hooks";

export default function TopBanner({ props }) {

    const { isLoading, data } = useFetch({
        url: `/landing_banner/`,
        skipOnStart: false,
        methods: 'get',
    })

    return (
        <React.Fragment>
            {
                isLoading ? (<Loader />) : (
                    <div className='banner'>
                        <div className=' bg-primarybg'>
                            <div className='lg:px-36 pt-10 '>
                                <div className='grid grid-cols-12 mt-4 py-2 '>
                                    <div className='lg:col-span-6  md:col-span-6 col-span-12  '>
                                        <div className=' flex items-center '>
                                            <div className='grid grid-cols-12'>
                                                <div className='lg:col-span-9 md:col-span-9 col-span-12'>
                                                    <div className='grid'>
                                                        <div className='m-auto'>
                                                            <img className='lg:hidden md:hidden block w-full  ' src={props?.banner_img_sec ?? data?.response?.banner_img_sec} alt="loading" />
                                                        </div>
                                                    </div>
                                                    <section className=' '>
                                                        <h2 className='lg:pt-32 md:pt-10  lg:px-0 md:px-0 px-4 text-title-bg lg:text-7xl md:text-6xl text-5xl font-semibold '>{props?.title ?? data?.response?.title}</h2>
                                                        <h2 className='text-white  lg:text-4xl md:text-4xl text-3xl font-light mt-4 mb-2 lg:px-0 md:px-0 px-4 '>{props?.sub_title ?? data?.response?.sub_title} </h2>
                                                    </section>
                                                </div>
                                                <div className=''>
                                                </div>
                                                <div className='lg:col-span-9 md:col-span-9 col-span-12 mt-2'>
                                                    <article className='text-white  lg:px-0 md:px-0 px-4 pr-10  lg:text-base md:text-sm text-sm '>
                                                        {props?.des ?? data?.response?.des}
                                                    </article>
                                                    <section className='mt-3 text-white'>
                                                        <div className='flex cursor-pointer justify text-[#77838f] text-sm'>
                                                            <div className='mt-[1.5px] mr-2'>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' col-span-6'>
                                        <div className='px-2 '>
                                            <img className='w-full h-auto p-3 lg:inline md:inline hidden' src={props?.banner_img_sec ?? data?.response?.banner_img_sec} alt="loading" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ border: "none" }} className=" text-[#f0fdf8] shape-blur border-none mb-n-1 shape-bottom shape-fluid-x svg-shim text-white-ice">
                            {/* <svg className='bg-primarybg border-none border-b-[f0fdf8] boder-2 ' style={{ border: "none" }} viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-xbt-c27=""
                            style={{ border: "none" }} fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z"></path>
                        </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2e7aa5" fill-opacity="1" d="M0,64L80,53.3C160,43,320,21,480,42.7C640,64,800,128,960,133.3C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                        </div>
                        <div className='bg-[#f0fdf8] h-[10px] mt-[-4px]'>

                        </div>
                    </div>
                )
            }
        </React.Fragment>

    )
}
