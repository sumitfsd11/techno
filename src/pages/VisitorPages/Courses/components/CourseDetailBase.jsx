import React from 'react'
import AccordionComponent from './Accordion'
// import TabsComponent from './Tabs'
import CourseCard from './Card'


export default function CourseDetailBase({ props, children }) {
    return (
        <div>
            <div className='lg:px-32 md:px-4 px-0'>
                <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12 gap-5'>
                    <div className='col-span-12 lg:hidden md:hidden block px-4'>
                    <CourseCard props={props} />
                    </div>
                    <div className='pt-4 lg:col-span-8 md:col-span-12 col-span-12'>
                        {children}
                    </div>
                    <div className='lg:col-span-4 md:grid-cols-12 grid-cols-12 lg:inline md:hidden hidden'>
                    <CourseCard props={props} />
                    </div>
                </div>
                <div className='mt-3'>
                    {props?.faqs && (<AccordionComponent props={props?.faqs} />)}
                </div>
            </div>
        </div>
    )
}
