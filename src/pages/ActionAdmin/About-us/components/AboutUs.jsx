import React from 'react'
import styled from 'styled-components';
import { useQuill } from 'react-quilljs';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button, TextArea, Selector } from 'components';
import { ImgIcon } from 'icons';
import CouserBanner from "pages/VisitorPages/components/Banner";
import useFetch from 'hooks';
export default function AboutUsEdit() {
    const { quill, quillRef } = useQuill();
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
            status:""
        }
    })

    const { control, handleSubmit, setValue, formState: { isDirty, isValid } } = methods
    const onSubmit = React.useCallback((data) => {
        console.log(data, " ==> it your name ")
    }, [])

    const event__action = React.useCallback((e) => {
        e?.preventDefault()
        let content = quill?.container?.outerHTML;
        //    quill.clipboard.dangerouslyPasteHTML(''); to clearn 
        console.log(" it is test ", content)
    }, [])
    React.useEffect(() => {
        if (quill) {
            // data poupulating 
            // quill.clipboard.dangerouslyPasteHTML(localStorage.getItem('test__'));
        }
    }, [])


    const _onFocus = React.useCallback(()=>{
        document.getElementById("_date_picker").type ="datetime-local"
    },[])

    return (
        <React.Fragment>
            <CouserBanner />
            <div className='lg:px-40 md:px-10 px-2'>
                <div className='mt-[20px] bg-white lg:mx-20 py-10   md:mx-4 mx-0  rounded-md '>
                    <section className='text-center'>
                        <article>
                            <h2 className='text-3xl font-semibold '>Breaking Into Tech at Islamic Center of Irving</h2>
                            <div className='grid mt-4'>
                                <div className='m-auto'>
                                    <div className='flex my-2'>
                                        <div className='mx-2 '>
                                            <button className='bg-[#ffc78b] text-white italic py-1 font-normal px-4 rounded-full text-sm '>
                                               Andrew Nilson
                                            </button>
                                        </div>
                                        <div className='mx-2 text-sm pt-1 '>
                                            Sunday 12-04-2023 , 03:40AM
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
                                                            <input className='border border-[#e0ddddd7] rounded-lg w-full px-2 py-[6px]' placeholder="Date" name={"schedule"} id="_date_picker" onChange={(e) => field.onChange(e.target.value)} type="text"  onFocus={_onFocus} value={field?.value}  />
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
                                                            <Selector type={"text"} defaultValues={field.value??null}  label={"Status"} error={error} selectionOption={["Draft" , "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
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
                    <div>
                        <div className='form-control'>
                            <div>
                                <div className='min-h-[360px]  ' ref={quillRef} />
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className=''>

                                </div>
                                <div className=''>
                                    <Button type='submit'
                                        //  isLoading={isLoading} 
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
