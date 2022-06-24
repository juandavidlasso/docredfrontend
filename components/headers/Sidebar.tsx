import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, CogIcon, SearchIcon, HomeIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import imgLogo from '../images/logo.png'
import imgUser from '../images/user.avif'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com'
}

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-sky-600">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={imgLogo}
                                                alt="DocRed"
                                                width={128}
                                                height={32}
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex">
                                                <div
                                                    className='pl-2 pr-2 pt-2 pb-2 h-11 bg-white'
                                                    style={{
                                                        marginRight: '1.5px',
                                                        borderTopRightRadius: '0px',
                                                        borderBottomRightRadius: '0px',
                                                        borderTopLeftRadius: '30px',
                                                        borderBottomLeftRadius: '2px'
                                                    }}
                                                >
                                                    <SearchIcon className="h-7 w-8 text-green-400" aria-hidden="true" />
                                                </div>
                                                <div
                                                    className='pl-5 pr-5 pt-1 pb-1 mr-6 bg-white h-11 sm:w-60 md:w-60 lg:w-96 xl:w-96'
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderTopRightRadius: '2px',
                                                        borderBottomRightRadius: '30px',
                                                        borderTopLeftRadius: '0px',
                                                        borderBottomLeftRadius: '0px'
                                                    }}
                                                >
                                                    <input
                                                        type="search"
                                                        className="form-control text-center relative flex-auto h-8 min-w-0 block w-full text-base font-normal text-gray-700 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="¿Qué estás buscando?" aria-label="Search" aria-describedby="button-addon2"
                                                    />
                                                </div>
                                                <Link href='/'>
                                                    <a className='text-white hover:bg-gray-800 ml-6 px-3 py-2 rounded-md text-sm font-medium w-32'>
                                                        <HomeIcon className="h-6 w-8 text-white inline-block" aria-hidden="true" />
                                                        Inicio
                                                        <ChevronDownIcon className="h-6 w-8 text-white inline-block" aria-hidden="true" />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="p-1 rounded-full text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <Image
                                                            src={imgUser}
                                                            alt="User"
                                                            width={40}
                                                            height={40}
                                                            style={{
                                                                borderRadius: '9999px'
                                                            }}
                                                        />
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
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>

                                            <button
                                                type="button"
                                                className="p-1 rounded-full text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <CogIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                        </div>
                                    </div>
                                    
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>

                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">

                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Disclosure.Button>
                                        <div className='w-full p-2' style={{display: 'flex', justifyContent: 'center'}}>
                                            <div
                                                className='pl-2 pr-2 pt-2 pb-2 mr-1 h-11 bg-white'
                                                style={{
                                                    borderTopRightRadius: '0px',
                                                    borderBottomRightRadius: '0px',
                                                    borderTopLeftRadius: '30px',
                                                    borderBottomLeftRadius: '0px'
                                                }}
                                            >
                                                <SearchIcon className="h-9 w-8 text-green-400" aria-hidden="true" />
                                            </div>
                                            <div
                                                className='pl-5 pr-5 pt-1 pb-1 w-80 mr-6 h-11 bg-white'
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderTopRightRadius: '0px',
                                                    borderBottomRightRadius: '30px',
                                                    borderTopLeftRadius: '0px',
                                                    borderBottomLeftRadius: '0px'
                                                }}
                                            >
                                                <input
                                                    type="search"
                                                    className="form-control text-center relative flex-auto h-8 min-w-0 block w-full text-base font-normal text-gray-700 bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="¿Qué estás buscando?" aria-label="Search" aria-describedby="button-addon2"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-full p-2'>
                                            <Link href='/'>
                                                <a className='block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                                    Inicio
                                                </a>
                                            </Link>
                                        </div>
                                    </Disclosure.Button>
                                </div>
                                
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={imgUser}
                                                alt="User"
                                                width={40}
                                                height={40}
                                                style={{
                                                    borderRadius: '9999px'
                                                }}
                                            />
                                        </div>
                                        
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <button
                                            type="button"
                                            className="p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <CogIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>

                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

export default Sidebar;