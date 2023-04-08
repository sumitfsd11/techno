import React from 'react'
import { Button, TextField, TextArea } from "components";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { MailSVG, PhoneNumber, PhotoIcon } from "icons";
import { EditIcon } from 'icons';
import DatailBanner from 'pages/VisitorPages/Home/components/DatailBanner';
export default function FeatureLEdit() {
    const [open, setOpen] = React.useState(false);
    const methods = useForm({
        // resolver:joiResolver
        mode: "all",
        defaultValues: {
            email: "",
            mobile_num: "",
            bio: "",
            profileImg: ""
        }
    })

    const { control,
        handleSubmit,
        setError, formState: { isDirty, isValid } } = methods

    const onSubmit = React.useCallback((data) => {
        console.log(data)
    }, [])

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <React.Fragment>
                <div className='relative'>
                    <div className='absolute top-2 right-2'>
                        <button onClick={handleOpen} className='w-[35px] h-[35px] bg-[#f8f7f769] hover:bg-[#f8f7f77a] cursor-pointer rounded-full pb-2 px-[5px] pt-1 text-[#222222]'><EditIcon/> </button>
                    </div>
                </div>
                <DatailBanner />
            </React.Fragment>
            {/* model */}
            <React.Fragment>
                <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
                    <DialogHeader className='text-base py-1 my-0'>Banner Edit </DialogHeader>
                    <DialogBody className='h-[81vh] py-1 my-0' >
                        <div className="grid">
                            <div className="m-auto">
                                <div className=" lg:w-[450px] md:w-[450px] w-full ">
                                    <FormProvider {...methods}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid">
                                                <div className="m-auto">
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
                                                                    <div className=" border border-[#c0c0c08a] relative overflow-hidden w-[90px] my-6 bg-transparent rounded-full h-[90px]">
                                                                        {src && (<img src={src} className="w-full h-full" alt="loading..." />)}
                                                                        <div className="grid absolute profile_upload  bottom-0 w-full h-[38%] bg-transparent hover:bg-[#0f0f0f83] ">
                                                                            <div className="m-auto  cursor-pointer text-white ">
                                                                                <input
                                                                                    type="file"
                                                                                    className="w-full cursor-pointer h-full"
                                                                                    onChange={(e) => {
                                                                                        field.onChange(e.target.files);
                                                                                    }}
                                                                                />
                                                                                <PhotoIcon />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className=" px-2 text-[#f5594e] mb-0 pt-1 text-xs ">{error?.message}</p>
                                                                </React.Fragment>
                                                            );
                                                        }} />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <Controller
                                                    control={control}
                                                    name="email"
                                                    render={({ field,
                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextField type={"text"}
                                                            error={error}
                                                            {...field}
                                                            placeholder={"Email"}
                                                            name="email"
                                                            icon={<MailSVG />}
                                                            className={"w-full pl-6"} />
                                                    )} />
                                            </div>
                                            <div className="mb-3">
                                                <Controller
                                                    control={control}
                                                    name="mobile_num"
                                                    render={({ field,
                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextField type={"text"}
                                                            error={error}
                                                            {...field}
                                                            name="mobile_num"
                                                            placeholder={"Phone Number"}
                                                            icon={<PhoneNumber />}
                                                            className={"w-full pl-6"} />
                                                    )} />
                                            </div>
                                            <div className="mb-6">
                                                <Controller
                                                    control={control}
                                                    name="bio"
                                                    render={({ field,
                                                        fieldState: { invalid, isTouched, isDirty, error } }) => (
                                                        <TextArea type={"text"}
                                                            error={error}  {...field}
                                                            name={"bio"}
                                                            // icon={<MailSVG />}
                                                            placeholder={"Address"} className={"w-full pl-6"} />
                                                    )} />
                                            </div>
                                            <div className="form-control mt-6">
                                                <Button type={'submit'}
                                                    className={`w-full primary_color hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
                                                    isDisabled={!isDirty || !isValid}>{`SUBMIT`}</Button>
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
