import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from "hooks";
import { LoaderWrapper } from 'components/utilsComponents/Loader';
import {
  Typography,
} from "@material-tailwind/react";

export default function ApplyDetail() {
  const { id } = useParams()
  const { isLoading, data, callFetch } = useFetch({
    url: `/apply_get/${id}`,
    skipOnStart: false,
  })

  React.useEffect(() => {
    if (id) {
      callFetch({
        url: `/apply_get/${id}`,
        method: 'get',
      })
    }
  }, [callFetch, id])

  const DetailUI = React.memo(() => {
    return (
      <React.Fragment>
        <div className='  mt-10 '>
          <div className='lg:px-40 md:px-8 px-2'>
            {
              data?.response?.course_name === "Road To Amazon" ? (
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="font-semibold text-base" >
                        Name
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base">
                        {data?.response?.name}
                      </Typography>
                    </div>
                  </div>

                  {/*  */}
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold">
                        Mail
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base ">
                        {data?.response?.mail_id}
                      </Typography>
                    </div>
                  </div>

                  {/*  */}
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Country
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base ">
                        {data?.response?.country_name}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Pincode
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.postal_code}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Contact Number
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.contact_number}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Intrested in stuying
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.course_name}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Course Role
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.job_role_aws}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Linkedin Profile
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.linkedin_profile_aws}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Exprience
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.profession_exprience}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Why interest ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.dev_links}
                      </Typography>
                    </div>
                  </div>

                </div>
              ) : (
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Name
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.name}
                      </Typography>
                    </div>
                  </div>

                  {/*  */}
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Mail
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.mail_id}
                      </Typography>
                    </div>
                  </div>

                  {/*  */}
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Country
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.country_name}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Pincode
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.postal_code}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Contact Number
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.contact_number}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Inerested in stuying
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.dev_links}
                      </Typography>
                    </div>
                  </div>
                  {/*  */}
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Highest level of education
                      </Typography>
                    </div>

                    <div className=''>
                      <Typography className="text-base ">
                        {data?.response?.education_level}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        What pace works for you self_belief
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.name_of_pace}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className="text-base font-semibold ">
                        Do you believe our intructor can make you zero to hero ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base  ">
                        {data?.response?.beleieveOnInstructor}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Do you believe that you success is our success ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className=' text-base '>
                        {data?.response?.success}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Do you know this is a professional training , not a school course ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className=' text-base'>
                        {data?.response?.is_it_taining}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        What di you hope to do upon completing the ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className=' text-base '>
                        {data?.response?.hopeFromCourse}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        if employed , so what is total work hours per week ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className=' text-base '>
                        {data?.response?.weekly_working}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        How did you hear about us ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className=' text-base '>
                        {data?.response?.what_u_hear}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Do you think interaction is the  part of training ?
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base">
                        {data?.response?.class_interaction}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Work authorization is USA or Canada
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base">
                        {data?.response?.working_auth}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Plan study time for next 10 weeks
                      </Typography>
                    </div>
                    <div className=''>
                      <Typography className="text-base">
                        {data?.response?.perday_study_time}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Do you continue study for couple of weeks to get desired IT job?
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.is_continuous_learn}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        You know this course land you in the world of technology?
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.regular_team_learning}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Are you willing to study as a team on regular basis?
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.hope_after_cmp}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        What is your inspiration for changing your career?
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.inspiration}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Share links to your portfolio or social networks (Github, LinkedIn, Blog, etc.)
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.portfolio_link}
                      </Typography>
                    </div>
                  </div>

                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Write down IT skills if you have any.
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.your_skills}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Name of the person who referred you
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.referred_name}
                      </Typography>
                    </div>
                  </div>
                  <div className='lg:col-span-4 md:col-span-4 '>
                    <div className=' text-base font-semibold'>
                      <Typography className=' text-base font-semibold'>
                        Tell us about yourself. Why this the right next step for you.
                      </Typography>
                    </div>
                    <div className='text-base'>
                      <Typography className=' text-base '>
                        {data?.response?.about_yr_self}
                      </Typography>
                    </div>
                  </div>
                </div>

              )
            }

          </div>
        </div>
      </React.Fragment>
    )
  }, [])

  return (
    <div>
      <LoaderWrapper isLoading={isLoading} component={<DetailUI />} />
    </div>
  )
}
