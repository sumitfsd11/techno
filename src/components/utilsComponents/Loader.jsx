import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="h-screen mt-8 bg-white">
                <div className="flex justify-center items-center h-full">
                    <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt />
                </div>
            </div>
        </div>
    )
}