import React from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button } from 'components';
import { socialUtils } from './utils';
export default function SocialLink() {

    const methods = useForm({
        // resolver:,
        defaultValues: {
            instagram: "",
            twitter: "",
            linkedin: "",
            sharechart: "",
            youtube: "",
        }

    })
    const { control, handleSubmit, setValue, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        console.log(data, "it is your name ")
    }, [])

    return (
        <React.Fragment>
            <div className=' mt-6 lg:px-10 md:px-5 px-2 '>
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Social Media Links #</h2>
                <FormProvider {...methods}>
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
                                className={`w-[150px] bg-primarybg rounded-full `} type={'submit'}
                            //   isDisabled={!isDirty || !isValid}
                            >{'UPDATE'}</Button>
                        </div>
                    </div>
                </FormProvider>
            </div>
        </React.Fragment>
    )
}
