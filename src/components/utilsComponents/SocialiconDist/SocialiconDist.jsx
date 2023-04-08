import React from 'react'
import { socialUtils } from "pages/ActionAdmin/Widget/components/utils"
export default function SocialiconDist() {
    const share__components = []

    return (
        <div>
            <div className=''>
                <div className='p-1 flex justify-end'>
                    {
                        socialUtils.map((i, index) => {
                            return (<React.Fragment>
                                <div className=' mx-2 text-xs cursor-pointer ' key={index}>
                                    <div title={i?.name}>
                                        {i?.icon}
                                    </div>
                                </div>
                            </React.Fragment>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
