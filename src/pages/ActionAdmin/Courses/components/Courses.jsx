import React from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper, Button } from 'components'
// import styled from 'styled-components'
// import { SearchBarSVG } from 'icons'
import { useNavigate } from 'react-router-dom';
import { useFetch } from "hooks";
import { DeleteIcon } from 'icons';
import toast from 'react-hot-toast';
import { GridLoader, EmptyData } from 'components/utilsComponents/Loader'
import { Tooltip } from 'antd'
import {
    Card,
    CardHeader,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import moment from 'moment'
import { Img_ } from 'utils/common.utils'
import { LoaderWrapper } from 'components/utilsComponents/Loader'

export default function Courses() {
    const navigate = useNavigate()
    const [reload, setReload] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1)
    // const [search_query, SetSearchQuery] = React.useState('')
    const onSuccess = React.useCallback((response, method) => {
        if (method === 'delete') {
            setReload(true)
            toast.success('Deleted successfully !')
        }
    }, [])
    const onFailure = React.useCallback((error) => {
    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: `/get_fast_data/?page=${currentPage}`,
        skipOnStart: false,
        onSuccess,
        onFailure
    });
    const deletedPost = React.useCallback((id) => {
        callFetch({
            url: `/delete_course/${id}`,
            method: 'delete',
        })
    }, [callFetch])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/course_list/?page=${a}`,
            method: 'get'
        })
    }, [callFetch])

    // React.useEffect(() => {
    //     if (!isLoading) {
    //         setTimeout(() => {
    //             callFetch({
    //                 url: `/get_fast_data/?page=${currentPage}&search=${search_query}`,
    //                 method: 'get'
    //             })
    //         }, [600])
    //     }
    // }, [search_query, currentPage, callFetch])

    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])
    React.useEffect(() => {
        if (reload) {
            callFetch({
                url: `/course_list/?page=${currentPage}`,
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
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">Courses#</h2>
                        </div>
                        <div className=''>
                            <Button onClick={() => redirect__('/admin/course/')} className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `}
                            >
                                CREATE NEW
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs relative h-[60vh] ">
                            <thead className="dark:bg-gray-700" >
                                <tr className="text-left">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Created By</th>
                                    <th className="p-3 w-[30%]">Post</th>
                                    <th className="p-3">Last Updated</th>
                                    <th className="p-3 text-right">Created At</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            {
                                isLoading ? (
                                    <React.Fragment>
                                        <GridLoader />
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {
                                            data?.response?.data?.length === 0 ? (
                                                <React.Fragment>
                                                    <EmptyData />
                                                </React.Fragment>
                                            ) :
                                                data?.response?.data?.map((i, index, arr) => (
                                                    <React.Fragment>
                                                        <React.Fragment>
                                                            <tbody>
                                                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                                    <td className="p-3 cursor-pointer hover:bg-blue-300 hover:bg-opacity-11 rounded-lg"  style={{ width: '30px'}} onClick={() => redirect__(`/admin/course/${i?.id}`)}>
                                                                        <p>{i?.id}</p>
                                                                    </td>
                                                                    <td className="p-3">
                                                                        {
                                                                            i?.user_id ? (
                                                                                <Tooltip color='black' placement="bottomLeft" title={
                                                                                    (
                                                                                        <React.Fragment>
                                                                                            <React.Fragment>
                                                                                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem] pt-1">
                                                                                                    <CardHeader
                                                                                                        color="transparent"
                                                                                                        floated={false}
                                                                                                        shadow={false}
                                                                                                        className="mx-0 flex items-center gap-4 pt-0 pb-1 "
                                                                                                    >
                                                                                                        <Avatar
                                                                                                            size="lg"
                                                                                                            variant="circular"
                                                                                                            src={Img_(i?.user_id?.profile_picture)}
                                                                                                            alt="candice wu"
                                                                                                        />
                                                                                                        <div className="flex w-full flex-col gap-0.5">
                                                                                                            <div className="flex items-center justify-between">
                                                                                                                <Typography variant="" color="blue-gray  " className="text-sm font-normal">
                                                                                                                    {i?.user_id?.first_name}
                                                                                                                </Typography>
                                                                                                                <div className="5 flex items-center gap-0">

                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </CardHeader>
                                                                                                </Card>
                                                                                            </React.Fragment>
                                                                                        </React.Fragment>
                                                                                    )
                                                                                }>
                                                                                    <p className='cursor-pointer'>{i?.user_id?.first_name + ' ' + i?.user_id?.last_name}</p>
                                                                                </Tooltip>
                                                                            ) : (
                                                                                <p className='cursor-pointer font-semibold'>--</p>
                                                                            )
                                                                        }
                                                                    </td>
                                                                    <td className="p-3">
                                                                        <p className='font-semibold text-sm'>{i?.banner_title}</p>
                                                                        <p className="dark:text-gray-400">{i?.banner_des}</p>
                                                                    </td>
                                                                    <td className="p-3">
                                                                        <p>01 Feb 2022</p>
                                                                        <p className="dark:text-gray-400">Tuesday</p>
                                                                    </td>
                                                                    <td className="p-3 text-right">
                                                                        {moment(i?.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                                                    </td>
                                                                    <td className="p-3 ">
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
                                                    </React.Fragment>
                                                ))
                                        }
                                    </React.Fragment>
                                )
                            }
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    })


    return (
        <React.Fragment>
            <div>
                <React.Fragment>
                    {/* <div className='flex justify-between mt-4 lg:px-36 md:px-10 px-2'> */}
                        <div>

                        </div>
                        <div>
                            {/* <div className='relative ml-1'>
                                <div className='absolute font-semibold text-[#d6d4d4] top-[17px] left-3 z-[4]'>
                                    <SearchBarSVG />
                                </div>
                                <SearchInput value={search_query} onChange={(e) => SetSearchQuery(e.target.value)} className="searchbar" type="search" placeholder={'By title , status etc...   '} />
                            </div> */}
                        </div>
                    {/* </div> */}

                </React.Fragment>
            </div>
            
            <LoaderWrapper isLoading={isLoading} component={
            <React.Fragment>
                <Table />
                <div className='lg:px-10 md:px-5 px-1'>
                    <PaginationWrapper labelText={` Page Number ${currentPage?? '--'} of ${data?.response?.count ?? '--'}`} >
                        <Pagination showSizeChanger={false}
                            defaultCurrent={1}
                            current={currentPage}
                            defaultPageSize={10}
                            total={data?.response?.count}
                            onChange={paginationAction} />
                    </PaginationWrapper>
                </div>
            </React.Fragment>} />
        </React.Fragment>
    )
}


// const SearchInput = styled.input`

// padding: 6px 12px;
// font-size: 16px;
// font-weight: 400;
// line-height: 1.5;
// outline:none;
// width:100%;
// margin-bottom:10px;
// margin-top:10px;
// padding-left:40px;
// color: #212529;
// background-color: #fff;
// background-clip: padding-box;
// border: 1px solid #ced4da;
// appearance: none;
// border-radius: 40px;
// transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
// && :focus{
//     color: #212529;
//     background-color: #fff;
//     border-color: #86b7fe;
//     outline: 0;
//     box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
// }
// `;