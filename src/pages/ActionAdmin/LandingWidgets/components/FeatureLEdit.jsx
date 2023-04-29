
import React from 'react'
import { Button, TextField, TextArea } from "components";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { EditIcon } from 'icons';
import DatailBanner from 'pages/VisitorPages/Home/components/DatailBanner';
import styled from 'styled-components';
import { ImgIcon, SpinnerIcon } from 'icons';
import { useFetch } from "hooks"
import { toast } from 'react-hot-toast';
import { file_base64 } from 'utils/common.utils';
export default function FeatureLEdit() {
    const [open, setOpen] = React.useState(false);
    const methods = useForm({
        // resolver:joiResolver
        mode: "all",
        defaultValues: {
            title: "",
            sub_title: "",
            des: "",
            bg: ""
        }
    })

    const { control,
        handleSubmit, setValue,
        formState: { isDirty, isValid } } = methods

    const onSuccess = React.useCallback((response, method) => {
        if (method === 'post') {
            toast.success("Updated successfully !")
            handleOpen(false)
        }
    }, [])

    const onFailure = React.useCallback((error) => {

    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/landing_feature_layout/`,
        skipOnStart: false,
        onSuccess,
        onFailure,
    })
    const onSubmit = React.useCallback((data) => {
        if (typeof data.bg[0] === 'object') {
            file_base64(data?.bg[0]).then((response) => {
                let formData__ = {
                    title: data?.title,
                    sub_title: data?.sub_title,
                    des: data?.des,
                    bg: response
                }
                callFetch({
                    url: `/landing_feature_layout/`,
                    method: 'post',
                    data: formData__
                })
            })

        } else {
            let formData__ = {
                title: data?.title,
                sub_title: data?.sub_title,
                des: data?.des,
                bg: data?.bg
            }
            callFetch({
                url: `/landing_feature_layout/`,
                method: 'post',
                data: formData__
            })
        }
    }, [callFetch])


    React.useEffect(() => {
        if (!isLoading) {
            let data__ = data.response
            setValue('title', data__?.title, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('sub_title', data__?.sub_title, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('des', data__?.des, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
            setValue('bg', data__?.bg, {
                shouldTouch: true,
                shouldDirty: true,
                shouldValidate: true
            })
        }
    }, [isLoading, setValue, data])

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <React.Fragment>
                <div className='relative'>
                    <div className='absolute top-2 right-2'>
                        <button className='w-[35px] h-[35px] bg-[#f8f7f769] hover:bg-[#f8f7f77a] cursor-pointer rounded-full pb-2 px-[5px] pt-1 text-[#222222]'> {false ? <span className='spinner '><SpinnerIcon /></span> : (<span onClick={handleOpen}><EditIcon /></span>)} </button>
                    </div>
                </div>
                <DatailBanner props={data?.response} />
            </React.Fragment>
            {/* model */}
            <React.Fragment>
                <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
                    <DialogHeader className='text-base py-1 my-0'>Feature Edit </DialogHeader>
                    <DialogBody className='h-[81vh] py-1 my-0' >
                        <div className="grid h-full">
                            <div className="m-auto">
                                <div className=" lg:w-[550px] md:w-[450px] w-full ">
                                    <FormProvider {...methods}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-12 gap-2">
                                                <div className='col-span-8'>
                                                    <div className="mb-3">
                                                        <Controller
                                                            control={control}
                                                            name="title"
                                                            render={({ field,
                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                <TextField type={"text"}
                                                                    error={error}
                                                                    {...field}
                                                                    placeholder={"Title"}
                                                                    name="title"
                                                                    className={"w-full pl-6"} />
                                                            )} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <Controller
                                                            control={control}
                                                            name="sub_title"
                                                            render={({ field,
                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                <TextField type={"text"}
                                                                    error={error}
                                                                    {...field}
                                                                    name="sub_title"
                                                                    placeholder={"Sub Title"}
                                                                    className={"w-full pl-6"} />
                                                            )} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <Controller
                                                            control={control}
                                                            name="des"
                                                            render={({ field,
                                                                fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                <TextArea type={"text"}
                                                                    error={error}  {...field}
                                                                    name={"des"}
                                                                    // icon={<MailSVG />}
                                                                    placeholder={"Description"} className={"w-full pl-6"} />
                                                            )} />
                                                    </div>

                                                </div>
                                                <div className=' col-span-4'>
                                                    <div className='form-control'>
                                                        <div className='w-full'>
                                                            <Controller
                                                                control={control}
                                                                name="bg"
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

                                            </div>

                                            <div className="form-control mt-6">
                                                <Button type={'submit'}
                                                isLoading={isLoading}
                                                    className={`w-full primary_color hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
                                              >{`SUBMIT`}</Button>
                                            </div>
                                        </form>
                                    </FormProvider>
                                </div>
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter className='py-1 my-1 '>
                    </DialogFooter>
                </Dialog>
            </React.Fragment>
        </div>
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

