import React from 'react'
// import { IconProvider } from '../../../utils/common.utils';
// import { FaBookReader } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
import { Img_ } from 'utils/common.utils';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img from "./680343.png";
import { useNavigate } from 'react-router-dom';
import { useFetch } from "hooks";
import Loader from 'components/utilsComponents/Loader';
import moment from 'moment';

export default function UpcomingEvent() {
    const navigate = useNavigate()
    const { isLoading, data } = useFetch({
        url: `/event_list/`,
        skipOnStart: false,
        methods: 'get',
    })

    const redirect__ = React.useCallback((path) => {
        navigate(path)
    }, [navigate])
    console.log(data?.response, " it is your events")
    const EventCard = React.memo(({props}) => (
        <React.Fragment>
           
            <div className=' card-event cursor-pointer  w-ful rounded-md p-3 bg-white' onClick={() => redirect__(`/event/${29}`)}>
                <div className='flex justify-between'>
                    <div className=''>
                        <div className='flex  items-center'>
                            <div className=''>
                                <img alt='Test Demo image ' className='w-[170px] rounded-md m-auto  h-[140px]' src={Img_(props?.backgroundImage)} />
                            </div>
                            <div className='px-3  '>
                                <h3 className='text-primarybg text-xl font-semibold mb-2 '>{props?.title}</h3>
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
                            <h2 className='text-2xl font-semibold  m-auto  text-white '>{moment(props?.created_on).format("MMM Do YY") }</h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
    return (
        <div>
            <div>
                <div style={{ background: `url(${img})`, backgroundPosition: "center", height: "auto ", backgroundSize: "cover" }} className=' lg:px-10 md:px-11 px-2 mt-12 pb-12  '>
                    <div className=''>
                        <br />
                        <div className='my-9'>
                            <section className='text-center  mb-4 '>
                                <h2 className='text-3xl text-white font-semibold '>
                                    Upcoming Events
                                </h2>
                                <p className='text-white mt-2 '>Keep an eye on what we do from time to time</p>
                            </section>
                        </div>
                        <div className='flex  justify-between'>
                            <div className=''>

                            </div>
                            <div className='text-lg text-white cursor-pointer'>
                                Browse All {">"}
                            </div>
                        </div>
                        <br />
                    </div>
                    <div className='grid grid-cols-12 gap-10'>
                        {
                            isLoading ? (<Loader />) : (
                                <React.Fragment>
                                    {
                                        data.response?.results?.map((i, index) => (
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
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
