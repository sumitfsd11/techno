import React from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button } from 'components';
import { socialUtils } from './utils';
import { useFetch } from 'hooks';
import { toast } from 'react-hot-toast';
export default function SocialLink() {

    const methods = useForm({
        // resolver:,
        defaultValues: {
            Twitter: "",
            Linkedin: "",
            FaceBook: "",
            Instagram: "",
            YouTube: "",
            Discort: "",
            Slack: "",
            Snapchart: "",
        }

    })

    const onSuccess = React.useCallback((response, method) => {
        if (method === 'put') {
            toast.success('Updated successfully !')
        }
    }, [])

    const onFailure = React.useCallback((error) => {

    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/social_media/`,
        skipOnStart: false,
        methods: 'get',
        onSuccess,
        onFailure
    })

    const { control, handleSubmit, setValue, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        let formData = {
            instagram: data?.Instagram,
            twitter: data?.Twitter,
            linkedin: data?.Linkedin,
            snapchat: data?.Snapchart,
            youtube: data?.YouTube,
            slack: data?.Slack,
            telegram: data?.telegram,
            discord: data?.Discort,
            facebook: data?.Snapchart,
        }

        callFetch({
            url: `/social_media/`,
            method: 'put',
            data: formData
        })

    }, [callFetch])

    React.useEffect(() => {
        if (!isLoading) {
            let data_ = data?.response?.message;
            setValue('Instagram', data_?.instagram, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('FaceBook', data_?.facebook, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('Twitter', data_?.twitter, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('Linkedin', data_?.linkedin, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('Snapchart', data_?.snapchat, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('Slack', data_?.slack, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('Discort', data_?.discord, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('YouTube', data_?.youtube, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
        }
    }, [data, isLoading, setValue])

    return (
        <React.Fragment>
            <div className=' mt-6 lg:px-10 md:px-5 px-2 '>
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Social Media Links #</h2>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' grid grid-cols-12 gap-4 '>
                            {
                                socialUtils?.map((i, index) => (
                                    <div key={index} className='lg:col-span-4 md:col-span-6 col-span-12 flex justify-between gap-4'>
                                        <div className=' text-lg '>
                                            <div className=' bg-[#98b8e5b6] rounded-full p-2'>
                                                {i?.icon}
                                            </div>
                                        </div>
                                        <div className='w-[90%]'>
                                            <Controller control={control} name={i?.name} render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                <TextField type={"text"} error={error}  {...field} name={"title"} placeholder={i?.name} className={"w-full pl-6"} />
                                            )} />
                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                        <div className='flex justify-between mt-3'>
                            <div className=''>

                            </div>
                            <div className=''>
                                <Button
                                    isLoading={isLoading}
                                    className={`w-[150px] bg-primarybg rounded-full `} type={'submit'}
                                //   isDisabled={!isDirty || !isValid}
                                >{'UPDATE'}</Button>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </React.Fragment>
    )
}
