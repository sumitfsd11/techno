import React from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper, Button } from 'components'
import styled from 'styled-components'
import { SearchBarSVG } from 'icons'
import { CSVLink } from 'react-csv';
import { useFetch } from "hooks"
import Loader from 'components/utilsComponents/Loader'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
export default function ApplyList() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter_values, setFilterValues] = React.useState()

    const { isLoading, data, callFetch } = useFetch({
        url: `/apply_get/?page=${currentPage}`,
        skipOnStart: false,
    })

    const { isLoading: exportingLoading, data: exportData } = useFetch({
        url: `/apply_get_export/`,
        skipOnStart: false,
    })

    const __analytic = React.useMemo(() => {
        let data__ = [["Id", "Name", "Country", "Contact", "Mail", "Postal code", "DoB", "Program", "isAccept"]]
        if (!exportingLoading) {
            exportData?.response?.map((i, index, arr) => {
                data__.push([i?.id, i?.name, i?.country_name, i?.contact_number, i?.mail_id, i?.postal_code, i?.dob, i?.programme, i?.is_accepted_offer])
                return i
            })
        }
        return data__
    }, [exportingLoading])

    React.useEffect(() => {
        if (filter_values) {
            callFetch({
                url: `/apply_get/?page=${filter_values}`,
                method: 'get'
            })
        }
    }, [filter_values])

    const paginationAction = React.useCallback((a, p) => {
        setCurrentPage(a)
        callFetch({
            url: `/apply_get/?page=${a}`,
            method: 'get'
        })
    }, [callFetch])


    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])
    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <div className='flex justify-between '>
                        <h2 className="mb-3 text-2xl font-semibold leading-tight">Applyies#</h2>
                        <div className=' lg:pr-16 md:pr-5 pr-2 '>
                            <Button isLoading={false} isDisabled={exportingLoading}
                                className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `}
                            >
                                <CSVLink id="id" data={__analytic} >  {'EXPORT CSV'}</CSVLink></Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="dark:bg-gray-700">
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
                                isLoading ? <Loader /> : (
                                    <React.Fragment>
                                        {
                                            data?.response?.results.map((i, index) => (
                                                <React.Fragment key={index}>
                                                    <tbody>
                                                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                            <td className="p-3 cursor-pointer" onClick={() => redirect__(`/admin/event/${1}`)}>
                                                                <p>{i?.id}</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p className='cursor-pointer font-semibold'>{i?.name}</p>
                                                            </td>
                                                            <td className="p-3">

                                                                <p className="dark:text-gray-400">{i?.title}</p>
                                                            </td>
                                                            <td className="p-3">
                                                                <p>{moment(i?.created_on).format('MMMM Do YYYY, h:mm:ss a')}</p>
                                                                <p className="dark:text-gray-400">Tuesday</p>
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                <p>{i?.reader_count}</p>
                                                            </td>
                                                            <td className="p-3 ">
                                                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                                    <span>{i?.status}</span>
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
                                <SearchInput onChange={(e) => setFilterValues(e.target.value)} className="searchbar" type="search" placeholder={'By  Name , Date  '} />
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