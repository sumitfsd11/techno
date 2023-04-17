import React from 'react'
import { socialUtils } from "pages/ActionAdmin/Widget/components/utils"
export default function SocialiconDist({ props }) {

    console.log(props, "==")

    return (
        <div>
            <div className=''>
                <div className='p-1 flex justify-end'>
                    <React.Fragment>
                        {
                            props?.twitter && (
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
                                <div className=' mx-2 text-xs cursor-pointer '>
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
