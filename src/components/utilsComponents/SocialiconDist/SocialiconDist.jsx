import React from 'react'
import { socialUtils } from "pages/ActionAdmin/Widget/components/utils"
export default function SocialiconDist({ props }) {

    const redirect_out__ = React.useCallback((path) => {
        if (path) {
            window.open(path)
        }
    }, [])


    return (
        <div>
            <div className=''>
                <div className='p-1 flex justify-end'>
                    <React.Fragment>
                        {
                            props?.twitter && (
                                <div onClick={() => redirect_out__(props?.twitter)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[0].name}>
                                        {socialUtils[0].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>

                    <React.Fragment>
                        {
                            props?.linkedin && (
                                <div onClick={() => redirect_out__(props?.linkedin)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[1].name}>
                                        {socialUtils[1].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.facebook && (
                                <div onClick={() => redirect_out__(props?.facebook)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[2].name}>
                                        {socialUtils[2].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.instagram && (
                                <div onClick={() => redirect_out__(props?.instagram)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[3].name}>
                                        {socialUtils[3].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.youtube && (
                                <div onClick={() => redirect_out__(props?.youtube)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[4].name}>
                                        {socialUtils[4].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.discord && (
                                <div onClick={() => redirect_out__(props?.discord)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[5].name}>
                                        {socialUtils[5].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.slack && (
                                <div onClick={() => redirect_out__(props?.slack)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[6].name}>
                                        {socialUtils[6].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                    <React.Fragment>
                        {
                            props?.snapchat && (
                                <div onClick={() => redirect_out__(props?.snapchat)} className=' mx-2 text-xs cursor-pointer '>
                                    <div title={socialUtils[7].name}>
                                        {socialUtils[7].icon}
                                    </div>
                                </div>
                            )
                        }
                    </React.Fragment>
                </div>
            </div>
        </div>
    )
}
