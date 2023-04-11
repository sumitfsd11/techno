
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
        }
    })

    const { control,
        handleSubmit, watch,
        formState: { isDirty, isValid } } = methods

    const onSubmit = React.useCallback((data) => {
        console.log(data)
    }, [])

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "column__field",
    });

    const onSubmit__arr = React.useCallback((data) => {
        append({ title: data?.title_ar, content: data?.link, column_num: data.column_num })

    }, []);
    console.log(watch("column__field"))
    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <React.Fragment>
                <Navbar />
                <div className='relative mt-[90px]'>
                    <div className='absolute z-[190] bottom-10 right-10'>
                        <button className='w-[35px] h-[35px] bg-[#27262669] hover:bg-[#f8f7f77a]  cursor-pointer rounded-full pb-2 px-[5px] pt-1 text-[#222222]'> {false ? (<span className='spinner '><SpinnerIcon /></span>) : (<span onClick={handleOpen} className=' cursor-pointer '><EditIcon /></span>)}  </button>
                    </div>
                </div>
            </React.Fragment>
            {/* model */}
            <React.Fragment>
                <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
                    <DialogHeader className='text-base py-1 my-0'>Banner Edit </DialogHeader>
                    <DialogBody className='h-[81vh] py-1 my-0' >
                        <div className="grid h-full overflow-auto">
                            <div className="m-auto">
                                <div className="  w-full  ">
                                    <div className=' grid grid-cols-12 gap-2 mb-3'>
                                        <div className=' col-span-2'>
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
                                        <div className=' col-span-2'>
                                            <div className=''>Columns Second</div>
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
                                        <div className=' col-span-2'>
                                            <div className=''>Columns Third</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 3)?.map((i, index) => (
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
                                        <div className=' col-span-2'>
                                            <div className=''>Columns Fourth</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 4)?.map((i, index) => (
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
                                        <div className=' col-span-2'>
                                            <div className=''>Columns Fifth</div>
                                            <section className=''>
                                                <ul>
                                                    {
                                                        watch("column__field")?.filter((i) => i.column_num === 5)?.map((i, index) => (
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
                                                                    name="columns_one_url"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_one_url"
                                                                            placeholder={"Columns One Url"}
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
                                                                    name="columns_two_url"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_two_url"
                                                                            placeholder={"Columns Two Url"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_three"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_three"
                                                                            placeholder={"Columns Third"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_three_url"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_three_url"
                                                                            placeholder={"Columns Third Url"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                        </div>
                                                        <div className='col-span-4'>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_fourth"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_fourth"
                                                                            placeholder={"Columns Fourth"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_fourth_url"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_fourth_url"
                                                                            placeholder={"Columns Fourth Url"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>

                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_fifth"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_fifth"
                                                                            placeholder={"Columns Fifth"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>
                                                            <div className="mb-3">
                                                                <Controller
                                                                    control={control}
                                                                    name="columns_fifth_url"
                                                                    render={({ field,
                                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                                        <TextField type={"text"}
                                                                            error={error}
                                                                            {...field}
                                                                            name="columns_fifth_url"
                                                                            placeholder={"Columns Fifth Url"}
                                                                            className={"w-full pl-6"} />
                                                                    )} />
                                                            </div>

                                                        </div>
                                                        <div className=' col-span-4'>
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
                                                                        <Selector type={"text"} defaultValues={field.value ?? null} label={"Column"} error={error} selectionOption={[1, 2 , 3, 4, 5]}  {...field} name={"subtitle"} placeholder={"Sub title"} className={"w-full pl-6"} />
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


