import React from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from 'components'
import styled from 'styled-components'
import { SearchBarSVG } from 'icons'
import { useNavigate } from 'react-router-dom';
import { useFetch } from "hooks";
import Loader from 'components/utilsComponents/Loader'

export default function Courses() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = React.useState(1)

    const { isLoading, data, callFetch } = useFetch({
        url: `/course/?page=${currentPage}`,
        skipOnStart: false,
    })

    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/event_list/?page=${a}`,
            method: 'get'
        })
    }, [callFetch])
    console.log(data, " it is your name ")
    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Courses#</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="dark:bg-gray-700" >
                                <tr className="text-left">
                                    <th className="p-3">Invoice #</th>
                                    <th className="p-3">Client</th>
                                    <th className="p-3">Issued</th>
                                    <th className="p-3">Due</th>
                                    <th className="p-3 text-right">Amount</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            {
                                isLoading ? (<Loader />) : (
                                    <React.Fragment>
                                        {
                                            data?.response?.message?.map((i, index) => (
                                                <React.Fragment>
                                                    <tbody>
                                                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                            <td className="p-3 cursor-pointer" onClick={() => redirect__(`/admin/course/${1}`)}>
                                                                <p>97412378923</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p>Microsoft Corporation</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p>14 Jan 2022</p>
                                                                <p className="dark:text-gray-400">Friday</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p>01 Feb 2022</p>
                                                                <p className="dark:text-gray-400">Tuesday</p>
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                <p>$15,792</p>
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                                    <span>Pending</span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
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
        <div>
            <div>
                <React.Fragment>
                    <div className='flex justify-between mt-4 lg:px-36 md:px-10 px-2'>
                        <div>

                        </div>
                        <div>
                            <div className='relative ml-1'>
                                <div className='absolute font-semibold text-[#d6d4d4] top-[17px] left-3 z-[4]'>
                                    <SearchBarSVG />
                                </div>
                                <SearchInput className="searchbar" type="search" placeholder={'By Event Name , Date  '} />
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            </div>
            <Table />
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


const SearchInput = styled.input`

padding: 6px 12px;
font-size: 16px;
font-weight: 400;
line-height: 1.5;
outline:none;
width:100%;
margin-bottom:10px;
margin-top:10px;
padding-left:40px;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
appearance: none;
border-radius: 40px;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
&& :focus{
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}
`;