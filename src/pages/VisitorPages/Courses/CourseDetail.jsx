import React from 'react';
import CouserBanner from '../components/Banner';
import CourseDetailBase from './components/CourseDetailBase';

export default function CourseDetail({props , children}) {

  return (
    <div>
      <CouserBanner props={{
        bg:props?.banner_background_image,
        title:props?.banner_title,
        des:props?.banner_des,
      }}/>
      <CourseDetailBase props={props} >
        {children}
        </CourseDetailBase>
    </div>
  )
}
