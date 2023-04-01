import React from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button, TextArea, Selector } from 'components';
import styled from 'styled-components';
import { Rate } from 'antd';
import { ImgIcon } from 'icons';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


export default function FeedBackAction() {
    const methods = useForm({
        // resolver:,
        defaultValues: {
            firstName: "",
            lastName: "",
            roll:"",
            profileImg: "",
            rating: "",
            feedback: "",
            status:""
        }
    })

    const { control, handleSubmit, setValue, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        console.log(data, "it is your name ")
    }, [])

    return (
        <React.Fragment>
            <div className='lg:px-36 md:px-5 px-2 mt-6 grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-4 md:col-span-4 col-span-12'>
                    <div className=' border bg-white border-[#e7e7ec] animation-all  hover:drop-shadow-lg rounded-md ' style={{ boxShadow: " rgba(149, 157, 165, 0.15) 0px 3px 6px 0px" }}>
                        <div className=' '>
                            <div className='flex pt-5 pl-5 items-center'>
                                <div className=''>
                                    <img alt='Test Demo image ' className='w-[70px] rounded-full h-[70px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pEiLahUshC6pxmaGbdWai34H9KF_bY6rdLBty_svjf_I7exWI4tGPCUXKidSlVUnbH4&usqp=CAU' />
                                </div>
                                <div className='pl-3 '>
                                    <p className='text-primarybg'>Rudolph Hennry</p>
                                    <p className='text-[#77838f] text-sm '>MLOps </p>
                                </div>
                            </div>
                            <section className='mt-4 p-4 '>
                                <p className='text-[#77838f]  '>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum et explicabo laudantium. Asperiores, magnam neque suscipit amet ad obcaecati nihil soluta quam perferendis aliquid commodi nesciunt quis natus iste, officia sit modi architecto, fugit a totam quaerat molestias eum necessitatibus provident. Vel in sapiente necessitatibus, fuga ipsam facilis culpa debitis id consequatur architecto quis numquam explicabo molestias! Veritatis, atque! Ea!    </p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-8 md:col-span-8 col-span-12 '>
                    <div className=''>
                    <FormProvider {...methods} >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='grid grid-cols-12 gap-3 mb-4'>
                                    <div className='lg:col-span-4 md:col-span-12 col-span-12'>
                                        <div className='form-control'>
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
                                    </div>
                                    <div className='lg:col-span-8 md:col-span-12 col-span-12'>
                                        <div className=' grid grid-cols-12 gap-3'>
                                            <div className='col-span-6'>
                                                <div className='form-control mb-2 '>
                                                    <Controller
                                                        control={control}
                                                        name="firstName"
                                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                            <TextField type={"text"} error={error}  {...field} name={"firstName"} placeholder={"First Name"} className={"w-full pl-6"} />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        
                                            <div className='col-span-6'>
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
                                            <div className='col-span-6'>
                                                <div className='form-control mb-2 '>
                                                    <Controller
                                                        control={control}
                                                        name="roll"
                                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                            <TextField type={"text"} error={error}  {...field} name={"roll"} placeholder={"Roll"} className={"w-full pl-6"} />
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
                                                            <Selector type={"text"} defaultValues={field.value??null}  label={"Status"} error={error} selectionOption={["Draft" , "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
      
                                        <div className='form-control'>
                                            <Controller
                                                control={control}
                                                name="feedback"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <TextArea type={"text"} error={error}  {...field} name={"feedback"} placeholder={"Feedback"} className={"w-full pl-6"} />
                                                )}
                                            />
                                        </div>
                                        <div className='form-control my-2'>
                                            <Controller
                                                control={control}
                                                name="rating"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <Rate allowHalf tooltips={desc} {...field} />
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
            </div>
        </React.Fragment>
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
