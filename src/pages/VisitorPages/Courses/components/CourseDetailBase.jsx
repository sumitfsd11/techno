import React from 'react'
import AccordionComponent from './Accordion'
import TabsComponent from './Tabs'
import CourseCard from './Card'
export default function CourseDetailBase() {
    return (
        <div>
            <div className='lg:px-32 md:px-4 px-0'>
                <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12 gap-5'>
                    <div className='pt-4 lg:col-span-8 md:grid-cols-12 grid-cols-12'>
                        <TabsComponent />
                    </div>
                    <div className='lg:col-span-4 md:grid-cols-12 grid-cols-12'>
                        <CourseCard  />
                    </div>
                </div>
                <AccordionComponent />
            </div>
        </div>
    )
}