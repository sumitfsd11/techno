import React from 'react'
// import { IconProvider } from '../../../utils/common.utils';
// import {AiOutlineSlack} from "react-icons/ai"
import imgs_growth from './png_tree.png'
export default function TopBanner() {
    return (
        <div className='banner'>
            <div className=' bg-primarybg'>
                <div className='lg:px-36 pt-10 '>
                    <div className='grid grid-cols-12 mt-4 py-2 '>
                        <div className='col-span-6 flex '>
                            <div className=' flex items-center '>
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
                                                <div className=' text-white '> Join Technomatic Youtube channel </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-6'>
                            <div className='px-2 '>
                                <img className='w-full h-auto p-3' src={imgs_growth} alt="loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ border: "none" }} className=" text-[#f0fdf8] shape-blur border-none mb-n-1 shape-bottom shape-fluid-x svg-shim text-white-ice">
                {/* <svg className='bg-primarybg border-none border-b-[f0fdf8] boder-2 ' style={{ border: "none" }} viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-xbt-c27=""
                    style={{ border: "none" }} fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z"></path>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(127 0 42)" fill-opacity="1" d="M0,64L80,53.3C160,43,320,21,480,42.7C640,64,800,128,960,133.3C1120,139,1280,85,1360,58.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className='bg-[#f0fdf8] h-[10px] mt-[-4px]'>

            </div>
        </div>
    )
}
