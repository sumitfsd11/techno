import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import {
    PersonSVG,
} from 'icons';
import { useAuth } from 'hooks/';


export default function QuickReach() {
    const { logout } = useAuth()
    const navigate = useNavigate();
    const redirect__ = React.useCallback((path) => {
        if (path) {
            navigate(path)
        }
    }, [navigate])
    const items = [
        {
            key: '2',
            label: (
                <div target="_blank" onClick={() => redirect__('/admin/profile')} >
                    Profile
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div target="_blank" onClick={() => logout()} >
                    Logout
                </div>
            ),
        },
    ];
    const Icon = React.memo(({ children }) => (
        <React.Fragment>
            <div className='h-full  '>
                <div className={`grid cursor-pointer rounded-full bg-[#973356] text-white bg-slate-400 w-[45px] h-[45px]`}>
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

    return (
        <React.Fragment>
            <div className='lg:px-2 mt-2 grid grid-cols-5 gap-3'>
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <div>
                        <ProfileIcon />
                    </div>
                </Dropdown>
            </div>
        </React.Fragment>
    )
}
