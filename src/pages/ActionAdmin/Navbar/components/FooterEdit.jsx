
import React from 'react'
import { Button, TextField, TextArea, Selector } from "components";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useForm, Controller, FormProvider, useFieldArray } from "react-hook-form";
import { EditIcon } from 'icons';
import styled from 'styled-components';
import { ImgIcon, SpinnerIcon } from 'icons';
import Footer from 'components/utilsComponents/Footer/Footer';
import { useFetch } from "hooks"
import { DeleteIcon } from 'icons';
import { file_base64 } from 'utils/common.utils';
import { toast } from 'react-hot-toast';
export default function HeaderEdit() {
    const [open, setOpen] = React.useState(false);
    const methods = useForm({
        // resolver:joiResolver
        mode: "all",
        defaultValues: {
            address_line_1: "",
            address_line_2: "",
            title_one: "",
            title_two: "",
            title_three: "",
            right_reserved: "",
            footer_email: "",
            footer_phone: "",
            columns_one: "",
            columns_two: "",
            logo: ""
        }
    })


    const onSuccess = React.useCallback((response, method) => {
        if(method === 'post'){
        toast.success('Updated succesfully !')
        setOpen(false)
        }
    }, [])

    const onFailure = React.useCallback((error) => {
        try {
            toast.error(error?.message);
        } catch (error) {
            console.log(" ")
        }
    }, [])

    const { control,
        handleSubmit, watch, setValue,
        formState: { isDirty, isValid } } = methods

    const { isLoading, data, callFetch } = useFetch({
        url: `/footer/`,
        skipOnStart: false,
        methods: 'get',
        onSuccess,
        onFailure
    })

    const onSubmit = React.useCallback((data) => {
        const column_num_1 = data?.column__field?.filter((i) => i?.column_num === 1)
        const column_num_2 = data?.column__field?.filter((i) => i?.column_num === 2)
        let formData__ = {
            ...data,
            column_two_field: JSON.stringify([...column_num_2]),
            column_one_field: JSON.stringify([...column_num_1])
        }
        callFetch({
            url: `/footer/`,
            method: 'post',
            data: formData__
        })
    }, [callFetch])

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "column__field",
    });

    const onSubmit__arr = React.useCallback((data) => {
        append({ title: data?.title_ar, link: data?.link, column_num: data.column_num })
    }, [append]);

    const handleOpen = () => setOpen(!open);

    React.useEffect(() => {

        if (!isLoading) {
            let data__ = data?.response
            setValue('address_line_1', data__?.address_line_1, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('address_line_2', data__?.address_line_2, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('title', data__?.title_one, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('sub_title', data__?.title_two, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('title_three', data__?.title_three, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('right_reserved', data__?.right_reserved, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('footer_email', data__?.footer_email, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('footer_phone', data__?.footer_phone, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('columns_one', data__?.columns_one, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('columns_two', data__?.columns_two, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            setValue('logo', data__?.logo, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            if (data__?.column_one_field && data__?.column_two_field) {
                setValue('column__field', [...data__?.column_one_field?.map((i) => ({ title: i?.title, link: i?.link, column_num: 1 }))
                    , ...data__?.column_two_field?.map((i) => ({ title: i?.title, link: i?.link, column_num: 2 }))] ?? [], {
                    shouldDirty: true,
                    shouldValidate: true,
                    shouldTouch: true
                })
            }
        }
    }, [setValue, isLoading, data])

    return (
        <div>
            <React.Fragment>
                <div className='relative'>
                    <div className='absolute z-10 top-2 right-2'>
                        <button className='w-[35px] h-[35px] bg-[#f8f7f769] hover:bg-[#f8f7f77a] cursor-pointer rounded-full pb-2 px-[5px] pt-1 text-[#222222]'> {false ? (<span className='spinner '><SpinnerIcon /></span>) : (<span onClick={handleOpen} className=' cursor-pointer '><EditIcon /></span>)} </button>
                    </div>
                </div>
                <Footer props={data?.response} />
            </React.Fragment>
            {/* model */}
            <React.Fragment>
                <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
                    <DialogHeader className='text-base py-1 my-0'>Footer Edit </DialogHeader>
                    <DialogBody className='h-[81vh] py-1 my-0' >
                        <div className="grid h-full overflow-auto">
                            <div className="m-auto">
                                <div className="  w-full  ">
                                    <div className=' grid grid-cols-12 gap-2 mb-3'>
                                        <div className=' col-span-3'>
                                            <div className=''>Columns One</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 1)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex justify-between my-1'>
                                                                    <div className='cursor-pointer' title={i?.url}>
                                                                        {i?.title}
                                                                    </div>
                                                                    <div className='cursor-pointer'>
                                                                        <div onClick={() => remove(index)} className=' p-1 rounded-full mr-3 text-white text-sm bg-[#0e0e0e5d]'>
                                                                            <DeleteIcon />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </ul>
                                            </section>
                                        </div>
                                        <div className=' col-span-3'>
                                            <div className=''>Columns One</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 2)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex justify-between my-1'>
                                                                    <div className='cursor-pointer' title={i?.url}>
                                                                        {i?.title}
                                                                    </div>
                                                                    <div className='cursor-pointer'>
                                                                        <div onClick={() => remove(index)} className=' p-1 rounded-full mr-3 text-white text-sm bg-[#0e0e0e5d]'>
                                                                            <DeleteIcon />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-12 gap-2 '>
                                        <div className='col-span-9'>
                                            <FormProvider {...methods}>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="grid grid-cols-12 gap-2">
                                                        <div className='col-span-4'>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="title_one"
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
                                                                    name="title_two"
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
                                                                    name="address_line_1"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextArea type={"text"}
                                                                            error={error}  {...field}
                                                                            name={"address_line_1"}
                                                                            // icon={<MailSVG />}
                                                                            placeholder={"Address 1"} className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="mb-3">
                                                                    <Controller
                                                                        control={control}
                                                                        name="address_line_2"
                                                                        render={({ field,
                                                                            fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                            <TextArea type={"text"}
                                                                                error={error}  {...field}
                                                                                name={"address_line_2"}
                                                                                // icon={<MailSVG />}
                                                                                placeholder={"Address 2"} className={"w-full pl-6"} />
                                                                        )} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-span-4'>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_one"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_one"
                                                                            placeholder={"Columns One"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_two"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_two"
                                                                            placeholder={"Columns Two"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="footer_email"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="footer_email"
                                                                            placeholder={"Email"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="footer_phone"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="footer_phone"
                                                                            placeholder={"Phone"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mt-[19px]">
                                                                <Controller
                                                                    control={control}
                                                                    name="right_reserved"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextArea type={"text"}
                                                                            error={error}  {...field}
                                                                            name={"right_reserved"}
                                                                            // icon={<MailSVG />}
                                                                            placeholder={"Rights Reserved"} className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>

                                                        </div>
                                                        <div className=' col-span-4'>
                                                            <div className='form-control'>
                                                                <div className='w-full'>
                                                                    <Controller
                                                                        control={control}
                                                                        name="logo"
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
                                                        </div>
                                                        <div className='col-span-4'>
                                                            <div className=''>
                                                                <div className="form-control mt-6">
                                                                    <Button type={'submit'}
                                                                        className={`w-[160px] bg-primarybg   hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
                                                                        isDisabled={!isDirty || !isValid}>{`SUBMIT`}</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </FormProvider>
                                        </div>
                                        <div className='col-span-3 '>
                                            <FormProvider {...methods}>
                                                <form onSubmit={handleSubmit(onSubmit__arr)}>
                                                    <div className="form-control  ">
                                                        <span>
                                                            <div className='form-control mb-2 '>
                                                                <Controller
                                                                    control={control}
                                                                    name="column_num"
                                                                    render={({ field, fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <Selector defaultValues={field.value ?? null} label={"Column"} error={error} selectionOption={[1, 2]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
                                                                    )}
                                                                />
                                                            </div>
                                                        </span>
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="title_ar"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"title_ar"} icon={''} placeholder={"Title"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3 ">
                                                        <span>
                                                            <Controller
                                                                control={control}
                                                                name="link"
                                                                render={({
                                                                    field,
                                                                    fieldState: { invalid, isTouched, isDirty, error },
                                                                }) => (
                                                                    <TextField type={"text"} error={error}  {...field} name={"linkl"} icon={''} placeholder={"Link"} className={"w-full pl-6"} />
                                                                )}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div className="form-control mt-3">
                                                        <Button is={false}
                                                            className={`w-[160px] bg-primarybg   hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
                                                            type={"submit"}
                                                        >{'ADD'}</Button>
                                                    </div>

                                                </form>
                                            </FormProvider>
                                        </div>
                                    </div>
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


