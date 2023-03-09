import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ApplyBanner() {
    return (
        <div>

            <div className='grid bg-white' style={{ background: 'url(https://www.izaanschool.com/assets/img/illustrations/illustration-5.jpg)', backgroundPosition: "center", height: "60vh", backgroundSize: "cover" }}>
                <AnimationOnScroll animateIn="animate__slideInUp nimate__delay-4s">
                    <div className='grid h-full'>
                        <div className='m-auto'>
                            <div className='nowrap text-primarybg text-4xl '>Limitless Learning, More Possibilities</div>
                            <section className='mt-3'>
                                <p className='text-[#77838f] text-center '>Launch your tech career</p>
                            </section>
                            <div className='grid mt-7'>
                                <button className='m-auto  bg-primarybg hover:bg-green-700 text-white font-bold py-4 lg:px-16 md:px-10  rounded-xl '>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}
