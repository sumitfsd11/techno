import React from 'react'
import CouserBanner from '../components/Banner';
import { useFetch } from "hooks";
import moment from 'moment';
import { useParams } from 'react-router-dom';
import Loader from 'components/utilsComponents/Loader';
export default function Events() {
    const { id } = useParams()
    const { isLoading, data } = useFetch({
        url: `/event_content_test/${id}`,
        skipOnStart: false,
        methods: 'get',
    })


    React.useInsertionEffect(() => {
        if (window) {
            const tag = document.getElementsByTagName("div");
            for (let i = 0; i < tag.length; i++) {
                tag[i].setAttribute("contenteditable", "false");
                tag[i].setAttribute("contentEditable", "false");
            }
        }
    })

    return (
        <div>
            {
                isLoading ? (<Loader />) : (
                    <React.Fragment>
                        <CouserBanner props={{
                            title: data?.response?.title,
                            des: data?.response?.sub_des,
                        }} />
                        <div className='lg:px-40 md:px-10 px-2'>
                            <div className='mt-[-80px] bg-white lg:mx-20 py-10  drop-shadow-lg md:mx-4 mx-0  rounded-md '>
                                <section className='text-center'>
                                    <article>
                                        <h2 className='text-3xl font-semibold '>{data?.response?.title}</h2>
                                        <div className='grid mt-4'>
                                            <div className='m-auto'>
                                                <div className='flex my-2'>
                                                    <div className='mx-2 '>
                                                        <button className='bg-[#ffc78b] text-white  py-1 font-normal px-4 rounded-full text-sm '>
                                                            {moment(data?.response?.schedule).format('MMMM Do YYYY, h:mm:ss a')}
                                                        </button>
                                                    </div>
                                                    <div className='mx-2 text-sm pt-1 '>
                                                        {moment(data?.response?.created_on).format('MMMM Do YYYY, h:mm:ss a')}
                                                        {/* moment created_on */}
                                                    </div>
                                                    <div className='mx-2 '>
                                                        <button className=' bg-[#8c98a4] text-white  py-1 font-normal px-4 rounded-full text-sm'>
                                                            {data?.response?.subtitle}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>

                            <div className='blog_container__ outline-none border-none mt-10 lg:px-48 md:px-10 px-2 ' contenteditable="false" dangerouslySetInnerHTML={{ __html: data?.response?.event_content }}>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}
