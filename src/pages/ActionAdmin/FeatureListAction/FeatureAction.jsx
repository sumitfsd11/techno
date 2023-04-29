import React from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextField, Button, TextArea, Selector } from 'components';
import styled from 'styled-components';
import { Rate } from 'antd';
import { ImgIcon } from 'icons';
import { file_base64 } from 'utils/common.utils';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useFetch } from "hooks"
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


export default function FeatureAction() {
    const { id } = useParams()
    const navigate = useNavigate();
    const methods = useForm({
        // resolver:,
        defaultValues: {
            title: "",
            sub_title: "",
            des: "",
            img: "",
            status: ""
        }
    })

    const { control, handleSubmit, setValue, watch, formState: { isDirty, isValid } } = methods

    const onSuccess = React.useCallback((response, method) => {

        if (method === 'post') {
            navigate('/admin/feedback-list')
            toast.success('Posted  successfully !')
        } if (method === 'put') {
            toast.success('Updated successfully !')
        }

    }, [navigate])

    const onFailure = React.useCallback((error) => {
        if (error) {

        }
    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/landing_featurerud/${id}`,
        skipOnStart: true,
        methods: 'get',
        onSuccess,
        onFailure
    })
    const onSubmit = React.useCallback((data) => {
        if ( data?.img !== null && typeof data?.img[0] === 'object'  ) {
            file_base64(data?.img[0]).then((response) => {
                let formData = {
                    title: data?.title,
                    sub_title: data?.sub_title,
                    feature_img_sec: response,
                    des: data?.des,
                    status: data?.status,
                }
                if (id) {
                    callFetch(
                        {
                            url: `/landing_featurerud/${id}`,
                            method: 'put',
                            data: formData
                        }
                    )
                } else {
                    callFetch({
                        url: `/landing_feature_lc/`,
                        method: 'post',
                        data: formData
                    })
                }
            })
        } else {
            let formData = {
                title: data?.title,
                sub_title: data?.sub_title,
                feature_img_sec: data?.img,
                des: data?.des,
                status: data?.status,
            }

            if (id) {
                callFetch(
                    {
                        url: `/landing_featurerud/${id}`,
                        method: 'put',
                        data: formData
                    }
                )
            } else {
                callFetch({
                    url: `/landing_feature_lc/`,
                    method: 'post',
                    data: formData
                })
            }
        }
    }, [callFetch, id, , file_base64])

    React.useEffect(() => {
        if (id) {
            callFetch({
                url: `/landing_featurerud/${id}`,
                skipOnStart: false,
                methods: 'get',
            })
        }
    }, [callFetch, id])

    React.useEffect(() => {
        if (!isLoading && id) {
            let data__ = data?.response
            setValue('title', data__?.title, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            })
            setValue('sub_title', data__?.sub_title, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            })
            setValue('img', data__?.feature_img_sec, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            })
            setValue('des', data__?.des, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            })
            setValue('status', data__?.status, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true
            })
        }
    }, [setValue, data, isLoading, id])

    return (
        <React.Fragment>
            <div className='lg:px-36 md:px-5 px-2 mt-6 grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-4 md:col-span-4 col-span-12'>
                    <div className=' border bg-white border-[#e7e7ec] animation-all   rounded-md '  >
                        <div className=' p-3 pb-4' >
                            <div className=' text-center'>
                                {
                                    watch("img") && (
                                        <div className="grid my-3 ">
                                            <img className=" w-[130px] h-auto  m-auto" alt="loading..." src={typeof watch("img")[0] === 'object' ? URL.createObjectURL(watch("img")[0]) : watch("img")} />
                                        </div>
                                    )
                                }
                                <h4 className="text-primarybg font-semibold">{watch("title")}</h4>
                                <p className='text-primarybg'>{watch("sub_title")} </p>
                                <section className='mt-4'>
                                    <p className='text-[#77838f]  '>
                                        {watch("des")}
                                    </p>
                                </section>
                            </div>
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
                                                    name="img"
                                                    render={({ field, fieldState: { invalid, isDirty, isTouched, error } }) => {
                                                        let src = field.value ?? null;
                                                        if (
                                                            field.value &&
                                                            field.value.length > 0 &&
                                                            typeof field.value !== "string"
                                                        ) {
                                                            const objectUrl = URL.createObjectURL(field?.value[0]);
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
                                            <div className='col-span-12'>
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

                                            <div className='col-span-12'>
                                                <div className='form-control mb-2 '>
                                                    <Controller
                                                        control={control}
                                                        name="sub_title"
                                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                            <TextField type={"text"} error={error}  {...field} name={"sub_title"} placeholder={"Sub Title"} className={"w-full pl-6"} />
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-span-12'>
                                                <div className='form-control mb-2 '>
                                                    <Controller
                                                        control={control}
                                                        name="status"
                                                        render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                            <Selector defaultValues={field.value ?? null} label={"Status"} error={error} selectionOption={["Draft", "Published"]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='form-control'>
                                            <Controller
                                                control={control}
                                                name="des"
                                                render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                    <TextArea type={"text"} error={error}  {...field} name={"description"} placeholder={"Description"} className={"w-full min-h-[90px] pl-6"} />
                                                )}
                                            />
                                        </div>
                                        <div className='form-control'>
                                            <div className='flex justify-between mt-2'>
                                                <div className=''>

                                                </div>
                                                <div className=''>
                                                    <Button type='submit'
                                                        isLoading={isLoading}
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
