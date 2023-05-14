import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from "hooks"
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function ApplyBanner({ props }) {
    const navigate = useNavigate()

    const { isLoading, data } = useFetch({
        url: `/landing_apply_section/`,
        skipOnStart: false,
        methods: 'get',
    })

    const redirect__ = React.useCallback((option) => {
        option && navigate(option)
    }, [navigate])

    return (
        <div>
            <LoaderWrapper isLoading={isLoading} component={(
                <React.Fragment>
                    <div className='grid bg-white' style={{ backgroundImage: `linear-gradient(45deg,rgba(245,70,66, 0.75),rgba(8,83,156, 0.75)), url(${props?.banner_img_sec ?? data?.response?.banner_img_sec ?? 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg'})`, backgroundPosition: "center", height: "60vh", backgroundSize: "cover" }}>
                        <div className='grid h-full'>
                            <div className='m-auto text-center'>
                                <div className='nowrap text-primarybg text-4xl '>{props?.title ?? data?.response?.title}</div>
                                <section className='mt-3'>
                                    <p className='text-[#77838f] text-center '>{props?.des ?? data?.response?.des}</p>
                                </section>
                                <div className='grid mt-7'>
                                    <button className='m-auto  bg-primarybg hover:bg-green-700 text-white font-bold py-4 lg:px-16 md:px-10  rounded-xl ' onClick={() => redirect__('/apply')}>{props?.btn_name ?? data?.response?.btn_name}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )} />

        </div>
    )
}
