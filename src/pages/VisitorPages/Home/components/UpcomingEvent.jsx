import React from 'react'
import { Img_ } from 'utils/common.utils';
import { useNavigate } from 'react-router-dom';
import { useFetch } from "hooks";
import moment from 'moment';
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function UpcomingEvent({ props }) {
    const navigate = useNavigate()
    const { isLoading: isLoadingLayout, data } = useFetch({
        url: `/landing_event_layout/`,
        skipOnStart: false,
        methods: 'get',
    })

    const { isLoading, data: dataRes } = useFetch({
        url: `/event_list/`,
        skipOnStart: false,
        methods: 'get',
    })
    const redirect__ = React.useCallback((path) => {
        navigate(path)
    }, [navigate])

    const EventCard = React.memo(({ props }) => (
        <React.Fragment>
            <div className=' card-event cursor-pointer  w-ful rounded-md p-3 bg-white' onClick={() => redirect__(`/event/${props?.id}`)}>
                <div className='flex justify-between'>
                    <div className=''>
                        <div className='flex  items-center'>
                            <div className=''>
                                <img alt='Test Demo  ' className='lg:w-[170px] md:w-[160px] w-[160px] rounded-md m-auto  h-[140px]' src={Img_(props?.backgroundImage)} />
                            </div>
                            <div className='px-3  '>
                                <h3 className='text-primarybg lg:text-xl md:text-lg text-base font-semibold mb-2 '>{props?.title ?? data?.response?.title}</h3>
                                <div className='mt-2'>
                                    <div className='grid grid-cols-12 mt-2 pr-3 '>
                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                            <div className='flex justify text-[#77838f] text-sm'>
                                                <div className='mt-[1.5px] mr-2'>
                                                    {/* <IconProvider className={'text-base text-[#77838f]'}>
                                                        <FaBookReader />
                                                    </IconProvider> */}
                                                </div>
                                                <div className='lg:text-sm md:text-sm text-xs italic'>{moment(props?.created_on).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                            </div>
                                        </div>
                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                            <div className='flex justify text-[#77838f] text-sm'>
                                                <div className='mt-[1.5px] mr-2'>
                                                    {/* <IconProvider className={'text-base text-[#77838f]'}>
                                                        <FiClock />
                                                    </IconProvider> */}
                                                </div>
                                                <div className='lg:text-sm md:text-sm text-xs '> {props?.subtitle} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[150px] md:w-[150px] w-[90px] my-2 lg:inline md:inline  hidden'>
                        <div className='grid h-full w-full text-center rounded-md bg-primarybg '>
                            <h2 className='lg:text-2xl md:text-xl text-lg font-semibold  m-auto  text-white '>{moment(props?.created_on).format("MMM Do YY")}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))

    return (
        <div>
            <div className='w-full'>
                <LoaderWrapper isLoading={(isLoadingLayout || isLoading)} component={(
                    <div>
                        <div style={{ background: `url(${props?.bg ?? data?.response?.bg})`, backgroundPosition: "center", height: "auto ", backgroundSize: "cover" }} className=' lg:px-10 md:px-11 px-2 mt-12 pb-12  '>
                            <div className=''>
                                <br />
                                <div className='my-9'>
                                    <section className='text-center  mb-4 '>
                                        <h2 className='text-3xl text-white font-semibold '>
                                            {props?.title ?? data?.response?.title}
                                        </h2>
                                        <p className='text-white mt-2 '>{props?.des ?? data?.response?.des}</p>
                                    </section>
                                </div>
                                <div className='flex  justify-between'>
                                    <div className=''>

                                    </div>
                                    <div className='text-lg text-white cursor-pointer' onClick={() => redirect__(data?.response?.link)}>
                                        {props?.btn_name ?? data?.response?.btn_name} {">"}
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className='grid grid-cols-12 gap-5'>
                                <React.Fragment>
                                    {
                                        dataRes?.response?.results?.map((i, index) => (
                                            <React.Fragment key={index}>
                                                <div key={index} className=' lg:col-span-6 md:col-span-12 col-span-12'>
                                                    <EventCard props={i} />
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                )} />
            </div>
        </div>
    )
}
