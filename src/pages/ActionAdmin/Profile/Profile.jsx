import React from "react";
// import { Button, Textfield as TextField, TextArea } from "../Index";
import { Button , TextField,TextArea} from "components";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { MailSVG , PhoneNumber , PhotoIcon} from "icons";
import styled from "styled-components";
// import { joiResolver } from "@hookform/resolvers/joi";

export default function Profile(props) {
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
  // edit profile 
  const EditProfile = React.memo(() => {
    return (
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
    )
  }, [])
  return (
    <React.Fragment>
      <EditProfile />
      <div className="lg:px-36 md:px-10 px-2 mt-8 ">
        <div className=" p-2 border rounded-lg border-[#c0c0c05e]">
          <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
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
  );
}

const FileInput = styled.input`
  display: none;
`;
