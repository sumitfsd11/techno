import React from 'react'
import { TextField, CheckBox, Button } from 'components';
import { MailSVG, PasswordHideSVG, EyeSVG } from 'icons';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from 'utils/validation';
// import ImageHatzoff from "assets/hatzoff.png";
// onClick={() => rerdirectOut(`mailto:${'lenwoper@gmail.com'}`)}
import { useNavigate, Link } from 'react-router-dom';
// import { rerdirectOut } from 'utils/common.util';
import { useAuth } from 'hooks';


export default function Login() {
  const { isLoading,login } = useAuth();
  const navigate = useNavigate();
  const methods = useForm({
    // resolver: yupResolver(loginValidationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { control, handleSubmit, setError,
    formState: { isDirty, isValid }
  } = methods;

  const onSubmit = React.useCallback((data) => {
    login({
      username: data?.email,
      password: data?.password
    })
  }, [login]);



  return (
    <React.Fragment>

      <div className="grid h-[100vh] bg-transparent background_authpage_logim">
        <div className="m-auto lg:w-[27%] bg-white p-[30px] rounded-md md:w-[40%] w-[85%]">
          <div className="gird">
            {/* <img src={ImageHatzoff} className="w-[150px]  mb-5 h-auto m-auto" alt="loading..." /> */}
          </div>
          {/* <button onClick={callss}>click</button> */}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <span>
                  <Controller
                    control={control}
                    name="email"
                    render={({
                      field,
                      fieldState: { invalid, isTouched, isDirty, error },
                    }) => (
                      <TextField type={"text"} error={error}  {...field} name={"email"} icon={<MailSVG />} placeholder={"Email ID"} className={"w-full pl-6"} />
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
                      <TextField {...field} type={"password"} error={error} name={"password"} icon={<EyeSVG className={`w-6 h-6 bg-transparent `} />} placeholder={"Password"} className={"w-full pl-6"} />
                    )}
                  />
                </span>
                <div className="flex px-1 justify-between">
                  <label className="label">
                    <span className="label-text-alt hover:underline  link link-hover cursor-pointer text-sm " onClick={() => navigate('/verify-otp')}>Forgot password ?</span>
                  </label>
                  <div className="flex justify-between">
                    <div className=" pr-2 leading-[18px]">
                      <span className="text-sm  leading-[4px]">Remember me </span>
                    </div>
                    <div className="">
                      <Controller
                        control={control}
                        name="remberme"
                        render={({
                          field,
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <input type={"checkbox"} {...field} name={"remberme"} className={` cursor-pointer`} />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <Button isLoading={isLoading} className={`w-full gradient rounded-full `} type={'submit'}
                  isDisabled={!isDirty || !isValid}
                >{'LOGIN'}</Button>
              </div>

              <section className='form_control p-0 mb-3 mt-4' style={{ boxShadow: "none", background: "none" }}>
                {/* <div className="label-text-alt hover:underline  link link-hover cursor-pointer text-sm " onClick={() => navigate('/sigup')}>Haven't account ?</div> */}
                <p className="text-sm text-gray-500 py-2"><span>By continuing, you agree to Technomatic Academy's  </span><span className='text-blue-500 font-semibold'><Link to="" >Conditions</Link></span> of Use and <span className='text-blue-500 font-semibold'><Link to="" >Privacy</Link></span>  Notice.</p>
                <details className='text-sm'>
                  <summary className='text-sm cursor-pointer font-semibold'>Need to help ?</summary>
                  <div className='text-blue-500 '><span className='cursor-pointer ' >Report ?</span></div>
                </details>
              </section>
            </form>
          </FormProvider>
        </div>
      </div>
    </React.Fragment>
  )
}

