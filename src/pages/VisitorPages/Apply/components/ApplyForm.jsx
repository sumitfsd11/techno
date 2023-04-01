import React from 'react'
import { TextField, Button, TextArea, Selector } from 'components';
import { useForm, Controller , FormProvider } from 'react-hook-form';
import CouserBanner from "pages/VisitorPages/components/Banner";
export default function ApplyForm() {
    const methods = useForm({
        // resolver:
        defaultValues: {

        }
    })

    const { handleSubmit, control, setError, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {

    }, [])

    return (
        <div>
            <CouserBanner />
            <div>
                <FormProvider {...methods} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-12 gap-3 mb-4'>
                            <div className='lg:col-span-4 md:col-span-12 col-span-12'>
                                <div className='form-control'>
                                    <div className='w-full'>

                                    </div>
                                </div>
                            </div>
                            <div className='lg:col-span-8 md:col-span-12 col-span-12'>
                                <div className=' grid grid-cols-12 gap-3'>
                                    <div className='col-span-6'>
                                        <div className='form-control mb-2 '>
                                            <Controller
                                                control={control}
                                                name="title"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <TextField type={"text"} error={error}  {...field} name={"title"} placeholder={"Title"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </div>
                                    </div>
                               
                                </div>
                                <div className=' grid grid-cols-12 gap-3'>
                                    <div className='col-span-6'>
                                        <div className='form-control mb-2 '>
                                            <Controller
                                                control={control}
                                                name="subtitle"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <TextField type={"text"} error={error}  {...field} name={"subtitle"} placeholder={"Sub title "} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='form-control mb-2 '>
                                            <Controller
                                                control={control}
                                                name="status"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <Selector type={"text"} defaultValues={field.value ?? null} label={"Status"} error={error} selectionOption={["Draft", "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-control mb-2 '>
                                    <Controller
                                        control={control}
                                        name="sub_des"
                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                            <TextField type={"text"} error={error}  {...field} name={"sub_des"} placeholder={"Description"} className={"w-full pl-6"} />
                                        )}
                                    />
                                </div>
                                <div className='form-control'>
                                    <Controller
                                        control={control}
                                        name="meta_content"
                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                            <TextArea type={"text"} error={error}  {...field} name={"meta_content"} placeholder={"Meta Content"} className={"w-full pl-6"} />
                                        )}
                                    />
                                </div>
                                <div className='form-control'>
                                    <div className='flex justify-between mt-2'>
                                        <div className=''>

                                        </div>
                                        <div className=''>
                                            <Button type='submit'
                                                //  isLoading={isLoading} 
                                                className={`w-[140px] drop-shadow-none shadow-none hover:drop-shadow-none hover:shadow-none bg-primarybg rounded-full `} type={'submit'}
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
    )
}
