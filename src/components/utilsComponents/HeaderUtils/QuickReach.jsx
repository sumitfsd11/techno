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
    PersonSVG

} from 'icons';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'

export default function QuickReach() {
    const navigate = useNavigate();
    const detail = useLocation();

    const Icon = React.memo(({ children }) => (
        <React.Fragment>
            <div className='h-full  '>
                <div className={`grid cursor-pointer rounded-full mouseup text-white bg-slate-400 w-[45px] h-[45px]`}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    ))

    const ProfileIcon = React.memo(() => (
        <Menu as="div" className="">
            <div>
                <Menu.Button className="">
                    <Icon>
                        <PersonSVG className="m-auto" aria-hidden="true" />
                    </Icon>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-1 mt-2  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-primary-color' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <EditActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EditActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <DuplicateActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <DuplicateInactiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Duplicate
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <ArchiveActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <ArchiveInactiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Archive
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <MoveActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MoveInactiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Move
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <DeleteActiveIcon
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <DeleteInactiveIcon
                                            className="mr-2 h-5 w-5 text-violet-400"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Delete
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    ));

    return (
        <React.Fragment>
            <div className='lg:px-2 mt-2 grid grid-cols-5 gap-3'>
                <Icon>
                    <AdminSVG className="m-auto" />
                </Icon>
                <Icon>
                    <AdminSVG className="m-auto" />
                </Icon>
                <Icon>
                    <AdminSVG className="m-auto" />
                </Icon>
                <Icon>
                    <AdminSVG className="m-auto" />
                </Icon>
                <div>
                    <ProfileIcon />
                </div>
            </div>
        </React.Fragment>
    )
}
