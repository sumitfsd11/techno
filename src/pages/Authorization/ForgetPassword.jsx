import React from 'react'
import { TextField, Button  } from 'components';
import {  EyeSVG } from 'icons';
import { FormProvider, useForm, Controller } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {  useFetch } from "hooks";
import toast from "react-hot-toast";
import img from "assets/icon.png";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation()

  const methods = useForm({
    // resolver: yupResolver(loginValidationSchema),
    mode: "all",
    defaultValues: {
      password: "",
      password_confirm: "",
      otp: ""
    }
  });

  console.log(state)

  const { control, handleSubmit, setError,
    formState: { isDirty, isValid }
  } = methods;

  const onSuccess = React.useCallback((data) => {
    let response = data.response
    if (response) {
      toast.success(response?.message)
      navigate("/admin/login")
    }
  }, [navigate])

  const onFailure = React.useCallback((data) => {
    let response = data.error
    if (response) {
      setError("otp", { type: 'custom', message: response?.message })
    }
  }, [setError])

  const { isLoading, callFetch } = useFetch({
    initialUrl: "/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  })

  const onSubmit = React.useCallback((data) => {
    callFetch({
      url: '/forget_password/',
      method: 'post',
      data: {
        "username": state,
        "password": data?.password,
        "confirm_password": data?.password_confirm,
        "otp": data?.otp
      }
    })
  }, [callFetch]);

  return (
    <React.Fragment>
      <div className="grid h-[100vh] bg-transparent background_authpage_logim">
        <div className="m-auto lg:w-[27%] bg-white p-[30px] rounded-md md:w-[40%] w-[85%]">
          <div className="gird">
            <img src={img} className="w-[150px] mb-5 h-auto m-auto" alt="loading..." />
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control">
                <span>
                  <Controller
                    control={control}
                    name="otp"
                    render={({
                      field,
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <TextField type={"text"} error={error}  {...field} name={"otp"} icon={""} placeholder={"OTP"} className={"w-full pl-6"} />
                    )}
                  />
                </span>
              </div>
              <div className="form-control my-3">
                <span>
                  <Controller
                    control={control}
                    name="password"
                    render={({
                      field,
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <TextField type={"password"} error={error}  {...field} name={"password"} icon={<EyeSVG />} placeholder={"New Password"} className={"w-full pl-6"} />
                    )}
                  />
                </span>
              </div>
              <div className="form-control my-3">
                <span>
                  <Controller
                    control={control}
                    name="password_confirm"
                    render={({
                      field,
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <TextField {...field} type={"password"} error={error} name={"password_confirm"} icon={<EyeSVG />} placeholder={"Confirm Password"} className={"w-full pl-6"} />
                    )}
                  />
                </span>
                <div className="flex px-1 justify-between">
                  <label className="label">
                    <span className="label-text-alt hover:underline  link link-hover cursor-pointer text-sm " onClick={() => navigate('/reset-password')}>Didn't get OTP yet ?</span>
                  </label>
                  <div className="flex justify-between">
                    <div className=" pr-2 leading-[18px]">
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <Button
                  isLoading={isLoading}
                  className={`w-full bg-primarybg rounded-full `} type={'submit'}
                // isDisabled={!isDirty || !isValid}
                >{'SUBMIT '}</Button>
              </div>
              <section className='form_control p-0 mb-3 mt-4' style={{ boxShadow: "none", background: "none" }}>
                <p className="text-sm text-gray-500 py-2"><span>By continuing, you agree to Technomatic Academy's  </span><span className='text-blue-500 font-semibold'><Link to="" >Conditions</Link></span> of Use and <span className='text-blue-500 font-semibold'><Link to="" >Privacy</Link></span>  Notice.</p>
                <details className='text-sm'>
                  <summary className='text-sm cursor-pointer font-semibold'>Need to help ?</summary>
                  <div className='text-blue-500 '><span className='cursor-pointer '
                  //  onClick={() => rerdirectOut(`mailto:${'lenwoper@gmail.com'}`)}
                  >Report ?</span></div>
                </details>
              </section>
            </form>
          </FormProvider>
        </div>
      </div>
    </React.Fragment>
  )
}


