import React from 'react'

export default function Footer() {


    const LeftSideFooter = React.memo(() => {
        return (
            <React.Fragment>
                <div className=' lg:px-3 md:px-2 px-4'>
                    <section className={` text-3xl my-2 text-white`}>
                        Technomatic Academy
                    </section>
                    <section className='my-2 text-white text-sm'>
                        6600 Chase Oaks Boulevard,Suite 150
                        Plano, Texas 75023, United States of America
                    </section>
                    <section className='my-2 text-white'>
                        +1 469 606-9699
                    </section>
                    <section className='my-2 text-white'>
                        info@technoacademy.com
                    </section>

                </div >
            </React.Fragment>
        )
    });

    const RightSideFooter = React.memo(() => {
        return (
            <React.Fragment>
                <div className=' lg:px-3 md:px-2 px-4'>
                    <section className={` text-3xl my-2 text-white`}>
                        Technomatic Academy
                    </section>
                    <section className='my-2 text-white text-sm'>
                        6600 Chase Oaks Boulevard,Suite 150
                        Plano, Texas 75023, United States of America
                    </section>
                    <section className='my-2 text-white'>
                        +1 469 606-9699
                    </section>
                    <section className='my-2 text-white'>
                        info@technoacademy.com
                    </section>

                    <section className='my-2 '>
                        <form  >
                            <div className=' flex'>
                                <input required type="text" className='peer h-12  w-full rounded-l-lg bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all text-[#6b6a6a] duration-200 ease-in-out focus:bg-white focus:ring-2 text-sm ' /><button type='="submit' className=' bg-[#fdc25e] px-3 py-2 text-sm rounded-r-lg h-12 '>Subscribe</button>
                            </div>
                        </form>
                    </section>
                </div >
            </React.Fragment>
        )
    });

    return (
        <React.Fragment>
            <footer className='  mt-16 relative'>
                <div className='z-[1] bg-[#fff]  h-[10px] mb-[-5px]'>
                </div>
                <div _ngcontent-htc-c25="" className="shape bg-primarybg rotate-180 pt-5 shape-blur mb-n-1 shape-top shape-flip-both svg-shim text-white mt-n-1">
                    <svg _ngcontent-htc-c25="" viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path _ngcontent-htc-c25="" fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z">
                        </path>
                    </svg>
                </div>
                <div className='bg-primarybg lg:px-36 pb-8 md:px-5'>
                    <footer className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12  gap-4'>
                        <div className=' col-span-4'>
                            <LeftSideFooter />
                        </div>
                        <div className='col-span-4'>
                            <div className='grid  grid-cols-12 '>
                                <section className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div className=''>
                                        <strong className='text-white text-lg '>
                                            Our Company
                                        </strong>
                                        <section>
                                            {
                                                Array(5).fill().map((_, index) => (
                                                    <li key={index} className="list-none text-sm my-2">
                                                        <a className=' text-white decoration-none '>
                                                            Our Company
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </section>
                                    </div>
                                </section>
                                <section className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div className=''>
                                        <strong className='text-white text-lg '>
                                            Our Company
                                        </strong>
                                        <section>
                                            {
                                                Array(5).fill().map((_, index) => (
                                                    <li key={index} className="list-none text-sm my-2">
                                                        <a className=' text-white decoration-none '>
                                                            Our Company
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <RightSideFooter />
                        </div>
                    </footer>

                    <footer className=' mt-4 inner-section border-t border-white'>
                        <div className='lg:flex md:flex block lg:justify-between md:justify-between'>
                            <div className='text-white text-sm lg:mt-4 mt-2 '>
                                Copyright © 2023 Technomatic Academy . All Rights Reserved.
                            </div>
                            <div className='text-white text-sm lg:mt-4 mt-2 '>

                            </div>
                        </div>
                    </footer>
                </div>
            </footer>
        </React.Fragment>
    )
}
