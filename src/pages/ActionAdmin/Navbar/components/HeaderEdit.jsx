
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
import { Navbar } from 'components/utilsComponents/Header/TopHeader';
import { DeleteIcon } from 'icons';
import { file_base64 } from 'utils/common.utils';
import { toast } from 'react-hot-toast';
import { useFetch } from "hooks"

export default function HeaderEdit({ props }) {
    const [open, setOpen] = React.useState(false);
    const methods = useForm({
        // resolver:joiResolver
        mode: "all",
        defaultValues: {
            logo: "",
        }
    })
    const onSuccess = React.useCallback((response, method) => {
        if (method === 'post') {
            toast.success('Updated succesfully !')
            setOpen(false)
        }
    }, [])

    const onFailure = React.useCallback((error) => {
        try {
            toast.error(error?.message);
            setOpen(false)
        } catch (error) {
            console.log(" ")
        }
    }, [])

    const { control,
        handleSubmit, watch, setValue,
        formState: { isDirty, isValid } } = methods

    const { isLoading, data, callFetch } = useFetch({
        url: `/navbar/`,
        skipOnStart: false,
        methods: 'get',
        onSuccess,
        onFailure
    })
    const onSubmit = React.useCallback((data) => {
        const column_num_1 = data?.column__field?.filter((i) => i?.column_num === 1)
        const column_num_2 = data?.column__field?.filter((i) => i?.column_num === 2)
        const column_num_3 = data?.column__field?.filter((i) => i?.column_num === 3)
        const column_num_4 = data?.column__field?.filter((i) => i?.column_num === 4)
        const column_num_5 = data?.column__field?.filter((i) => i?.column_num === 5)
        let formData__ = {
            ...data,
            columns_1: JSON.stringify([...column_num_1]),
            columns_2: JSON.stringify([...column_num_2]),
            columns_3: JSON.stringify([...column_num_3]),
            columns_4: JSON.stringify([...column_num_4]),
            columns_5: JSON.stringify([...column_num_5])
        }
        callFetch({
            url: `/navbar/`,
            method: 'post',
            data: formData__
        })
    }, [callFetch])

    const { append, remove } = useFieldArray({
        control,
        name: "column__field",
    });

    const onSubmit__arr = React.useCallback((data) => {
        append({ title: data?.title_ar, link: data?.link, column_num: data.column_num })
    }, [append]);

    React.useEffect(() => {
        if (!isLoading) {
            let data__ = data?.response?.message
            setValue('logo', data__?.logo, {
                shouldDirty: true,
                shouldValidate: true,
                shouldTouch: true
            })
            if (data__?.columns_1 && data__?.columns_2 && data__?.columns_3 && data__?.columns_4 && data__?.columns_5) {
                setValue('column__field', [...data__?.columns_1?.map((i) => ({ title: i?.title, link: i?.link, column_num: 1 })), ...data__?.columns_2?.map((i) => ({ title: i?.title, link: i?.link, column_num: 2 })),
                ...data__?.columns_3?.map((i) => ({ title: i?.title, link: i?.link, column_num: 3 })), ...data__?.columns_4?.map((i) => ({ title: i?.title, link: i?.link, column_num: 4 })), ...data__?.columns_5?.map((i) => ({ title: i?.title, link: i?.link, column_num: 1 }))
                ] ?? [], {
                    shouldDirty: true,
                    shouldValidate: true,
                    shouldTouch: true
                })
            }
        }
    }
        , [isLoading, data, setValue])
    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <React.Fragment>
                <Navbar props={data?.response?.message} />
                <div className='relative mt-[90px]'>
                    <div className='absolute z-[190] bottom-10 right-10'>
                        <button className='w-[35px] h-[35px] bg-[#27262669] hover:bg-[#f8f7f77a]  cursor-pointer rounded-full pb-2 px-[5px] pt-1 text-[#222222]'> {false ? (<span className='spinner '><SpinnerIcon /></span>) : (<span onClick={handleOpen} className=' cursor-pointer '><EditIcon /></span>)}  </button>
                    </div>
                </div>
            </React.Fragment>
            {/* model */}
            <React.Fragment>
                <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
                    <DialogHeader className='text-base py-1 my-0'>Navbar Edit </DialogHeader>
                    <DialogBody className='h-[81vh] py-1 my-0' >
                        <div className="grid h-full overflow-auto">
                            <div className="m-auto">
                                <div className="  w-full  ">
                                    <div className=' grid grid-cols-10 gap-2 mb-3'>
                                        <div className=' col-span-2'>
                                            <div className='text-xs'>Columns One</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 1)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex justify-between my-1'>
                                                                    <div className='cursor-pointer text-xs pt-1' title={i?.url}>
                                                                        {i?.title}
                                                                    </div>
                                                                    <div className='cursor-pointer'>
                                                                        <div onClick={() => remove(index)} style={{fontSize:"11px"}} className=' p-1 rounded-full mr-3 text-white text-sm bg-[#0e0e0e5d]'>
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
                                        <div className=' col-span-2'>
                                            <div className='text-xs'>Columns Second</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 2)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex justify-between my-1'>
                                                                    <div className='text-xs cursor-pointer' title={i?.url}>
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
                                        <div className=' col-span-2'>
                                            <div className='text-xs'>Columns Third</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 3)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex justify-between my-1'>
                                                                    <div className='text-xs cursor-pointer' title={i?.url}>
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
                                        <div className=' col-span-2'>
                                            <div className='text-xs'>Columns Fourth</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 4)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='flex text-xs justify-between my-1'>
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
                                        <div className=' col-span-2'>
                                            <div className='text-xs'>Columns Fifth</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 5)?.map((i, index) => (
                                                            <React.Fragment key={index}>
                                                                <div className='text-xs flex justify-between my-1'>
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
                                                            <div className=''>
                                                                <div className="form-control mt-6">
                                                                    <Button type={'submit'}
                                                                        className={`w-full bg-primarybg   hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
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
                                                                        <Selector defaultValues={field.value ?? null} label={"Column"} error={error} selectionOption={[1, 2, 3, 4, 5]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
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


