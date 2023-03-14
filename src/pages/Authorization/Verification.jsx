import React from 'react'
import { TextField, Button } from 'components';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import { rerdirectOut } from 'utils/common.util';
import { MailSVG } from 'icons';
// import ImageTechnomatic Academy from "assets/Technomatic Academy.png";
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from "hooks";

 export const  VerifyOtp=()=>{
    const { isLoading, verify_otp, error } = useAuth();
    const state  = useLocation()
    const navigate = useNavigate();
    const methods = useForm({
        // resolver: yupResolver(loginValidationSchema),
        mode: "all",
        defaultValues: {
            username: ""
        }
    });
    console.log(state ,"" , state?.username)
    const { control, handleSubmit, setError,
        formState: { isDirty, isValid }
    } = methods;

    const onSubmit = React.useCallback((data) => {
        console.warn(data)
        // verify_otp(data)
    }, [verify_otp]);

    React.useEffect(() => {
        error && setError('username', { type: 'custom', message: error })
    }, [setError, error])

    return (
        <React.Fragment>
            <div className="grid h-[100vh] bg-transparent background_authpage_logim">
                <div className="m-auto lg:w-[27%] bg-white p-[30px] rounded-md md:w-[40%] w-[85%]">
                    <div className="gird">
                        {/* <img src={ImageTechnomatic Academy} className="w-[150px] mb-5 h-auto m-auto" alt="loading..." /> */}
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <span>
                                    <Controller
                                        control={control}
                                        name="username"
                                        render={({
                                            field,
                                            fieldState: { invalid, isTouched, isDirty, error },
                                        }) => (
                                            <TextField type={"username"} error={error}  {...field} name={"username"} icon={''} placeholder={"username ID"} className={"w-full pl-6"} />
                                        )}
                                    />
                                </span>
                            </div>
                            <div className="form-control pl-1">
                                <div className="flex  justify-between">
                                    <label className="label">
                                        <span className="label-text-alt  link link-hover cursor-pointer pt-2 leading-[6px] text-xs " onClick={() => navigate('/login')}>Back to login  ?</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-3">
                                <Button is={isLoading} className={`w-full bg-[#7150e9] rounded-full `} type={'submit'}
                                    isDisabled={!isDirty || !isValid}
                                >{'SEND OTP'}</Button>
                            </div>

                            <section className='form_control p-0 mb-3 mt-4' style={{ boxShadow: "none", background: "none" }}>
                                <p className="text-sm text-gray-500 py-2"><span>By continuing, you agree to Technomatic Academy's  </span><span className='text-blue-500 font-semibold'><Link to="" >Conditions</Link></span> of Use and <span className='text-blue-500 font-semibold'><Link to="" >Privacy</Link></span>  Notice.</p>
                                <details className='text-sm'>
                                    <summary className='text-sm cursor-pointer font-semibold'>Need to help ?</summary>
                                    <div className='text-blue-500 '><span className='cursor-pointer ' 
                                    // onClick={() => rerdirectOut(`mailto:${'lenwoper@gmail.com'}`)}
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

