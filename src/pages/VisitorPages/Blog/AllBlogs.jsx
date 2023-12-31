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
                        <div className='sm:px-10 sm:px-10 px-2 mx-8'>
                            <div className='grid grid-cols-12 gap-4 mt-14'>
                                <React.Fragment>
                                    {
                                        data?.response?.results?.map((i, index) => (
                                            <React.Fragment key={index}>
                                              <div className='lg:col-span-4 sm:col-span-6 col-span-12' key={index}>
                                                <React.Fragment>
                                                    <div className="mx-auto px-1 py-0 max-w-lg my-0">
                                                        <div onClick={() => redirect__(`/blog/${i?.id}`)} className="bg-white shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl mb-6 tracking-wide">
                                                            <div className="md:flex-shrink-0">
                                                                <img src={Img_(i?.backgroundImage)} alt="mountains" className="w-full h-64 rounded-2xl rounded-b-none" />
                                                            </div>
                                                            <div className="px-4 py-2 mt-2">
                                                                <h2 className="font-bold text-2md text-gray-800 tracking-normal">{i?.title}</h2>
                                                                <p className="text-sm text-gray-700 px-0 mr-1">
                                                                    {i?.subtitle}  {i?.sub_des}
                                                                </p>
                                                                <div className="flex items-center justify-between mt-2 mx-6">
                                                                    <div onClick={() => redirect__(`/blog/${i?.id}`)} className="text-blue-500 text-xs -ml-6 cursor-pointer ">Show More</div>
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
