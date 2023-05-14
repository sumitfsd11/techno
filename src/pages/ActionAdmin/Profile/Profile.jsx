import React from "react";
import { Button, TextField, TextArea } from "components";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { MailSVG, PhoneNumber, PhotoIcon } from "icons";
import { useAuth, useFetch } from "hooks";
import { toast } from "react-hot-toast";
import { Img_, file_base64 } from "utils/common.utils";
import { LoaderWrapper } from "components/utilsComponents/Loader";

export default function Profile(props) {
  const [open, setOpen] = React.useState(false);
  const { userValue } = useAuth()
  const methods = useForm({
    // resolver:joiResolver
    mode: "all",
    defaultValues: {
      mobile_num: "",
      bio: "",
      lastName: "",
      firstName: "",
      profileImg: ""
    }
  })


  const { control,
    handleSubmit, setValue,
     formState: { isDirty, isValid } } = methods

  const onSuccess = React.useCallback((response, method) => {
    if (method === 'put') {
      setOpen(false)
      toast.success("Profile updated  successfully !")
    }
  }, [])
  const onFailure = React.useCallback((error) => {
    toast.error(error?.response?.message)
  }, [])

  const { isLoading, data, callFetch } = useFetch({
    url: `/profile_update/${userValue?.id}`,
    skipOnStart: false,
    method: 'get',
    onSuccess,
    onFailure
  });




  const onSubmit = React.useCallback((data) => {
    let formData__ = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      mobile_no: data?.mobile_num,
      detail: data?.bio,
      profile_picture: data?.profileImg
    }
    callFetch({
      url: `/profile_update/${userValue?.id}`,
      method: 'put',
      data: formData__
    })
  }, [callFetch , userValue?.id])

  console.log(userValue)
  const handleOpen = () => setOpen(!open);

  React.useEffect(() => {
    if (!isLoading) {
      let data__ = data?.response?.message;
      setValue('mobile_num', data__?.mobile_no, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true
      })
      setValue('bio', data__?.detail, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true
      })
      setValue('lastName', data__?.last_name, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true
      })
      setValue('firstName', data__?.first_name, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true
      })
      setValue('profileImg', data__?.profile_picture, {
        shouldTouch: true,
        shouldDirty: true,
        shouldValidate: true
      })
    }
  }, [setValue, isLoading, data])

  return (
    <React.Fragment>
      <React.Fragment>
        <React.Fragment>
          <Dialog size={'xl'} open={open} className="border-none  " handler={handleOpen}>
            <DialogHeader className='text-base py-1 my-0'>Profile Edit </DialogHeader>
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
                                              file_base64(e.target.files[0]).then((response) => {
                                                field.onChange(response);
                                              })
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
                            name="firstName"
                            render={({ field,
                              fieldState: { invalid, isTouched, isDirty, error } }) => (
                              <TextField type={"text"}
                                error={error}
                                {...field}
                                placeholder={"First Name"}
                                name="firstName"
                                icon={<MailSVG />}
                                className={"w-full pl-6"} />
                            )} />
                        </div>
                        <div className="mb-3">
                          <Controller
                            control={control}
                            name="lastName"
                            render={({ field,
                              fieldState: { invalid, isTouched, isDirty, error } }) => (
                              <TextField type={"text"}
                                error={error}
                                {...field}
                                placeholder={"Last Name"}
                                name="lastName"
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
                            isLoading={isLoading}
                            className={`w-full bg-primarybg hover:drop-shadow-none drop-shadow-none hover:shadow-none shadow-none  rounded-full `}
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
      </React.Fragment>
      <LoaderWrapper isLoading={isLoading} component={(
        <React.Fragment>
          <div className="lg:px-36 md:px-10 px-2 mt-8 ">
            <div className=" p-2 border rounded-lg border-[#c0c0c05e]">
              <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img src={Img_(data?.response?.message?.profile_picture)} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">{data?.response?.message?.fullname}</h4>
                    <p className="dark:text-gray-400">{data?.response?.message?.detail}</p>
                    <Button onClick={handleOpen}
                      className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black drop-shadow-none box-shadow-none rounded-full `} type={'submit'}
                    >{'EDIT'}</Button>
                  </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">

                </div>
              </div>
            </div>
            <div className="my-5">
            </div>
          </div>
        </React.Fragment>
      )} />
    </React.Fragment>
  );
}

