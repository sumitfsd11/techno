import React from 'react'
import { TextField, Button, TextArea, Selector } from 'components';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import CouserBanner from "pages/VisitorPages/components/Banner";
export default function ApplyForm() {
    const methods = useForm({
        // resolver:
        defaultValues: {
            firstName: "",
            lastName: "",
            location: "",
            contact_number: "",
            enquiry_dec: ""
        }
    })

    const { handleSubmit, control, setError, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        console.log(data, "===")
    }, [])

    return (
        <div>
            <CouserBanner />
            <div>
                <div className='lg:px-64 md:px-10 px-2'>
                    <React.Fragment>
                        <div className='   mb-5'>
                            <div className='mt-[90px]   bg-white lg:mx-20 py-5   md:mx-4 mx-0  rounded-md '>
                                <section className='text-center '>
                                    <article>
                                        <h2 className='text-3xl font-semibold '>Apply Technomatic Academy</h2>
                                        <div className='grid mt-1'>
                                            <div className='m-auto'>
                                                <div className='flex '>
                                                    <div className='mx-2 text-sm pt-1 '>
                                                        Note: Your privacy is very important to us. To better serve you, the form information you enter is recorded in real time.
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
                                                    name="FristName"
                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextField type={"text"} error={error}  {...field} name={"FristName"} placeholder={"Frist Name"} className={"w-full pl-6"} />
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
                                                    name="location"
                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextField type={"text"} error={error}  {...field} name={"location"} placeholder={"Pincode "} className={"w-full pl-6"} />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                            <div className='form-control mb-2 '>
                                                <Controller
                                                    control={control}
                                                    name="country"
                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <Selector type={"text"} defaultValues={field.value ?? null} label={"Country"} error={error} selectionOption={["India", "Pakistan"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
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
                                                    name="email"
                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextField type={"email"} error={error}  {...field} name={"email"} placeholder={"Email"} className={"w-full pl-6"} />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        {/* contact_number */}
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
        </div>
    )
}
