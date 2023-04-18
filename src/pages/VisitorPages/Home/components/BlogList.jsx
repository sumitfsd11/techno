import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Img_ } from 'utils/common.utils';
import { useFetch } from "hooks";
import Loader from 'components/utilsComponents/Loader';
import moment from 'moment';

export default function BlogList() {
    const navigate = useNavigate()

    const redirect__ = React.useCallback((option) => {
        if (option) {
            navigate(option)
        }
    }, [navigate])

    const { isLoading, data } = useFetch({
        url: `/blog_list/?status=Published`,
        skipOnStart: false,
        methods: 'get',
    })

    return (
        <div>
            <div className='lg:px-20 md:px-3 px-2 grid grid-cols-12 gap-x-8'>
                {
                    isLoading ? (<Loader />) : (
                        <React.Fragment>
                            {
                                data?.response?.results?.map((i, index) => (
                                    <React.Fragment>
                                        <div className='col-span-4' key={index}>
                                            <React.Fragment>
                                                <div className="mx-auto px-4 py-8 max-w-xl my-1">
                                                    <div onClick={()=>redirect__(`/blog/${i?.id}`)} className="bg-white shadow-xl hover:shadow-2xl cursor-pointer rounded-lg mb-6 tracking-wide">
                                                        <div className="md:flex-shrink-0">
                                                            <img src={Img_(i?.backgroundImage)} alt="mountains" className="w-full h-64 rounded-lg rounded-b-none" />
                                                        </div>
                                                        <div className="px-4 py-2 mt-2">
                                                            <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{i?.title}</h2>
                                                            <p className="text-sm text-gray-700 px-2 mr-1">
                                                            {i?.subtitle}  {i?.sub_des}
                                                            </p>
                                                            <div className="flex items-center justify-between mt-2 mx-6">
                                                                <div onClick={() => redirect__(`/blog/${i?.id}`)} className="text-blue-500 text-xs -ml-3 cursor-pointer ">Show More</div>
                                                            </div>
                                                            <div className="author flex items-center -ml-3 my-3">
                                                                <div className="user-logo">
                                                                    <img className="w-12 h-12 object-cover rounded-full mx-4  shadow" src={Img_()} alt="avatar" />
                                                                </div>
                                                                <h2 className="text-sm tracking-tighter text-gray-900">
                                                                    <div  >By {i?.first_name ?? i?.user_id?.username}</div> <span className="text-gray-600">{moment(i?.created_on).format("MMM Do YY")}</span>
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
                    )
                }
            </div>
        </div>
    )
}
