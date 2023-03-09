import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img from './mr-eshan.png';
export default function Feedback() {
    return (
        <div>
            <div className='bg-[#f7f9fb] lg:px-36 md:px-11 px-2 mt-12 pb-12  '>
                <section className='text-center  mb-4 '>
                    <h2 className='text-3xl text-primarybg font-semibold '>
                        What Our Students Have To Say?
                    </h2>
                    <p className='text-[#77838f]'>Listen from our graduates.</p>
                </section>
                <div className='grid grid-cols-12 gap-5 '>
                    {
                        Array(3, 4, 4).map((i, index) => (
                            <div className='  col-span-4 lg:px-5 md:px-2 px-0 py-6 ' key={index}>
                                <AnimationOnScroll animateIn="animate__fadeIn nimate__delay-4s">
                                    <div className=' border bg-white border-[#e7e7ec] animation-all  hover:drop-shadow-lg rounded-md ' style={{ boxShadow: " rgba(149, 157, 165, 0.15) 0px 3px 6px 0px" }}>
                                        <div className=' '>
                                            <div className='flex pt-5 pl-5 items-center'>
                                                <div className=''>
                                                    <img alt='Test Demo image ' className='w-[70px] rounded-full h-[70px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pEiLahUshC6pxmaGbdWai34H9KF_bY6rdLBty_svjf_I7exWI4tGPCUXKidSlVUnbH4&usqp=CAU' />
                                                </div>
                                                <div className='pl-3 '>
                                                    <p className='text-primarybg'>Rudolph Hennry</p>
                                                    <p className='text-[#77838f] text-sm '>MLOps </p>
                                                </div>
                                            </div>
                                            <section className='mt-4 p-4 '>
                                                <p className='text-[#77838f]  '>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum et explicabo laudantium. Asperiores, magnam neque suscipit amet ad obcaecati nihil soluta quam perferendis aliquid commodi nesciunt quis natus iste, officia sit modi architecto, fugit a totam quaerat molestias eum necessitatibus provident. Vel in sapiente necessitatibus, fuga ipsam facilis culpa debitis id consequatur architecto quis numquam explicabo molestias! Veritatis, atque! Ea!    </p>
                                            </section>
                                        </div>
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
