import React from 'react'
import CourseDetail from "pages/VisitorPages/Courses/CourseDetail";
import styled from 'styled-components';
import { TextField, TextArea, Button } from 'components';
import { FormProvider, useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from "hooks";
import { ImgIcon, EditIcon, DeleteIcon } from 'icons';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
// 
import { notification } from 'antd'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'


export default function LandingBanner() {
    const [open, setOpen] = React.useState(1);
    const [field_, setField] = React.useState('');
    const [api, contextHolder] = notification.useNotification();
    const { quill, quillRef } = useQuill();

    const navigate = useNavigate();
    const methods = useForm({
        mode: "all",
        defaultValues: {
            profileImg: '',
            title: '',
            des: ''
        }
    });

    const methodsCard = useForm({
        mode: "all",
        defaultValues: {
            cardImg: '',
            cardtitle: '',
            cardDes: '',
            rating: '',
            btnText: ''
        }
    });
    const methodfaqs = useForm({
        mode: "all",
        defaultValues: {
            title_faqs: '',
            des_faqs: ''
        }
    });

    const { control, handleSubmit, setValue,
        formState: { isDirty, isValid }
    } = methods;

    const { control: controlcard, handleSubmit: cardhandleSubmit, setError: cardsetError, setValue: cardsetValue,
        formState: { isDirty: cardisDirty, isValid: cardisValid }
    } = methodsCard;
    const { control: controlfaqs, handleSubmit: handleSubmitfaqs, setError: setErrorfaqs, setValue: setValuefaqs,
        formState: { isDirty: isDirtyfaqs, isValid: isValidfaqs }
    } = methodfaqs;

    const { fields: fieldsfaqs, append: appendfaqs, prepend: prependfaqs, remove: removefaqs } = useFieldArray({
        control: controlfaqs,
        name: "faqs",
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "test",
    });
    const onSubmit = React.useCallback((data) => {
        console.warn(data)
    }, []);

    const onSubmitCard = React.useCallback((data) => {
        console.warn(data)
    }, []);

    const onSubmitfaqs = React.useCallback((data) => {
        appendfaqs({ title: data?.title_faqs, content: data?.des_faqs })
    }, []);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    console.log(fieldsfaqs, "===")

    React.useEffect(() => {
        if (quill) {
            // data poupulating 
            // quill.clipboard.dangerouslyPasteHTML(localStorage.getItem('test__'));
        }
    }, [fields])

    function add() {
        if (quill) {
            if (quill?.container?.outerHTML && field_) {
                append({ content: quill?.container?.outerHTML, title: field_ })
                quill.clipboard.dangerouslyPasteHTML('');
                setField('')
            } else {
                api.error({
                    message: `Notification `,
                    description: 'Both field are required so please make sure you ptutting data in both field !',
                    placement: 'topLeft'
                })
            }
        }
    }



    return (
        <div>
            {contextHolder}
            <div className='grid lg:grid-cols-12 gap-3 '>
                <div className='col-span-9 overflow-y-auto h-[91vh] custome_scroll '>
                    <CourseDetail />
                </div>
                <div className='col-span-3  custome_scroll'>
                    <React.Fragment>
                        <React.Fragment>
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
                                                <FormProvider {...methods}>
                                                    <form onSubmit={cardhandleSubmit(onSubmit)}>
                                                        <div className='form-control mt-3 '>
                                                            <div className='w-full'>
                                                                <Controller
                                                                    control={control}
                                                                    name="profileImg"
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
                                                        <div className="form-control mt-3 ">
                                                            <span>
                                                                <Controller
                                                                    control={control}
                                                                    name="title"
                                                                    render={({
                                                                        field,
                                                                        fieldState: { invalid, isTouched, isDirty, error },
                                                                    }) => (
                                                                        <TextField type={"text"} error={error}  {...field} name={"title"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="form-control mt-3 ">
                                                            <span>
                                                                <Controller
                                                                    control={control}
                                                                    name="des"
                                                                    render={({
                                                                        field,
                                                                        fieldState: { invalid, isTouched, isDirty, error },
                                                                    }) => (
                                                                        <TextArea type={"text"} error={error}  {...field} name={"des"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="form-control pl-1">
                                                            <div className="flex  justify-between">
                                                            </div>
                                                        </div>
                                                        <div className="form-control mt-3">
                                                            <Button is={false} className={`w-full gradient rounded-full `} type={'submit'}
                                                                isDisabled={!isDirty || !isValid}
                                                            >{'SUBMIT'}</Button>
                                                        </div>

                                                    </form>
                                                </FormProvider>
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
                                                <FormProvider {...methodsCard}>
                                                    <form onSubmit={cardhandleSubmit(onSubmitCard)}>
                                                        <div className='form-control mt-3 '>
                                                            <div className='w-full'>

                                                                <Controller
                                                                    control={controlcard}
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
                                                        <div className="form-control mt-3 ">
                                                            <span>
                                                                <Controller
                                                                    control={controlcard}
                                                                    name="cardtitle"
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
                                                                    control={controlcard}
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
                                                                    control={controlcard}
                                                                    name="rating"
                                                                    render={({
                                                                        field,
                                                                        fieldState: { invalid, isTouched, isDirty, error },
                                                                    }) => (
                                                                        <TextField type={"number"} error={error}  {...field} name={"rating"} icon={''} placeholder={"Rating"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="form-control mt-3 ">
                                                            <span>
                                                                <Controller
                                                                    control={control}
                                                                    name="card_txt_btn"
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
                                                        <div className="form-control mt-3">
                                                            <Button is={false} className={`w-full bg-[#7150e9] rounded-full `} type={'submit'}
                                                                isDisabled={!cardisDirty || !cardisValid}
                                                            >{'SUBMIT'}</Button>
                                                        </div>

                                                    </form>
                                                </FormProvider>
                                            </section>
                                        </div>
                                    </BoxContainer>
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    <div className='text-sm'>
                                        Tabs
                                    </div>
                                </AccordionHeader>
                                <AccordionBody>
                                    <div className='my-2'>
                                        {
                                            fields?.map((i, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <section key={index} className="border rounded-md p-2 my-3 border-[#e8e5e5]">
                                                            <div dangerouslySetInnerHTML={{ __html: i.title }} className="font-semibold  my-2 "></div>
                                                            <article dangerouslySetInnerHTML={{ __html: i.content }} />
                                                        </section>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                    <BoxContainer>
                                        <div className=''>
                                            Tabs
                                            <section className=''>
                                                <div className='form-control mt-3 '>
                                                    <div className='w-full'>
                                                        <div className=' border  outline-none border-[#eae9e9]'>
                                                            <div ref={quillRef} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-control mt-3 ">
                                                    <span>
                                                        <TextField type={"text"} onChange={(e) => setField(e.target.value)} value={field_} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                    </span>
                                                </div>

                                                <div className="form-control mt-3">
                                                    <Button className={`w-full bg-[#7150e9] rounded-full cursor-pointer `} onClick={add} type={'button'}
                                                    >{'SUBMIT'}</Button>
                                                </div>
                                            </section>
                                        </div>
                                    </BoxContainer>
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
                                            fieldsfaqs?.map((i, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <section key={index} className=" relative border rounded-md p-2 my-3 border-[#e8e5e5]">
                                                            <div className=' flex-row absolute top-1 right-2'>
                                                                <div className=' '>
                                                                    <EditIcon />
                                                                </div>
                                                                <div className=' '>
                                                                    <DeleteIcon />
                                                                </div>
                                                            </div>
                                                            <div className="font-semibold  my-2 ">{i?.title}</div>
                                                            <article  >{i?.content}</article>
                                                        </section>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                    <BoxContainer>
                                        <div className=''>
                                            Faqs
                                            <section className=''>
                                                <FormProvider {...methodfaqs}>
                                                    <form onSubmit={handleSubmitfaqs(onSubmitfaqs)}>
                                                        <div className="form-control mt-3 ">
                                                            <span>
                                                                <Controller
                                                                    control={controlfaqs}
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
                                                                    control={controlfaqs}
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
                                                            <Button is={false} className={`w-full bg-[#7150e9] rounded-full `} type={'submit'}
                                                                isDisabled={!isDirtyfaqs || !isValidfaqs}
                                                            >{'SUBMIT'}</Button>
                                                        </div>

                                                    </form>
                                                </FormProvider>
                                            </section>
                                        </div>
                                    </BoxContainer>
                                </AccordionBody>
                            </Accordion>
                        </React.Fragment>

                    </React.Fragment>
                </div>
            </div>
        </div>
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
