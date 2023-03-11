import React from 'react'
import CourseDetail from "pages/VisitorPages/Courses/CourseDetail";
import styled from 'styled-components';
import { TextField, TextArea, Button } from 'components';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from "hooks";

export default function LandingBanner() {
    const navigate = useNavigate();
    const methods = useForm({
        // resolver: yupResolver(loginValidationSchema),
        mode: "all",
        defaultValues: {
            username: ""
        }
    });
    const { control, handleSubmit, setError,
        formState: { isDirty, isValid }
    } = methods;

    const onSubmit = React.useCallback((data) => {
        console.warn(data)
        // verify_otp(data)
    }, []);


    const FormAction = React.memo(() => {
        return (
            <React.Fragment>
                <BoxContainer>
                    <div className=''>
                        Banner
                        <section className=''>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                                                  img 
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
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextArea type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
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
                                            isDisabled={!isDirty || !isValid}
                                        >{'SUBMIT'}</Button>
                                    </div>

                                </form>
                            </FormProvider>
                        </section>
                    </div>
                </BoxContainer>
                <br/>
                <BoxContainer>
                    <div className=''>
                        Card
                        <section className=''>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                                                  img 
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
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextArea type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"number"} error={error}  {...field} name={"username"} icon={''} placeholder={"Rating"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"text"} error={error}  {...field} name={"username"} icon={''} placeholder={"Button Text"} className={"w-full pl-6"} />
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
                                            isDisabled={!isDirty || !isValid}
                                        >{'SUBMIT'}</Button>
                                    </div>

                                </form>
                            </FormProvider>
                        </section>
                    </div>
                </BoxContainer>
                <br/>
                <BoxContainer>
                    <div className=''>
                        Card
                        <section className=''>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                                                  img 
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
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextArea type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"Description"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"number"} error={error}  {...field} name={"username"} icon={''} placeholder={"Rating"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="form-control mt-3 ">
                                        <span>
                                            <Controller
                                                control={control}
                                                name="username"
                                                render={({
                                                    field,
                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                }) => (
                                                    <TextField type={"text"} error={error}  {...field} name={"username"} icon={''} placeholder={"Button Text"} className={"w-full pl-6"} />
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
                                            isDisabled={!isDirty || !isValid}
                                        >{'SUBMIT'}</Button>
                                    </div>

                                </form>
                            </FormProvider>
                        </section>
                    </div>
                </BoxContainer>
            </React.Fragment>
        )
    })
    return (
        <div>
            <div className='grid lg:grid-cols-12 gap-3 '>
                <div className='col-span-9  '>
                    <CourseDetail />
                </div>
                <div className='col-span-3'>
                    <FormAction />
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
