import React from 'react'
import SearchBar from '../SearchBar';
import QuickReach from '../HeaderUtils/QuickReach';
import { useLocation } from 'react-router-dom';
export default function TopHeader() {
    const location = useLocation()
   
    return (
        <React.Fragment>
            <div className='grid border-b gap-2 bg-[#f6fbfe] border-b-[#c0c0c074] grid-cols-12 h-[8vh]'>
                <div className='col-span-4'>
                    <div>
                        {location?.state?.title ?? location.pathname.replace("/", " ").replace("-", " ")}
                    </div>
                </div>
                <div className='col-span-4'>
                    <SearchBar />
                </div>
                <div className='col-span-4'>
                    <div className='flex justify-between w-full'>
                        <div className=''>

                        </div>
                        <div className=''>
                            <QuickReach />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
