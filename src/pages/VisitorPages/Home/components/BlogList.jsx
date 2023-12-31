import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Img_ } from 'utils/common.utils';
import { useFetch } from "hooks";
import Loader from 'components/utilsComponents/Loader';
import moment from 'moment';

export default function BlogList({ props }) {
    const navigate = useNavigate()

    const redirect__ = React.useCallback((option) => {
        if (option) {
            navigate(option)
        }
    }, [navigate])

    const { data: dataRes } = useFetch({
        url: `/blog_layout/`,
        skipOnStart: false,
        methods: 'get',
    })

    const { isLoading, data } = useFetch({
        url: `/blog_list/?status=Published`,
        skipOnStart: false,
        methods: 'get',
    })

    return (
        <div>
            {
                isLoading ? (<Loader />) : (             <div className='lg:px-20 md:px-3 px-2'>
                <section className='  text-center  pb-8 pt-14 '>
                    <h2 className='lg:text-3xl md:text-2xl text-2xl text-primarybg font-semibold '>
                        {props?.title ?? dataRes?.response?.title}
                    </h2>
                    <p className='text-[#77838f] lg:text-sm md:text-xs text-xs'>{props?.des ?? dataRes?.response?.des}</p>
                    <br />
                    <div className='flex  justify-between'>
                        <div className=''>

                        </div>
                        <div className='  cursor-pointer lg:text-sm md:text-xs text-xs' onClick={()=>redirect__(dataRes?.response?.link)}>
                            {props?.btn_name ?? dataRes?.response?.btn_name} {">"}
                        </div>
                    </div>
                </section>
                <div className=' grid grid-cols-12 gap-2'>
                            <React.Fragment>

                                {
                                    data?.response?.results?.map((i, index) => (
                                        <React.Fragment>
                                            <div className='lg:col-span-4 sm:col-span-6 col-span-12 ' key={index}>
                                                <React.Fragment>
                                                    <div className="mx-auto px-1 py-0 max-w-lg my-0">
                                                        <div onClick={() => redirect__(`/blog/${i?.id}`)} className="bg-white shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl mb-4 tracking-wide">
                                                            <div className="md:flex-shrink-1">
                                                                <img src={Img_(i?.backgroundImage)} alt="mountains" className="w-full h-60 rounded-2xl" />
                                                            </div>
                                                            <div className="px-4 py-2 mt-2">
                                                                <h2 className="font-bold text-2md text-gray-800 tracking-normal">{i?.title}</h2>
                                                                <p className="text-sm text-gray-700 px-0 mr-1">
                                                                    {i?.subtitle}  {i?.sub_des}
                                                                </p>
                                                                <div className="flex items-center justify-between mt-2 mx-6">
                                                                    <div onClick={() => redirect__(`/blog/${i?.id}`)} className="text-blue-500 text-xs -ml-5 cursor-pointer ">Show More</div>
                                                                </div>
                                                                <div className="author flex items-center -ml-3 my-3">
                                                                    <div className="user-logo">
                                                                        <img className="w-8 h-8 object-cover rounded-full mx-4  shadow" src={Img_()} alt="avatar" />
                                                                    </div>
                                                                    <h2 className="text-sm tracking-tighter text-gray-900">
                                                                        <div  >By {i?.first_name ?? i?.user_id?.first_name+' '+i?.user_id?.last_name}</div> <span className="text-gray-600">{moment(i?.created_on).format("MMM Do YY")}</span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            </div>
                                        </React.Fragment>
                                    ))
                                }
                            </React.Fragment>
                </div>
            </div>)
            }

        </div>
    )
}
