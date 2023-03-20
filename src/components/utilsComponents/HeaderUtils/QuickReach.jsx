import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {  Dropdown } from 'antd';
import {
    PersonSVG,
    MessageSVGIcon,
} from 'icons';
import { useAuth } from 'hooks/';


export default function QuickReach() {
    const {logout} = useAuth()
    const navigate = useNavigate();
    const detail = useLocation();    
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <div target="_blank" onClick={()=>logout()} >
       Logout
        </div>
      ),
    },
  ];
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

                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <div>
                        <ProfileIcon />
                    </div>
                </Dropdown>
            </div>
        </React.Fragment>
    )
}
