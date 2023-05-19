import React from 'react'

export default function CouserBanner({props}) {
    console.log(" inner a bannner ", props)
    
    return (
        <div>
            
            <div className='h-[70vh] pb-4' style={{ backgroundImage:`linear-gradient(45deg,rgba(245,70,66, 0.75),rgba(8,83,156, 0.75)), url(${props?.bg?? 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg'})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className='h-full flex items-center'>
                    <section className='lg:pl-[5%] pl-[2%] lg:w-[35%] md:w-[40%] '>
                        <h2 className='text-3xl mb-2 font-semibold text-white'>
                            {props?.title}
                        </h2>
                        <article className='text-white '>
                            {props?.des}
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}
