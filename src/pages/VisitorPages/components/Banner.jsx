import React from 'react'

export default function CouserBanner({props}) {
    return (
        <div>
            
            <div className='h-[70vh] pb-4' style={{ backgroundImage:`linear-gradient(45deg,rgba(245,70,66, 0.15),rgba(8,83,156, 0.14)), url(${props?.bg?? 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg'})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className='h-full flex items-center'>
                    <section className='lg:pl-[5%] pl-[2%] lg:w-[35%] md:w-[40%] lg:pt-0 md:pt-2 pt-5  '>
                        <h2 className='lg:text-3xl md:text-2xl text-2xl mb-2 font-semibold text-white'>
                            {props?.title}
                        </h2>
                        <article className='text-white text-sm '>
                            {props?.des}
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}
