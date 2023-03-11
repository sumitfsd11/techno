import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import {
    AdminSVG,
    EditActiveIcon,
    DuplicateInactiveIcon,
    DuplicateActiveIcon,
    ArchiveInactiveIcon,
    ArchiveActiveIcon,
    MoveInactiveIcon,
    MoveActiveIcon,
    DeleteInactiveIcon,
    DeleteActiveIcon,
    PersonSVG,
    MessageSVGIcon,
    IconOne,
    IconTwo,
    IconThree,

} from 'icons';


const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
        icon: IconOne,
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
        icon: IconTwo,
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
        icon: IconThree,
    },
]



export default function QuickReach() {
    const navigate = useNavigate();
    const detail = useLocation();

    const Icon = React.memo(({ children }) => (
        <React.Fragment>
            <div className='h-full  '>
                <div className={`grid cursor-pointer rounded-full gradient text-white bg-slate-400 w-[45px] h-[45px]`}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    ))

    const ProfileIcon = React.memo(() => (
        <div>
            <Icon>
                <PersonSVG className="m-auto" aria-hidden="true" />
            </Icon>
        </div>
    ));

    const IconBanner = React.memo(({ icon, children }) => (
        <React.Fragment >
            <div className=' relative'>
                <div className='grid w-[45px] h-[45px]'>
                    <MessageSVGIcon className={`${'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition outline-none duration-150 ease-in-out `}
                        aria-hidden="true" />
                </div>
            </div>
        </React.Fragment >
    ));

    return (
        <React.Fragment>
            <div className='lg:px-2 mt-2 grid grid-cols-5 gap-3'>

                <Icon>
                    <IconBanner />
                </Icon>
                <Icon>
                    <IconBanner />
                </Icon>
                <Icon>
                    <div className='m-auto'>
                        <IconBanner />
                    </div>
                </Icon>
                <div>
                    <ProfileIcon />
                </div>
            </div>
        </React.Fragment>
    )
}
