import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from "hooks";
import { Button } from "components"
import { GridLoader, EmptyData, LoaderWrapper } from 'components/utilsComponents/Loader'

export default function FeedBacks() {
    const navigate = useNavigate()

    const { isLoading, data } = useFetch({
        url: `/feedback_list/`,
        skipOnStart: false,
    })

    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])


    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <div className='flex justify-between'>
                        <div className="">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">FeedBacks#</h2>
                        </div>
                        <div className=''>
                            <Button onClick={() => redirect__('/admin/feedback')} className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `}
                            >
                                CREATE NEW
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs h-[10vh]">
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Id #</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Roll</th>
                                    <th className="p-3 w-[50%]">feedback</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <React.Fragment>
                                {
                                    isLoading ? (<GridLoader />) :
                                        data?.response?.results?.length === 0 ? (
                                            <React.Fragment>
                                                <EmptyData />
                                            </React.Fragment>
                                        ) :
                                            data?.response?.map((i, index, arr) => (
                                                <tbody>
                                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                        <td className="p-3 cursor-pointer hover:bg-blue-300 hover:bg-opacity-11 rounded-lg"  style={{ width: '30px', height:'10px'}} onClick={() => redirect__(`/admin/feedback/${i?.id}`)}>
                                                            <p >{i?.id}</p>
                                                        </td>
                                                        <td className="p-3">
                                                            <p>{i?.first_name}</p>
                                                        </td>
                                                        <td className="p-3">
                                                            <p>{i?.roll}</p>
                                                        </td>
                                                        <td className="p-3 w-[50%]">
                                                            <p className="dark:text-gray-400 ">{i?.feedback}</p>
                                                        </td>
                                                        <td className="p-3 text-left">
                                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                                <span>{i?.status}</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                }
                            </React.Fragment>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    })


    return (
        <div>
            <div>
                <React.Fragment>
                    <div className='flex justify-between mt-4 lg:px-36 md:px-10 px-2'>
                        <div>

                        </div>
                        <div>
                        </div>
                    </div>

                </React.Fragment>
            </div>
            <LoaderWrapper isLoading={isLoading} component={(
                <React.Fragment>
                    <Table />
                    <div className='lg:px-10 md:px-5 px-1'>
                    </div>
                </React.Fragment>
            )} />
        </div>
    )
}
