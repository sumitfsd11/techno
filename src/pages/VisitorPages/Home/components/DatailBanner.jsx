import React from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useFetch } from 'hooks';
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function DatailBanner({ props }) {

    const { data } = useFetch({
        url: `/landing_feature_layout/`,
        skipOnStart: false,
        methods: 'get',
    })
    // landing_feature_lc
    const { isLoading, data: resData } = useFetch({
        url: `/landing_feature_lc/?status=Published`,
        skipOnStart: false,
        methods: 'get',
    })

    return (
        <div>
            <LoaderWrapper isLoading={isLoading} component={(
                <React.Fragment>
                    <div className='lg:px-36 md:px-11 px-2 mt-12 pb-12 '>
                        <section className='text-center  mb-4 '>
                            <h2 className='text-3xl text-primarybg font-semibold '>
                                {props?.title ?? data?.response?.title}
                            </h2>
                            <p className='text-[#77838f]'>{props?.des ?? data?.response?.des}</p>
                        </section>
                        <div className='grid grid-cols-12 gap-7 '>
                            {
                                resData?.response?.map((i, index) => (
                                    <div className='col-span-4 lg:px-12 py-6 ' key={index}>
                                        {/* <AnimationOnScroll animateIn="animate__fadeIn nimate__delay-4s"> */}
                                        <div className=' text-center'>
                                            {
                                                i?.feature_img_sec && (
                                                    <div className="grid my-3 ">
                                                        <img src={i?.feature_img_sec} className=" w-[130px] h-auto  m-auto" alt="loading..." />
                                                    </div>
                                                )
                                            }

                                            <h4 className="text-primarybg font-semibold">{i?.title}</h4>
                                            <section className='mt-4'>
                                                <p className='text-[#77838f]  '>
                                                    {i?.des}
                                                </p>
                                            </section>
                                        </div>
                                        {/* </AnimationOnScroll> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </React.Fragment>
            )} />
        </div>
    )
}
