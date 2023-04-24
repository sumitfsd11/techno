import React from 'react';
import CouserBanner from '../components/Banner';
import CourseDetailBase from './components/CourseDetailBase';

export default function CourseDetail({props , children}) {

  return (
    <div>
      <CouserBanner props={props}/>
      <CourseDetailBase props={props} >
        {children}
        </CourseDetailBase>
    </div>
  )
}
