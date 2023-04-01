import React from 'react'
import CouserBanner from "pages/VisitorPages/components/Banner";
export default function About() {
    return (
        <React.Fragment>
            <CouserBanner />
            <div className='lg:px-40 md:px-10 px-2'>
                <div className='mt-[20px] bg-white lg:mx-20 py-10   md:mx-4 mx-0  rounded-md '>
                    <section className='text-center'>
                        <article>
                            <h2 className='text-3xl font-semibold '>Breaking Into Tech at Islamic Center of Irving</h2>
                            <div className='grid mt-4'>
                                <div className='m-auto'>
                                    <div className='flex my-2'>
                                        <div className='mx-2 '>
                                            <button className='bg-[#ffc78b] text-white italic py-1 font-normal px-4 rounded-full text-sm '>
                                                Andrew Nilson
                                            </button>
                                        </div>
                                        <div className='mx-2 text-sm pt-1 '>
                                            Sunday 12-04-2023 , 03:40AM
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
