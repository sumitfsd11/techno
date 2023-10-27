import React from 'react'
import styled from 'styled-components'
import { SearchBarSVG } from 'icons'
import { useNavigate } from 'react-router-dom'
import { useFetch } from "hooks";
import { Button } from 'components'
import Loader, { LoaderWrapper } from 'components/utilsComponents/Loader';

export default function FeatureList() {
    const navigate = useNavigate()
    const { isLoading, data } = useFetch({
        url: `/landing_feature_lc/`,
        skipOnStart: false,
    })
    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [])
    const Table = React.memo(() => {
        return (
            <React.Fragment>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">

                    <div className='flex justify-between'>
                        <div className="">
                            <h2 className="mb-4 text-2xl font-semibold leading-tight">Feature Articles#</h2>
                        </div>
                        <div className=''>
                            <Button onClick={() => redirect__('/admin/feature/')} className={`w-[120px] h-[30px] mt-2 leading-[4px] bg-black mb-3 box-shadow-none rounded-full hover:drop-shadow-none hover:shadow-none drop-shadow-none shadow-none `}
                            >
                                CREATE NEW
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Id #</th>
                                    <th className="p-3 ">Details</th>

                                    <th className="p-3 text-center">Status</th>
                                </tr>
                            </thead>
                            <React.Fragment>
                                {
                                    isLoading ? (<div>loading...</div>) : data?.response?.map((i, index, arr) => (
                                        <tbody>
                                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3 cursor-pointer hover:bg-blue-300 hover:bg-opacity-11 rounded-lg"  style={{ width: '30px', height:'10px'}} onClick={() => redirect__(`/admin/feature/${i?.id}`)}>
                                                    <p >{i?.id}</p>
                                                </td>
                                                <td className="p-3 w-[50%]">
                                                    <div className='flex justify-between gap-3'>
                                                        <div>

                                                        </div>
                                                        <div>
                                                            <p className='font-semibold text-[18px]'>{i?.title}</p>
                                                            <p>{i?.des}</p>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="p-3 text-center">
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
            <LoaderWrapper isLoading={isLoading} component={<React.Fragment>
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
                                    <SearchInput className="searchbar" type="search" placeholder={'By Blog Name , Date  '} />
                                </div>
                            </div>
                        </div>
                    </React.Fragment> */}
                </div>
                <Table />
            </React.Fragment>} />
            <div className='lg:px-10 md:px-5 px-1'>
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