import React from 'react'
import CouserBanner from '../components/Banner';
import { useFetch } from "hooks";
import { Img_ } from 'utils/common.utils';
import moment from 'moment';
// import { useParams } from 'react-router-dom';
import Loader from 'components/utilsComponents/Loader';
import { useNavigate } from 'react-router-dom';
import { PaginationWrapper } from 'components/index';
import { Pagination } from 'antd'
export default function AllBlogs() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = React.useState(1)
    const { data: dataRes } = useFetch({
        url: `/blog_layout/`,
        skipOnStart: false,
        methods: 'get',
    })

    const { isLoading, data , callFetch } = useFetch({
        url: `/blog_list/?status=Published`,
        skipOnStart: false,
        methods: 'get',
    })
    const redirect__ = React.useCallback((path) => {
        navigate(path)
    }, [navigate])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/blog_list/?page=${a}&status=Published`,
            method: 'get'
        })
    }, [callFetch])


    return (
        <div>
            {
                isLoading ? (<Loader />) : (
                    <React.Fragment>
                        <CouserBanner props={{
                            bg: dataRes?.response?.bg,
                            title: dataRes?.response?.title,
                            des: dataRes?.response?.des,
                        }} />
                        <div className='lg:px-10 md:px-10 px-2'>
                            <div className='grid grid-cols-12 gap-10 mt-16'>
                                <React.Fragment>
                                    {
                                        data?.response?.results?.map((i, index) => (
                                            <React.Fragment key={index}>
                                              <div className='col-span-4' key={index}>
                                                <React.Fragment>
                                                    <div className="mx-auto px-4 py-8 max-w-xl my-1">
                                                        <div onClick={() => redirect__(`/blog/${i?.id}`)} className="bg-white shadow-xl hover:shadow-2xl cursor-pointer rounded-lg mb-6 tracking-wide">
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
                            </div>
                            <div className='lg:px-10 md:px-5 px-1 mt-10'>
                                <PaginationWrapper labelText={` Page Number ${data?.response?.current_page ?? '--'} of ${data?.response?.page_count ?? '--'}`} >
                                    <Pagination showSizeChanger={false}
                                        defaultCurrent={1}
                                        current={currentPage}
                                        defaultPageSize={10}
                                        total={data?.response?.page_count}
                                        onChange={paginationAction} />
                                </PaginationWrapper>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    )
}
