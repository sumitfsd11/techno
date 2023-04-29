import React from 'react'
import CourseDetail from "pages/VisitorPages/Courses/CourseDetail";
import styled from 'styled-components';
import { TextField, TextArea, Button, Selector } from 'components';
import { FormProvider, useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import { useAuth, useFetch } from "hooks";
import { ImgIcon, EditIcon, DeleteIcon } from 'icons';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import { notification } from 'antd'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'
import { file_base64 } from 'utils/common.utils';
import { courseValidation } from 'utils/validation';
import { toast } from 'react-hot-toast';
export default function LandingBanner() {
    const { userValue } = useAuth()
    const { id } = useParams()
    const [open, setOpen] = React.useState(1);
    const [api, contextHolder] = notification.useNotification();
    const { quill, quillRef } = useQuill();
    const navigate = useNavigate();
    const methods = useForm({
        resolver: yupResolver(courseValidation),
        mode: "all",
        defaultValues: {
            // 
            bannerImg: '',
            bannerTitle: '',
            bannerDes: '',
            status: '',
            // 
            cardImg: '',
            cardTitle: '',
            cardDes: '',
            cardRating: '',
            cardButton: '',
            fieldsfaqs: ''
            // 
        }
    });


    const onSuccess = React.useCallback((response, method) => {
        if (method === 'put') {
            toast.success('Updated succesfully !')
            navigate('/admin/course-listing')
        }
        if (method === 'post') {
            toast.success('Posted succesfully !')
        }
    }, [navigate])

    const onFailure = React.useCallback((error) => {
        api.error({
            message: `Errors ! `,
            description: error?.response?.message,
            placement: 'topLeft'
        });
    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/course_get/${id}`,
        skipOnStart: true,
        onSuccess,
        onFailure
    })

    const { control, handleSubmit, setValue, watch,
        formState: { isDirty, isValid }
    } = methods;

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "fieldsfaqs",
    });

    const onSubmit = React.useCallback((data) => {
        let content = quill.container.outerHTML ?? null;
        let _formData = {
            banner_title: data?.bannerTitle,
            banner_des: data?.bannerDes,
            status: data?.status,
            user_id: userValue?.id,
            banner_background_image: data?.bannerImg,
            card_img: data?.cardImg,
            card_title: data?.cardTitle,
            card_des: data?.cardDes,
            card_btn_text: data?.cardButton,
            course_des: content,
            faqs: JSON.stringify([...fields])
        }

        if (id) {
            callFetch({
                url: `/course/${id}`,
                method: 'put',
                data: _formData
            })
        } else {
            callFetch({
                url: `/course/`,
                method: 'post',
                data: _formData
            })
        }

    }, [quill, fields, id, callFetch]);


    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const faqshold = React.useCallback((data) => {
        if (data?.des_faqs && data?.title_faqs) {
            append({ des: data?.des_faqs, title: data?.title_faqs })
        } else {
            api.error({
                message: `Notification `,
                description: 'Please provide all value ',
                placement: 'topLeft'
            });
        }
    }, [])

    const delete_ = React.useCallback((data, index) => {
        remove(index)
    }, [remove])

    const event__action = React.useCallback((e) => {
        let content = quill.container.outerHTML ?? null;
        if (content && quill) {
            if (id) {
                // callFetch({
                //     url: `/blog_action/${id}`,
                //     method: 'put',
                //     data: data__
                // })
            }
        } else {
            // toast.success('Event describition can not be empty !')
        }
        console.log(data, " it is your name ")
    }, [callFetch, id, quill])

    React.useEffect(() => {
        if (quill) {
            if (!isLoading && id) {
                quill.clipboard.dangerouslyPasteHTML(`${data?.response?.course_des}`);
            }
        }
    }, [isLoading, data, quill])


    React.useEffect(() => {
        if (id) {
            callFetch({
                url: `/course_get/${id}`,
                method: 'get'
            })
        }
    }, [callFetch, id])

    React.useEffect(() => {
        if (id && !isLoading) {
            let data__ = data?.response
            setValue('bannerImg', data__?.banner_background_image, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('bannerTitle', data__?.banner_title, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('bannerDes', data__?.banner_des, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('status', data__?.status, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('cardImg', data__?.card_img, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('cardTitle', data__?.card_title, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('cardDes', data__?.card_des, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })

            setValue('cardButton', data__?.card_btn_text, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('fieldsfaqs', data__?.faqs ?? [], {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
        }
    }, [setValue, data, isLoading])
    return (
        <div>
            {contextHolder}
            <div className='grid lg:grid-cols-12 gap-3 '>
                <div className='col-span-9  overflow-y-auto h-[95vh] custome_scroll '>
                    <CourseDetail props={{
                        banner_title: watch('bannerTitle'),
                        banner_des: watch('bannerDes'),
                        status: watch('status'),
                        user_id: userValue?.id,
                        banner_background_image: watch('bannerImg'),
                        card_img: watch('cardImg'),
                        card_title: watch('cardTitle'),
                        card_des: watch('cardDes'),
                        card_btn_text: watch('cardButton'),
                        faqs: watch('fieldsfaqs')
                    }} >
                        <div dangerouslySetInnerHTML={{ __html: data?.response?.course_des ?? quill?.container?.outerHTML }}></div>
                    </CourseDetail>
                </div>
                <div className='col-span-3 overflow-y-auto h-[95vh]  custome_scroll'>
                    <React.Fragment>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <Accordion open={open === 1}>
                                    <AccordionHeader onClick={() => handleOpen(1)}>
                                        <div className='text-sm'>
                                            Banner
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <BoxContainer>
                                            <div className=''>
                                                Banner
                                                <section className=''>
                                                    <div className='form-control mt-3 '>
                                                        <div className='w-full'>
                                                            <Controller
                                                                control={control}
                                                                name="bannerImg"
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
                                                                                        file_base64(e.target.files[0]).then((response) => {
                                                                                            field.onChange(response);
                                                                                        })
                                                                                    }}
                                                                                />
                                                                            </ProfileImage>
                                                                            <p className=" px-2 text-[#f5594e] mb-0 pt-1 text-xs ">{error?.message}</p>
                                                                        </React.Fragment>
                                                                    );
                                                                }} />
                                                        </div>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="bannerTitle"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"title"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className='form-control mt-3'>
                                                        <span>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="status"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <Selector defaultValues={field.value ?? null} label={"Status"} error={error} selectionOption={["Draft", "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="bannerDes"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextArea type={"text"} error={error}  {...field} name={"des"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                </section>
                                            </div>
                                        </BoxContainer>
                                    </AccordionBody>
                                </Accordion>
                                <Accordion open={open === 2}>
                                    <AccordionHeader onClick={() => handleOpen(2)}>
                                        <div className='text-sm'>
                                            Card
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <BoxContainer>
                                            <div className=''>
                                                Card
                                                <section className=''>

                                                    <div className='form-control mt-3 '>
                                                        <div className='w-full'>

                                                            <Controller
                                                                control={control}
                                                                name="cardImg"
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
                                                                                        file_base64(e.target.files[0]).then((response) => {
                                                                                            field.onChange(response);
                                                                                        })
                                                                                    }}
                                                                                />
                                                                            </ProfileImage>
                                                                            <p className=" px-2 text-[#f5594e] mb-0 pt-1 text-xs ">{error?.message}</p>
                                                                        </React.Fragment>
                                                                    );
                                                                }} />
                                                        </div>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="cardTitle"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"cardtitle"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="cardDes"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextArea type={"text"} error={error}  {...field} name={"cardDes"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="cardButton"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"card_txt_btn"} icon={''} placeholder={"Button Text"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control pl-1">
                                                        <div className="flex  justify-between">
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </BoxContainer>
                                    </AccordionBody>
                                </Accordion>
                            </form>
                        </FormProvider>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                <div className='text-sm'>
                                    Describition
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className='my-2'>
                                </div>
                                <div className=''>
                                    Course Describition
                                    <section className=''>
                                        <div className='form-control mt-3 '>
                                            <div className='w-full'>
                                                <div className='w-full min-h-min'>
                                                    <div ref={quillRef} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-control mt-3 ">

                                        </div>

                                        <div className="form-control mt-3">
                                            <Button className={`w-full bg-[#7150e9] rounded-full cursor-pointer `} onClick={event__action} type={'button'}
                                            >{'SUBMIT'}</Button>
                                        </div>
                                    </section>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        {/* fqs */}
                        <Accordion open={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                <div className='text-sm'>
                                    Faqs
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className='my-2'>
                                    {
                                        fields?.map((i, index) => {
                                            return (
                                                <React.Fragment>
                                                    <section key={index} className=" relative border rounded-md p-2 my-3 border-[#e8e5e5]">
                                                        <div className=' flex-row absolute top-1 right-2'>
                                                            <div className=' text-sm cursor-pointer' onClick={() => delete_(i, index)}>
                                                                <DeleteIcon style={{ fontSize: "13px" }} />
                                                            </div>
                                                        </div>
                                                        <div className="font-semibold  my-2 ">{i?.title}</div>
                                                        <article  >{i?.des}</article>
                                                    </section>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(faqshold)}>
                                        <BoxContainer>
                                            <div className=''>
                                                Faqs
                                                <section className=''>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="title_faqs"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"title_faqs"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="des_faqs"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextArea type={"text"} error={error}  {...field} name={"des_faqs"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3">
                                                        <Button
                                                            className={`w-full bg-[#7150e9] rounded-full `}
                                                            type='submit'
                                                        // isDisabled={!isDirtyfaqs || !isValidfaqs}
                                                        >{'SUBMIT'}</Button>
                                                    </div>
                                                </section>
                                            </div>
                                        </BoxContainer>
                                    </form>
                                </FormProvider>
                            </AccordionBody>
                        </Accordion>
                        <div className=' p-3'>
                            <Button
                                className={`w-full bg-[#7150e9] rounded-full `}
                                onClick={handleSubmit(onSubmit)}
                                type='submit'
                            >{'SUBMIT'}</Button>
                        </div>

                    </React.Fragment>
                </div>
            </div>
        </div >
    )
}

const BoxContainer = styled.div`
border:1px solid #c0c0c0;
padding:10px;
border-radius:3px;
`;


const ProfileImage = styled.label`
  width: 100%;
  padding:10px;
  background: #ffffff;
  border: 1px dashed #c0c0c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
width:100%;
height:150px;

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
