import React from 'react';
import CouserBanner from '../components/Banner';
import CourseDetailBase from './components/CourseDetailBase';
import { useFetch } from 'hooks';
import { useParams, useLocation } from 'react-router-dom';
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function CourseDetail({ props, children }) {
  const { id } = useParams()
  const location = useLocation()
  const { isLoading , data } = useFetch({
    url: `/course_get/${id}`,
    skipOnStart: false,
  })

  React.useInsertionEffect(() => {
    if (window) {
      let pattern = /admin/
      if (!pattern?.test(location?.pathname)) {
        const tag = document.getElementsByTagName("div");
        for (let i = 0; i < tag.length; i++) {
          tag[i].setAttribute("contenteditable", "false");
          tag[i].setAttribute("contentEditable", "false");
        }
      }
    }
  })

  return (
    <div>
      <LoaderWrapper isLoading={isLoading} component={(
        <React.Fragment>
          <CouserBanner props={props ? {
            bg: props?.banner_background_image,
            title: props?.banner_title,
            des: props?.banner_des,
          } : {
            bg: data?.response?.banner_background_image,
            title: data?.response?.banner_title,
            des: data?.response?.banner_des,
          }} />
          <CourseDetailBase props={props ?? data?.response} >
            {children ?? (<div className='blog_container__ outline-none border-none ' dangerouslySetInnerHTML={{ __html: data?.response?.course_des }}></div>)}
          </CourseDetailBase>
        </React.Fragment>
      )} />
    </div>
  )
}
