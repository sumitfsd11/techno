import React from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper , Button} from 'components'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import {  EmptyData } from 'components/utilsComponents/Loader'
import { useFetch } from "hooks"
import toast from 'react-hot-toast'
import { DeleteIcon } from 'icons';
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function Blogs() {
    const [reload, setReload] = React.useState(false)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = React.useState(1)
    // const [filter_values, setFilterValues] = React.useState()

    const onSuccess = React.useCallback((response, method) => {
        if (method === 'delete') {
            setReload(true)
            toast.success('Deleted successfully !')
        }
    }, [])

    const onFailure = React.useCallback((error) => {

    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/blog_list/?page=${currentPage}`,
        skipOnStart: false,
        onSuccess,
        onFailure
    })
    const deletedPost = React.useCallback((id) => {
        callFetch({
            url: `/delete_blog/${id}`,
            method: 'delete',
        })
    }, [callFetch])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/blog_list/?page=${a}`,
            method: 'get'
        })
    }, [callFetch])

    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])

    React.useEffect(() => {
        if (reload) {
            callFetch({
                url: `/blog_list/?page=${currentPage}`,
                method: 'get'
            })
            setReload(reload)
        }
    }, [reload, currentPage, callFetch])
    
    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <div className='flex justify-between'>
                        <div className="">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">Blogs#</h2>
                        </div>
                        <div className=''>
                            <Button onClick={()=>redirect__('/admin/blog')} className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `}
                            >
                                CREATE NEW
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs relative h-[60vh] ">
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Posted By</th>
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Created At</th>
                                    <th className="p-3 text-right">Status</th>
                                </tr>
                            </thead>
                            {
                                    <React.Fragment>
                                        {
                                              data?.response?.results?.length === 0 ? (
                                                <React.Fragment>
                                                    <EmptyData />
                                                </React.Fragment>
                                            ) :
                                            data?.response?.results.map((i, index) => (
                                                <React.Fragment key={index}>
                                                    <tbody>
                                                        <tr className=" border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                            <td className="p-3 cursor-pointer hover:bg-blue-300 hover:bg-opacity-11 rounded-lg"  style={{ width: '30px'}}  onClick={() => redirect__(`/admin/blog/${i?.id}/?${i?.title}`)}>
                                                                <p>{i?.id}</p>
                                                            </td>
                                                            <td className="p-3">
                                                              
                                                                            <p className='cursor-pointer'>{i?.first_name ?? i?.user_id?.first_name+' '+i?.user_id?.last_name}</p>
                                                           
                                                            </td>
                                                            <td className="p-3">

                                                                <p className="dark:text-gray-400">{i?.title}</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p>{moment(i?.created_on).format('MMMM Do YYYY')}</p>
                                                                <p className="dark:text-gray-400">Tuesday</p>
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                <p>{i?.reader_count}</p>
                                                            </td>
                                                            <td className="p-3 text-left">
                                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                                    <span>{i?.status}</span>
                                                                </span>
                                                            </td>
                                                            <span onClick={() => deletedPost(i?.id)} className='cursor-pointer p-2 pl-4 py-2'>
                                                            <div className=' p-1 rounded-md mt-8 text-white text-md bg-[#0e0e0e5d] w-9'>
                                                             <DeleteIcon />
                                                             </div>
                                                            </span>
                                                        </tr>

                                                    </tbody>
                                                </React.Fragment>
                                            ))
                                        }
                                    </React.Fragment>
                            }
                        </table>
                    </div>
                </div>
            </React.Fragment >
        )
    })


    return (
        <div>
            <div>
                {/* <React.Fragment>
                    <div className='flex justify-between mt-4 lg:px-36 md:px-10 px-2'>
                        <div>
                        </div>
                        <div>
                            <div className='relative ml-1'>
                                <div className='absolute font-semibold text-[#d6d4d4] top-[17px] left-3 z-[4]'>
                                    <SearchBarSVG />
                                </div>
                                <SearchInput onChange={(e)=> setFilterValues(e.target.value)} className="searchbar" type="search" placeholder={'By Event Name , Date  '} />
                            </div>
                        </div>
                    </div>
                </React.Fragment> */}
            </div>
            <LoaderWrapper isLoading={isLoading} component={
            (<Table />)}/>
            <div className='lg:px-10 md:px-5 px-1'>
                <PaginationWrapper labelText={` Page Number ${data?.response?.current_page ?? '--'} of ${data?.response?.page_count ?? '--'}`} >
                    <Pagination showSizeChanger={false}
                        defaultCurrent={1}
                        current={currentPage}
                        defaultPageSize={10}
                        total={data?.response?.page_count}
                        onChange={paginationAction} />
                </PaginationWrapper>
            </div>
        </div>
    )
}
