import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img from './mr-eshan.png'
export default function DatailBanner() {
    return (
        <div>
            <div className='lg:px-36 md:px-11 px-2 mt-12 pb-12 '>
                <section className='text-center  mb-4 '>
                    <h2 className='text-3xl text-primarybg font-semibold '>
                        Why Study With Technomatic Academy ?
                    </h2>   
                    <p className='text-[#77838f]'>Take the first step towards your tech career with Technomatic Academy</p>
                </section>
                <div className='grid grid-cols-12 gap-7 '>
                    {
                        Array(3, 4, 4).map((i, index) => (
                            <div className='col-span-4 lg:px-12 py-6 ' key={index}>
                                <AnimationOnScroll animateIn="animate__fadeIn nimate__delay-4s">
                                    <div className=' text-center'>
                                        <div className="grid my-3 ">
                                            <img src={img} className=" w-[130px] h-auto  m-auto" alt="loading..." />
                                        </div>
                                        <h4 className="text-primarybg font-semibold">Flexible Learning</h4>
                                        <section className='mt-4'>
                                            <p className='text-[#77838f]  '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore laboriosam unde nam labore similique iste iure neque voluptate repudiandae..
                                            </p>
                                        </section>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
