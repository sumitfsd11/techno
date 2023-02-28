import React from 'react'
import SearchBar from '../SearchBar'
export default function TopHeader() {
    return (
        <React.Fragment>
            <div className='grid border-b bg-[#f6fbfe] border-b-[#c0c0c074] grid-cols-12 h-[8vh]'>
                <div className='col-span-3'>

                </div>
                <div className='col-span-4'>
                    <SearchBar />
                </div>
                <div className='col-span-5'>

                </div>
            </div>
        </React.Fragment>
    )
}
