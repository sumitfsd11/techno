import React from 'react'
import CouserBanner from "pages/VisitorPages/components/Banner";
import Loader from 'components/utilsComponents/Loader';
import { useFetch } from "hooks";
import moment from 'moment';
import { useParams } from 'react-router-dom';
export default function Blog() {
    const {id} = useParams()
    const { isLoading, data } = useFetch({
        url: `/blog/${id}`,
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
        <React.Fragment>
            {
                isLoading ? (<Loader />) : (
                    <React.Fragment>
                        <CouserBanner props={{
                            title: data?.response?.title,
                            des: data?.response?.sub_des,
                            bg: data?.response?.backgroundImage
                        }} />
                        <div className='lg:px-40 md:px-10 px-2'>
                            <div className='mt-[20px] bg-white lg:mx-20 py-10   md:mx-4 mx-0  rounded-md '>
                                <section className='text-center'>
                                    <article>
                                        <h2 className='lg:text-2xl md:text-2xl text-2xl  font-semibold '>{data?.response?.title}</h2>
                                        <div className='grid mt-4'>
                                            <div className='m-auto'>
                                                <div className='flex my-2'>
                                                    <div className='mx-2 '>
                                                        <button className='bg-[#ffc78b] text-white italic py-1 font-normal px-4 rounded-full lg:text-sm md:text-sm text-xs '>
                                                        {data?.response?.user_id?.first_name +" "+data?.response?.user_id?.last_name}
                                                        </button>
                                                    </div>
                                                    <div className='mx-2 lg:text-sm md:text-sm text-xs pt-1 '>
                                                    {moment(data?.response?.created_on).format('MMMM Do YYYY, h:mm:ss a')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>
                            <div className='blog_container__ outline-none border-none mt-10 lg:px-48 md:px-10 px-2 ' contenteditable="false" dangerouslySetInnerHTML={{ __html: data?.response?.blog_content }}>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}
