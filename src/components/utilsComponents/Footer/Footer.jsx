import React from 'react'
import SocialiconDist from '../SocialiconDist/SocialiconDist';
import { useFetch } from 'hooks';
import { toast } from 'react-hot-toast';
export default function Footer({ props }) {
    const [email, setEmail] = React.useCallback('')
    const { data } = useFetch({
        url: `/social_media/`,
        skipOnStart: false,
    })
    const { data: responseData } = useFetch({
        url: `/footer/`,
        skipOnStart: false,
    })

    const onSuccess = React.useCallback((response) => {
        toast.success("Subscribed Successfully !")
    }, [])

    const onFailure = React.useCallback((response) => {

    }, [])

    const { isLoading, callFetch } = useFetch({
        url: `/footer/`,
        skipOnStart: true,
        method: 'post',
        onSuccess,
        onFailure
    })

    const subscribeFunction = React.useCallback((e) => {
        e.preventDefault()
        let formData = {
            email: email
        }
        callFetch({
            url: '/subscriber/',
            method: 'post',
            data: formData
        })
    }, [callFetch, email])

    let data__ = props ?? responseData?.response


    const LeftSideFooter = React.memo(() => {
        return (
            <React.Fragment>
                <div className=' lg:px-3 md:px-2 px-4'>
                    <section className={` text-3xl my-2 text-white`}>
                        {data__?.title_one}
                    </section>
                    <section className='my-2 text-white text-sm'>
                        {data__?.address_line_1}
                    </section>
                    <section className='my-2 text-white'>
                        {data__?.footer_phone}
                    </section>
                    <section className='my-2 text-white'>
                        {data__?.footer_email}
                    </section>

                </div >
            </React.Fragment>
        )
    }, []);

    const RightSideFooter = React.memo(() => {
        return (
            <React.Fragment>
                <div className=' lg:px-3 md:px-2 px-4'>
                    <section className={` text-3xl my-2 text-white`}>
                        {data__?.title_two}
                    </section>
                    <section className='my-2 text-white text-sm'>
                        {data__?.address_line_2}
                    </section>
                    <section className='my-2 text-white'>
                        {data__?.footer_phone}
                    </section>
                    <section className='my-2 text-white'>
                        {data__?.footer_email}
                    </section>

                    <section className='my-2 '>
                        <form onSubmit={subscribeFunction} >
                            <div className=' flex'>
                                <input required type="email" onChange={(e) => setEmail(e?.target?.value)} className='peer h-12  w-full rounded-l-lg bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all text-[#6b6a6a] duration-200 ease-in-out focus:bg-white focus:ring-2 text-sm ' /><button type="submit" className=' bg-[#fdc25e] px-3 py-2 text-sm rounded-r-lg h-12 '>{isLoading ? 'Loading...' : 'Subscribe'}</button>
                            </div>
                        </form>
                    </section>
                </div >
            </React.Fragment>
        )
    }, []);

    return (
        <React.Fragment>
            <footer className='  mt-16 relative'>
                <div className='z-[1] bg-[#fff]  h-[10px] mb-[-5px]'>
                </div>
                <div _ngcontent-htc-c25="" className="shape   pt-5 shape-blur mb-n-1 shape-top shape-flip-both svg-shim text-white mt-n-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(127 0 42)" fill-opacity="1" d="M0,128L40,144C80,160,160,192,240,208C320,224,400,224,480,218.7C560,213,640,203,720,208C800,213,880,235,960,229.3C1040,224,1120,192,1200,192C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                </div>
                <div className='bg-primarybg lg:px-36 pb-8 md:px-5'>
                    <footer className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12  gap-4'>
                        <div className=' col-span-4'>
                            <LeftSideFooter />
                        </div>
                        <div className='col-span-4'>
                            <div className='grid  grid-cols-12 '>
                                <section className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div className=''>
                                        <strong className='text-white text-lg '>
                                            {data__?.columns_one}
                                        </strong>
                                        <section>
                                            {
                                                data__?.column_one_field.map((i, index) => (
                                                    <li key={index} className="list-none text-sm my-2">
                                                        <a href={i?.link} className=' text-white decoration-none '>
                                                            {i?.title}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </section>
                                    </div>
                                </section>
                                <section className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div className=''>
                                        <strong className='text-white text-lg '>
                                            {data__?.columns_two}
                                        </strong>
                                        <section>
                                            {
                                                data__?.column_two_field.map((i, index) => (
                                                    <li key={index} className="list-none text-sm my-2">
                                                        <a href={i?.link} className=' text-white decoration-none '>
                                                            {i?.title}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <RightSideFooter />
                        </div>
                    </footer>

                    <footer className=' mt-4 inner-section border-t border-white'>
                        <div className='lg:flex md:flex block lg:justify-between md:justify-between'>
                            <div className='text-white text-sm lg:mt-4 mt-2 '>
                                {data__?.right_reserved}
                            </div>
                            <div className='text-white text-sm lg:mt-4 mt-2 '>
                                <SocialiconDist props={data?.response?.message} />
                            </div>
                        </div>
                    </footer>
                </div>
            </footer>
        </React.Fragment>
    )
}
