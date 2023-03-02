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
import { Menu, Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';


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
                        <Menu.Item className="hover:text-white">
                            {({ active }) => (
                                <button
                                    className={`${active ? ` bgprimary-color text-white ` : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <EditActiveIcon
                                            className=" text-white mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EditActiveIcon
                                            className=" primary-color mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item className=" ">
                            {({ active }) => (
                                   <button
                                   className={`${active ? ` bgprimary-color text-white ` : 'text-gray-900'
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
                                   className={`${active ? ` bgprimary-color text-white ` : 'text-gray-900'
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
                              className={`${active ? ` bgprimary-color text-white ` : 'text-gray-900'
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
                                    className={`${active ? 'bg-primarycolor text-white' : 'text-gray-900'
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

    const IconBanner = React.memo(({ icon, children }) => (
        <React.Fragment >
            <div className=' relative'>
                <Popover className="relative">
                    {({ open }) => (
                        <React.Fragment>
                            <Popover.Button
                                className={`
                ${open ? '' : 'text-opacity-90'}
                `}
                            >
                                <div className='grid w-[45px] h-[45px]'>
                                    <MessageSVGIcon className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition outline-none duration-150 ease-in-out group-hover:text-opacity-80`}
                                        aria-hidden="true" />
                                </div>
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute lg:w-[350px] lg:right-[-230px]  z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <React.Fragment>
                                            {
                                                children
                                            }
                                        </React.Fragment>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </React.Fragment>
                    )}
                </Popover>
            </div>
        </React.Fragment >
    ));

    return (
        <React.Fragment>
            <div className='lg:px-2 mt-2 grid grid-cols-5 gap-3'>
                <Icon>
                    <IconBanner >
                        <div className="relative grid grid-cols-1 gap-8 bg-white p-7 ">
                            {solutions.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                        <item.icon aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-4">
                            <a
                                href="##"
                                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                                <span className="flex items-center">
                                    <span className="text-sm font-medium text-gray-900">
                                        Documentation
                                    </span>
                                </span>
                                <span className="block text-sm text-gray-500">
                                    Start integrating products and tools
                                </span>
                            </a>
                        </div>
                    </IconBanner>
                </Icon>
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
