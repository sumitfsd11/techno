import React from 'react'
import { TextField, Button, Selector, TextArea } from 'components';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import CouserBanner from "pages/VisitorPages/components/Banner";
import { useFetch } from "hooks";
import { yupResolver } from '@hookform/resolvers/yup';
import { applyValidation , applyValidation_wider } from 'utils/validation';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/utilsComponents/Loader';
export default function ApplyForm() {
    const [is_wider_form, setFormWider] = React.useState(false)
    const navigate = useNavigate()
    const methods = useForm({
        resolver: yupResolver(is_wider_form? applyValidation_wider :applyValidation),
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
    }, [navigate])

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
    const { handleSubmit, control,  watch, formState: { isDirty } } = methods
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
        // callFetch({
        //     url: '/apply/',
        //     method: 'post',
        //     data: formData
        // })
    }, [])

    React.useEffect(() => {
        if (watch('course')==='Road To Amazon') {
            setFormWider(false)
        }else {
            setFormWider(true)
        }
    }, [is_wider_form , watch])

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

                                                    <div className=' grid grid-cols-12 gap-3 visible' id='step1form'>
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
                                                    </div>
                                                    <div className=' mt-5 grid grid-cols-12 gap-3 ' id="step2form">
                                                        <div className='col-span-12'>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="course"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <Selector {...field} defaultValues={field.value ?? null} label={"Interested in studying"} error={error} selectionOption={["Road To Amazon", "QAAE", "DevOps", "Data Analytics", "Cyber Security", "DevOps For Fresher", "I'm not Sure"]} name={"course"} placeholder={"Interested in studying"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                        <React.Fragment>
                                                            {
                                                                watch('course') === 'Road To Amazon' ? (
                                                                    <React.Fragment>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="current_role"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <Selector {...field} defaultValues={field.value ?? null} label={"Select your current Job Role."} error={error} selectionOption={["Fresh Graduate", "Software QA Automation Engineer", "DevOps Engineer", "Software Engineer", "Others"]} name={"current_role"} placeholder={"Current Job Role"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>

                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="linkedin_profile"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextField type={"text"} error={error}  {...field} name={"linkedin_profile"} placeholder={"Linkedin Profile"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="exprience"
                                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextField type={"text"} error={error}  {...field} name={"exprience"} placeholder={"Years of professional experience"} className={"w-full pl-6"} />
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                            <div className='form-control mb-2 '>
                                                                                <Controller
                                                                                    control={control}
                                                                                    name="whyInterested"
                                                                                    render={({ field,
                                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                        <TextArea type={"text"}
                                                                                            error={error}  {...field}
                                                                                            name={"whyInterested"}
                                                                                            // icon={<MailSVG />}
                                                                                            placeholder={"Let us know why you are interested in this program."} className={"w-full pl-6"} />
                                                                                    )} />
                                                                            </div>
                                                                        </div>

                                                                    </React.Fragment>
                                                                ) : (
                                                                    <React.Fragment>{
                                                                        watch('course') === "DevOps" || watch('course') === 'QAAE' || watch('course') === "Data Analytics" || watch('course') === "Cyber Security" || watch('course') === "DevOps For Fresher" || watch('course') === "I'm not Sure" ? (
                                                                            <React.Fragment>
                                                                                <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="education"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Highest level of education you have completed?"} error={error} selectionOption={["High School or GED", "College", "Graduate School", "Post-Graduate Schoolr"]} name={"education"} placeholder={"Highest level of education you have completed?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="beleieveOnInstructor"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Do you believe our Instructor can make you zero to hero?"} error={error} selectionOption={["Yes", "No"]} name={"beleieveOnInstructor"} placeholder={"Do you believe our Instructor can make you zero to hero?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="ProfessionalTraining"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Do you Know this is a professional training, not a school course?"} error={error} selectionOption={["Yes", "No"]} name={"ProfessionalTraining"} placeholder={"Do you Know this is a professional training, not a school course?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="workingHour"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"If employed, total hours of work per week?"} error={error} selectionOption={[">40 Hrs", "<40 Hrs"]} name={"workingHour"} placeholder={"If employed, total hours of work per week?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="intraction"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Do you thinnk your interaction is part of training?"} error={error} selectionOption={["Yes", "No"]} name={"intraction"} placeholder={"Do you thinnk your interaction is part of training?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>


                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="studyTime"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Planned study time per day for the next 10-12 Weeks?"} error={error} selectionOption={["10-15 Hours /Day", "More than 15 Hours/ Day"]} name={"studyTime"} placeholder={"Planned study time per day for the next 10-12 Weeks?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>

                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="courseScope"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"You know this course land you in the world of technology?"} error={error} selectionOption={["Yes", "No"]} name={"courseScope"} placeholder={"You know this course land you in the world of technology?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="inspiration"
                                                                                            render={({ field,
                                                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextArea type={"text"}
                                                                                                    error={error}  {...field}
                                                                                                    name={"inspiration"}
                                                                                                    placeholder={"What is your inspiration for changing your career?"} className={"w-full pl-6"} />
                                                                                            )} />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="skill"
                                                                                            render={({ field,
                                                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextArea type={"text"}
                                                                                                    error={error}  {...field}
                                                                                                    name={"skill"}
                                                                                                    placeholder={"Write down IT skills if you have any."} className={"w-full pl-6"} />
                                                                                            )} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="pacework"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"What pace works for you?"} error={error} selectionOption={["Live", "Flex", "I;m not sure"]} name={"pacework"} placeholder={"What pace works for you?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="success"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Do you believe that your success is our success? "} error={error} selectionOption={["Yes", "No"]} name={"success"} placeholder={"Do you believe that your success is our success?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="hopeFromCourse"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"What do you hope to do upon completing the program?"} error={error} selectionOption={["Begin my professional career", "Start a company", "Rejoin the workforce", "Advance in my current career", "Graduate School", "Change my career", "Other"]} name={"hopeFromCourse"} placeholder={"What do you hope to do upon completing the program?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="hearFrom"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"How did you hear about us?"} error={error} selectionOption={["Events", "Direct Mail", "Online Search", "Outdoor Ad", "Review Site", "Press", "Friends and Family", "Other"]} name={"hearFrom"} placeholder={"How did you hear about us?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="workAuth"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Work Authorization in USA or Canada ?"} error={error} selectionOption={["Citizen", "Green Card / PR", "Others, if others inform us by direct email"]} name={"workAuth"} placeholder={"Work Authorization in USA or Canada ?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="workAuth"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Do you continue study for couple of weeks to get desired IT job?"} error={error} selectionOption={["Yes", "No", "May be"]} name={"workAuth"} placeholder={"Do you continue study for couple of weeks to get desired IT job?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="willing"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <Selector {...field} defaultValues={field.value ?? null} label={"Are you willing to study as a team on regular basis?"} error={error} selectionOption={["Yes", "No", "May be"]} name={"willing"} placeholder={"Are you willing to study as a team on regular basis?"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>


                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="portfolio_link"
                                                                                            render={({ field,
                                                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextArea type={"text"}
                                                                                                    error={error}  {...field}
                                                                                                    name={"portfolio_link"}
                                                                                                    placeholder={"Share links to your portfolio or social networks (Github, LinkedIn, Blog, etc.)"} className={"w-full pl-6"} />
                                                                                            )} />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="referedName"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextField type={"text"} error={error}  {...field} name={"referedName"} placeholder={"Name of the person who referred you"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="cuponCode"
                                                                                            render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextField type={"text"} error={error}  {...field} name={"cuponCode"} placeholder={"Cupon Code"} className={"w-full pl-6"} />
                                                                                            )}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-span-12'>
                                                                                    <div className='form-control mb-2 '>
                                                                                        <Controller
                                                                                            control={control}
                                                                                            name="aboutYourSelf"
                                                                                            render={({ field,
                                                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                                                <TextArea type={"text"}
                                                                                                    error={error}  {...field}
                                                                                                    name={"aboutYourSelf"}
                                                                                                    placeholder={"Tell us about yourself. Why this the right next step for you."} className={"w-full pl-6"} />
                                                                                            )} />
                                                                                    </div>
                                                                                </div>

                                                                            </React.Fragment>
                                                                        ) : (
                                                                            <React.Fragment>
                                                                            </React.Fragment>
                                                                        )
                                                                    }
                                                                    </React.Fragment>
                                                                )
                                                            }
                                                        </React.Fragment>
                                                        <div className='col-span-12'>
                                                            <div className='form-control'>
                                                                <div className='flex justify-between mt-2'>
                                                                    <div className=''>
                                                                    </div>
                                                                    <div className=''>
                                                                        <Button type='submit'
                                                                            isLoading={isLoading}
                                                                            className={`w-[170px] py-3 leading-6 drop-shadow-none shadow-none hover:drop-shadow-none hover:shadow-none bg-primarybg rounded-full text-base `}
                                                                        isDisabled={!isDirty }
                                                                        >
                                                                            {'Submit'}
                                                                        </Button>
                                                                    </div>
                                                                </div>
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
