import React from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper , Button } from 'components'
import styled from 'styled-components'
import { SearchBarSVG } from 'icons'
import { CSVLink } from 'react-csv'
export default function ApplyList() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter_values, setFilterValues] = React.useState()

    const __analytic = React.useMemo(() => {
        return [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ]
    }, [])

    const paginationAction = React.useCallback((a, p) => {
        console.log(a, "===", p)
    }, [])
    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <div className='flex justify-between '>
                        <h2 className="mb-3 text-2xl font-semibold leading-tight">Applyies#</h2>
                        <div className=' lg:pr-16 md:pr-5 pr-2 '>
                            <CSVLink id="id" data={__analytic} >     <Button 
                  className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `} 
                >{'EXPORT CSV'}</Button></CSVLink>
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
                            <tbody>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
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
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Tesla Inc.</p>
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
                                        <p>$275</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Coca Cola co.</p>
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
                                        <p>$8,950,500</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Nvidia Corporation</p>
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
                                        <p>$98,218</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
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
                                <SearchInput className="searchbar" type="search" placeholder={'By  Name , Date  '} />
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            </div>
            <Table />
            <div className='lg:px-10 md:px-5 px-1'>
                <PaginationWrapper labelText={` Page Number ${1} of ${null}`} >
                    <Pagination showSizeChanger={false}
                        defaultCurrent={1}
                        current={currentPage}
                        defaultPageSize={10}
                        total={90}
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