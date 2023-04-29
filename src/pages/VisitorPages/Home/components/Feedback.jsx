import React from 'react';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import {useFetch} from "hooks"
import { Rate } from 'antd';
import { Img_ } from 'utils/common.utils';
export default function Feedback({props}) {

    const {  data } = useFetch({
        url: `/feedback_layout/`,
        skipOnStart: false,
    })

    const {  data:resData } = useFetch({
        url: `/feedback_list/?status=Published`,
        skipOnStart: false,
    })

    return (
        <div>
            <div className='bg-[#f7f9fb] lg:px-36 md:px-11 px-2 mt-12 pb-12  '>
                <section className='text-center  mb-4 '>
                    <h2 className='text-3xl text-primarybg font-semibold '>
                        {props?.title??data?.response?.title }
                    </h2>
                    <p className='text-[#77838f]'>{props?.des??data?.response?.des }</p>
                </section>
                <div className='grid grid-cols-12 gap-5 '>
                    {
                        resData?.response?.map((i, index) => (
                            <div className='  col-span-4 lg:px-5 md:px-2 px-0 py-6 ' key={index}>
                                {/* <AnimationOnScroll animateIn="animate__fadeIn nimate__delay-4s"> */}
                                    <div className=' border bg-white border-[#e7e7ec] animation-all  hover:drop-shadow-lg rounded-md ' style={{ boxShadow: " rgba(149, 157, 165, 0.15) 0px 3px 6px 0px" }}>
                                        <div className=' '>
                                            <div className='flex pt-5 pl-5 items-center'>
                                                <div className=''>
                                                    <img alt='Test Demo  ' className='w-[70px] rounded-full h-[70px]' 
                                                    src={Img_(i?.profile_img)} />
                                                </div>
                                                <div className='pl-3 '>
                                                    <p className='text-primarybg'>{i?.first_name+" "+i?.last_name}</p>
                                                    <p className='text-[#77838f] text-sm '>{i?.roll} </p>
                                                    <Rate style={{fontSize:"14px"}} allowHalf disabled value={ parseFloat(i?.rating) ??0}/>
                                                </div>
                                            </div>
                                            <section className='mt-4 p-4 '>
                                                <p className='text-[#77838f]  '>
                                  {i?.feedback}  </p>
                                            </section>
                                        </div>
                                    </div>
                                {/* </AnimationOnScroll> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
