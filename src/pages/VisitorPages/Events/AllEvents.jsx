import React from 'react'
import CouserBanner from '../components/Banner';
import { useFetch } from "hooks";
import { Img_ } from 'utils/common.utils';
import moment from 'moment';
import Loader from 'components/utilsComponents/Loader';
import { useNavigate } from 'react-router-dom';
import { PaginationWrapper } from 'components/index';
import { Pagination } from 'antd'
export default function AllEvents() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = React.useState(1)
    const {  data } = useFetch({
        url: `/landing_event_layout/`,
        skipOnStart: false,
        methods: 'get',
    })


    const { isLoading, data: dataRes, callFetch } = useFetch({
        url: `/event_list/`,
        skipOnStart: false,
        methods: 'get',
    })
    const redirect__ = React.useCallback((path) => {
        navigate(path)
    }, [navigate])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/event_list/?page=${a}&status=Published`,
            method: 'get'
        })
    }, [callFetch])

    const EventCard = React.memo(({ props }) => (
        <React.Fragment>

            <div className=' card-event cursor-pointer  w-ful rounded-md p-3 bg-white border border-[#c0c0c08b]' onClick={() => redirect__(`/event/${props?.id}`)}>
                <div className='flex justify-between'>
                    <div className=''>
                        <div className='flex  items-center'>
                            <div className=''>
                                <img alt='Test Demo image ' className='w-[170px] rounded-md m-auto  h-[140px]' src={Img_(props?.backgroundImage)} />
                            </div>
                            <div className='px-3  '>
                                <h3 className='text-primarybg text-xl font-semibold mb-2 '>{props?.title ?? data?.response?.title}</h3>
                                <div className='mt-2'>
                                    <div className='grid grid-cols-12 mt-2 pr-3 '>
                                        <div className='lg:col-span-6 md:col-span-6 col-span-6'>
                                            <div className='flex justify text-[#77838f] text-sm'>
                                                <div className='mt-[1.5px] mr-2'>
                                                    {/* <IconProvider className={'text-base text-[#77838f]'}>
                                                        <FaBookReader />
                                                    </IconProvider> */}
                                                </div>
                                                <div className='text-sm'>{moment(props?.created_on).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                            </div>
                                        </div>
                                        <div className='lg:col-span-6 md:col-span-6 col-span-6'>

                                            <div className='flex justify text-[#77838f] text-sm'>
                                                <div className='mt-[1.5px] mr-2'>
                                                    {/* <IconProvider className={'text-base text-[#77838f]'}>
                                                        <FiClock />
                                                    </IconProvider> */}
                                                </div>
                                                <div className='text-sm'> {props?.subtitle} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[150px] my-2 '>
                        <div className='grid h-full w-full text-center rounded-md bg-primarybg '>
                            <h2 className='text-2xl font-semibold  m-auto  text-white '>{moment(props?.created_on).format("MMM Do YY")}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
    return (
        <div>
            {
                isLoading ? (<Loader />) : (
                    <React.Fragment>
                        <CouserBanner props={{
                            bg: data?.response?.bg,
                            title: data?.response?.title,
                            des: data?.response?.des,
                        }} />
                        <div className='lg:px-10 md:px-10 px-2'>
                            <div className='grid grid-cols-12 gap-10 mt-16'>
                                <React.Fragment>
                                    {
                                        dataRes?.response?.results?.map((i, index) => (
                                            <React.Fragment key={index}>
                                                <div key={index} className=' lg:col-span-6 md:col-span-12 col-span-12'>
                                                    {/* <AnimationOnScroll animateIn="animate__slideInUp nimate__delay-4s"> */}
                                                    <EventCard props={i} />
                                                    {/* </AnimationOnScroll> */}
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            </div>
                            <div className='lg:px-10 md:px-5 px-1 mt-10'>
                                <PaginationWrapper labelText={` Page Number ${dataRes?.response?.current_page ?? '--'} of ${dataRes?.response?.page_count ?? '--'}`} >
                                    <Pagination showSizeChanger={false}
                                        defaultCurrent={1}
                                        current={currentPage}
                                        defaultPageSize={10}
                                        total={dataRes?.response?.page_count}
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
