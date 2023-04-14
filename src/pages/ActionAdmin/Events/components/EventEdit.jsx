import React from 'react'
import styled from 'styled-components';
import { useQuill } from 'react-quilljs';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button, TextArea, Selector } from 'components';
import { ImgIcon } from 'icons';
import CouserBanner from "pages/VisitorPages/components/Banner";
import { useFetch, useAuth } from "hooks"
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function EventEdit() {
    const { quill, quillRef, editor } = useQuill();
    const { userValue } = useAuth()
    const { id } = useParams()
    const navigate = useNavigate();
    const methods = useForm({
        // resolver:,
        defaultValues: {
            title: "",
            backgroundImage: "",
            subtitle: "",
            sub_des: "",
            meta_content: "",
            event_content: "",
            eventPlace: "",
            schedule: "",
            status: ""
        }

    })

    const onSuccess = React.useCallback((response, method) => {
        if (method !== 'get') {
            navigate('/admin/event-listing')
        }
    }, [navigate])

    const onFailure = React.useCallback((error) => {
        if (error) {

        }
    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/event_content_test/${userValue?.id}`,
        skipOnStart: false,
        methods: 'get',
        onSuccess,
        onFailure
    })

    const { control, handleSubmit, setValue, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        let formData = {
            title: data?.title,
            // backgroundImage: data?.backgroundImage[0],
            user_id: userValue?.id,
            subtitle: data?.subtitle,
            sub_des: data?.sub_des,
            meta_content: data?.meta_content,
            schedule: data?.schedule,
            // status: data?.status
        }
        if (id) {
            callFetch(
                {
                    url: `/event_action/${id}`,
                    method: 'put',
                    data: formData
                }
            )
        } else {
            callFetch({
                url: `/event_action/`,
                method: 'put',
                data: formData
            })
        }
    }, [callFetch, id])

    const event__action = React.useCallback((e) => {
        let content = quill.container.outerHTML ?? null;
        if (content && quill) {
            //    quill.clipboard.dangerouslyPasteHTML(''); to clearn 
            if (id) {
                let data__ = {
                    event_content: content,
                    user_id: userValue?.id
                }
                callFetch({
                    url: `/event_action/${id}`,
                    method: 'put',
                    data: data__
                })
            } else {
                let data__ = {
                    title: " --- ",
                    event_content: content,
                    user_id: userValue?.id
                }
                callFetch({
                    url: `/event_action/`,
                    method: 'post',
                    data: data__
                })
            }
        } else {
            toast.success('Event describition can not be empty !')
        }
    }, [callFetch, id, quill])
    React.useEffect(() => {
        if (quill) {
            if (!isLoading) {
                // quill?.clipboard?.dangerouslyPasteHTML(data?.response?.event_content);
                quill.clipboard.dangerouslyPasteHTML(`${data?.response?.event_content}`);
            }
        }
    }, [isLoading, data, quill])



    React.useEffect(() => {
        if (id) {
            callFetch({ url: `/event_content_test/${id}`, method: 'get' })
        }
    }, [callFetch, id])

    React.useEffect(() => {
        if (!isLoading && id) {
            let data_ = data?.response
            setValue('title', data_?.title, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('schedule', data_?.schedule, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('schedule', data_?.schedule, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('meta_content', data_?.meta_content, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('subtitle', data_?.subtitle, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('sub_des', data_?.sub_des, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
        }
    }, [isLoading])

    const _onFocus = React.useCallback(() => {
        document.getElementById("_date_picker").type = "datetime-local"
    }, [])

    return (
        <React.Fragment>
            <CouserBanner />
            <div className='lg:px-40 md:px-10 px-2'>
                <div className='mt-[-80px] bg-white lg:mx-20 py-10  drop-shadow-lg md:mx-4 mx-0  rounded-md '>
                    <section className='text-center'>
                        <article>
                            <h2 className='text-3xl font-semibold '>Breaking Into Tech at Islamic Center of Irving</h2>
                            <div className='grid mt-4'>
                                <div className='m-auto'>
                                    <div className='flex my-2'>
                                        <div className='mx-2 '>
                                            <button className='bg-[#ffc78b] text-white  py-1 font-normal px-4 rounded-full text-sm '>
                                                12 Feb 2023
                                            </button>
                                        </div>
                                        <div className='mx-2 text-sm pt-1 '>
                                            Sunday 12-04-2023 , 03:40AM
                                        </div>
                                        <div className='mx-2 '>
                                            <button className=' bg-[#8c98a4] text-white  py-1 font-normal px-4 rounded-full text-sm'>
                                                Room 210 AB, Islamic Center of Irving
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>

                <div className=' mt-10 '>
                    <div>

                        <FormProvider {...methods} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='grid grid-cols-12 gap-3 mb-4'>
                                    <div className='lg:col-span-4 md:col-span-12 col-span-12'>
                                        <div className='form-control'>
                                            <div>

                                            </div>
                                            <div className='w-full'>
                                                <Controller
                                                    control={control}
                                                    name="backgroundImage"
                                                    render={({ field, fieldState: { invalid, isDirty, isTouched, error } }) => {
                                                        let src = field.value ?? null;
                                                        if (
                                                            field.value &&
                                                            field.value.length > 0 &&
                                                            typeof field.value !== "string"
                                                        ) {
                                                            const objectUrl = URL.createObjectURL(field.value[0]);
                                                            src = objectUrl;
                                                        }

                                                        return (
                                                            <React.Fragment>
                                                                <ProfileImage>
                                                                    {src ? (
                                                                        <Image src={src} />
                                                                    ) : (
                                                                        <UploadText>
                                                                            <ImgIcon className={'w-20 h-20 '} />
                                                                        </UploadText>
                                                                    )}
                                                                    <FileInput
                                                                        type="file"
                                                                        onChange={(e) => {
                                                                            field.onChange(e.target.files);
                                                                        }}
                                                                    />
                                                                </ProfileImage>
                                                                <p className=" px-2 text-[#f5594e] mb-0 pt-1 text-xs ">{error?.message}</p>
                                                            </React.Fragment>
                                                        );
                                                    }} />
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
                                            <div className='col-span-6'>
                                                <div>
                                                    <Controller
                                                        control={control}
                                                        name="schedule"
                                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                            <input className='border border-[#e0ddddd7] rounded-lg w-full px-2 py-[6px]' placeholder="Date" name={"schedule"} id="_date_picker" onChange={(e) => field.onChange(e.target.value)} type="text" onFocus={_onFocus} value={field?.value} />
                                                        )} />
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
                                                            <TextField type={"text"} error={error}  {...field} name={"subtitle"} placeholder={"Host Location"} className={"w-full pl-6"} />
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
                                                            <Selector  defaultValues={field.value ?? null} label={"Status"} error={error} selectionOption={["Draft", "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
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
                                                    <Button
                                                        type='submit'
                                                        //  isLoading={isLoading} 
                                                        className={`w-[140px] drop-shadow-none shadow-none hover:drop-shadow-none hover:shadow-none bg-primarybg rounded-full `} type={'submit'}
                                                    // isDisabled={!isDirty || !isValid}
                                                    >
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
                    <div>
                        <div className='form-control'>
                            <div style={{ width: '100%', height: 'auto', border: '1px solid lightgray' }}>
                                <div ref={quillRef} />
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className=''>

                                </div>
                                <div className=''>
                                    <Button
                                        isLoading={isLoading}
                                        onClick={event__action}
                                        className={`w-[140px] drop-shadow-none shadow-none hover:drop-shadow-none hover:shadow-none bg-primarybg rounded-full `}
                                    >
                                        {'Submit'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}


const ProfileImage = styled.label`
  width: 100%;
  padding:10px;
  background: #ffffff;
  border: 1px dashed #c0c0c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
width:100%;
height:100%;
  justify-content: center;
`;


const UploadText = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 16px;
  color: #000000;
`;


const FileInput = styled.input`
  display: none;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
