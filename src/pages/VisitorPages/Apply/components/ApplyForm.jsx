import React from 'react'
import { TextField, Button, Selector  , TextArea} from 'components';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import CouserBanner from "pages/VisitorPages/components/Banner";
import { useFetch } from "hooks";
import { yupResolver } from '@hookform/resolvers/yup';
import { applyValidation } from 'utils/validation';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/utilsComponents/Loader';
export default function ApplyForm() {
    const navigate = useNavigate()
    const methods = useForm({
        resolver: yupResolver(applyValidation),
        mode: 'all',
    })
    const { isLoading: dataIsLoading, data } = useFetch({
        url: `/landing_apply_section/`,
        skipOnStart: false,
        methods: 'get',
    })

    const onSuccess = React.useCallback((response) => {
        if (response) {
            toast.success(response?.response?.message)
            navigate('/')
        }
    }, [])

    const onFailure = React.useCallback((error) => {
        if (error?.response) {
            toast.error(error?.response?.message)
        }
    }, [])

    const { isLoading, callFetch } = useFetch({
        url: '/apply/',
        skipOnStart: false,
        onSuccess,
        onFailure
    })
    const { handleSubmit, control, watch, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        let formData = {
            name: data?.firstName + " " + data?.lastName,
            postal_code: data?.postal_code,
            mail_id: data?.mail_id,
            dob: new Date(),
            contact_number: data?.contact_number,
            programme: data?.programme ?? "---",
            country_name: data?.country_name,
        }
        callFetch({
            url: '/apply/',
            method: 'post',
            data: formData
        })
    }, [callFetch])

    console.log(watch('course_selection'), " ===== form data ")
    return (
        <div>
            {
                dataIsLoading ? (<Loader />) :
                    (
                        <React.Fragment>
                            <CouserBanner props={{
                                bg: data?.response?.banner_img_sec,
                                title: data?.response?.title,
                                des: data?.response?.des,
                            }} />
                            <div>
                                <div className='lg:px-64 md:px-10 px-2'>
                                    <React.Fragment>
                                        <div className='   mb-5'>
                                            <div className='mt-[90px]   bg-white lg:mx-20 py-5   md:mx-4 mx-0  rounded-md '>
                                                <section className='text-center '>
                                                    <article>
                                                        <h2 className='text-3xl font-semibold '>{data?.response?.title}</h2>
                                                        <div className='grid mt-1'>
                                                            <div className='m-auto'>
                                                                <div className='flex '>
                                                                    <div className='mx-2 text-sm pt-1 '>
                                                                        {data?.response?.des}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </section>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                    <FormProvider {...methods} >
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className='grid grid-cols-12 gap-3 mb-4'>
                                                <div className='lg:col-span-12 md:col-span-12 col-span-12'>
                                                    <div className=' grid grid-cols-12 gap-3'>
                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="firstName"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"firstName"} placeholder={"First Name"} className={"w-full pl-6  "} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="lastName"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"lastName"} placeholder={"Last Name"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="mail_id"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"mail_id"} placeholder={"Mail"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="postal_code"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"postal_code"} placeholder={"Pincode"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="country_name"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <Selector {...field} defaultValues={field.value ?? null} label={"Country"} error={error} selectionOption={["India", "Nepal"]} name={"country_name"} placeholder={"Country"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="contact_number"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"contact_number"} placeholder={"Contact Number"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="course_selection"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <Selector {...field} defaultValues={field.value ?? null} label={"Select any option"} error={error} selectionOption={["hello", "Road to amazon"]} name={"country_name"} placeholder={"Select any option"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                        </div>
                                                        <React.Fragment>
                                                            {
                                                                watch('course_selection') === 'Road to amazon' ? (
                                                                    <React.Fragment>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="course_intrested"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <Selector {...field} defaultValues={field.value ?? null} label={"Select your current Job Role.*"} error={error} selectionOption={["hello", "Road to amazon"]} name={"country_name"} placeholder={"Select any option"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="linkedin"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextField type={"text"} error={error}  {...field} name={"linkedin"} placeholder={"Your Linkedin profile *"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="linkedin"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextField type={"text"} error={error}  {...field} name={"linkedin"} placeholder={"Your Linkedin profile *"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="exprience"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextField type={"text"} error={error}  {...field} name={"exprience"} placeholder={"Years of professional experience *"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="course_des"
                                                                                    render={({ field,
                                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextArea type={"text"}
                                                                                            error={error}  {...field}
                                                                                            name={"des"}
                                                                                            // icon={<MailSVG />}
                                                                                            placeholder={"Let us know why you are interested in this program. *"} className={"w-full pl-6"} />
                                                                                    )} />
                                                                            </div>
                                                                        </div>
                                                                    </React.Fragment>
                                                                ) : (
                                                                    <React.Fragment>
                                                                        else part
                                                                    </React.Fragment>
                                                                )
                                                            }
                                                        </React.Fragment>
                                                    </div>

                                                    <div className='form-control'>
                                                        <div className='flex justify-between mt-2'>
                                                            <div className=''>

                                                            </div>
                                                            <div className=''>
                                                                <Button type='submit'
                                                                    isLoading={isLoading}

                                                                    className={`w-[170px] py-3 leading-6 drop-shadow-none shadow-none hover:drop-shadow-none hover:shadow-none bg-primarybg rounded-full text-base `}
                                                                    isDisabled={!isDirty || !isValid}>
                                                                    {'Submit'}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </FormProvider>
                                </div>
                            </div>
                        </React.Fragment>
                    )

            }

        </div>
    )
}
