import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="h-screen fixed top-9 z-10 w-[100%] left-0 right-0 transition-opacity  bottom-0 mt-8 bg-white">
                <div className="flex justify-center items-center h-full">
                    <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt />
                </div>
            </div>
        </div>
    )
}

export const EmptyData = function () {
    return (
        <React.Fragment>
            <div className='absolute top-7 left-0 right-0 bottom-0 '>
                <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                                <span className="sr-only">Not</span>Found
                            </h2>
                            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this .</p>
                            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}
export const GridLoader = function () {
    return (
        <React.Fragment>
            <div className='absolute top-7 left-0 right-0 bottom-0 '>
                <div className="h-screen  w-[100%] left-0  transition-opacity  bottom-0 mt-8 bg-white">
                    <div className="flex justify-center items-center h-[50vh]">
                        <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}