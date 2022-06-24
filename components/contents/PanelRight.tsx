import { StarIcon, ChatAltIcon, EyeIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import imgBacteria from '../images/bacteria.jpg'

const PanelRight = () => {

    return (
        <div className='w-full p-1'>
            <div className='w-full mb-3'>
                <h1 className='text-sky-600 font-bold text-lg inline-block mr-9'>Noticias relacionadas</h1>
                <hr  style={{
                        display: 'inline-block',
                        backgroundColor: '#1490CA',
                        height: 3,
                        width: 170,
                        borderColor : '#1490CA'
                    }}
                />
            </div>
            <div className='w-full p-1'>
                
                <div className='bg-white rounded-t-lg p-2 mb-1' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='w-2/4 p-2 inline-block'>
                        <div className='text-white text-center text-sm absolute font-bold pt-1 pb-1 w-24 mt-4 bg-sky-600 rounded-r-xl z-[100]'>NOTICIA</div>
                        <Image
                            src={imgBacteria}
                            alt='Bacteria'
                            style={{
                                height: '6rem',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div className='w-2/4 p-1 inline-block'>
                        <div className='w-full mb-1 bg-white'>
                            <Link href='/principal'>
                                <a className='text-sm font-bold text-black hover:text-sky-600'>
                                    Lorem ipsum dolor: Volutpat consequat
                                </a>
                            </Link>
                        </div>
                        <div className='w-full mb-1 bg-white'>
                            <h1 className='text-sm text-gray-400'>Por: Lorem Ipsum Dolor</h1>
                        </div>
                        <hr  style={{
                                backgroundColor: '#F6F6F7',
                                height: 1,
                                width: '100%',
                                borderColor : '#F6F6F7'
                            }}
                        />
                        <div className='w-full p-2'>
                            <StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>50</span>
                            <ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>40</span>
                            <EyeIcon className="block h-5 w-6 inline-block mr-1 text-zinc-400 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400'>75</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-2 mb-1' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='w-2/4 p-2 inline-block'>
                        <div className='text-white text-center text-sm absolute font-bold pt-1 pb-1 w-24 mt-4 bg-sky-600 rounded-r-xl z-[100]'>NOTICIA</div>
                        <Image
                            src={imgBacteria}
                            alt='Bacteria'
                            style={{
                                height: '6rem',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div className='w-2/4 p-1 inline-block'>
                        <div className='w-full mb-1 bg-white'>
                            <Link href='/principal'>
                                <a className='text-sm font-bold text-black hover:text-sky-600'>
                                    Lorem ipsum dolor: Volutpat consequat
                                </a>
                            </Link>
                        </div>
                        <div className='w-full mb-1 bg-white'>
                            <h1 className='text-sm text-gray-400'>Por: Lorem Ipsum Dolor</h1>
                        </div>
                        <hr  style={{
                                backgroundColor: '#F6F6F7',
                                height: 1,
                                width: '100%',
                                borderColor : '#F6F6F7'
                            }}
                        />
                        <div className='w-full p-2'>
                            <StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>50</span>
                            <ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>40</span>
                            <EyeIcon className="block h-5 w-6 inline-block mr-1 text-zinc-400 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400'>75</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-2 mb-1' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='w-2/4 p-2 inline-block'>
                        <div className='text-white text-center text-sm absolute font-bold pt-1 pb-1 w-24 mt-4 bg-sky-600 rounded-r-xl z-[100]'>NOTICIA</div>
                        <Image
                            src={imgBacteria}
                            alt='Bacteria'
                            style={{
                                height: '6rem',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div className='w-2/4 p-1 inline-block'>
                        <div className='w-full mb-1 bg-white'>
                            <Link href='/principal'>
                                <a className='text-sm font-bold text-black hover:text-sky-600'>
                                    Lorem ipsum dolor: Volutpat consequat
                                </a>
                            </Link>
                        </div>
                        <div className='w-full mb-1 bg-white'>
                            <h1 className='text-sm text-gray-400'>Por: Lorem Ipsum Dolor</h1>
                        </div>
                        <hr  style={{
                                backgroundColor: '#F6F6F7',
                                height: 1,
                                width: '100%',
                                borderColor : '#F6F6F7'
                            }}
                        />
                        <div className='w-full p-2'>
                            <StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>50</span>
                            <ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>40</span>
                            <EyeIcon className="block h-5 w-6 inline-block mr-1 text-zinc-400 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400'>75</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-2 mb-1' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='w-2/4 p-2 inline-block'>
                        <div className='text-white text-center text-sm absolute font-bold pt-1 pb-1 w-24 mt-4 bg-sky-600 rounded-r-xl z-[100]'>NOTICIA</div>
                        <Image
                            src={imgBacteria}
                            alt='Bacteria'
                            style={{
                                height: '6rem',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div className='w-2/4 p-1 inline-block'>
                        <div className='w-full mb-1 bg-white'>
                            <Link href='/principal'>
                                <a className='text-sm font-bold text-black hover:text-sky-600'>
                                    Lorem ipsum dolor: Volutpat consequat
                                </a>
                            </Link>
                        </div>
                        <div className='w-full mb-1 bg-white'>
                            <h1 className='text-sm text-gray-400'>Por: Lorem Ipsum Dolor</h1>
                        </div>
                        <hr  style={{
                                backgroundColor: '#F6F6F7',
                                height: 1,
                                width: '100%',
                                borderColor : '#F6F6F7'
                            }}
                        />
                        <div className='w-full p-2'>
                            <StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>50</span>
                            <ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>40</span>
                            <EyeIcon className="block h-5 w-6 inline-block mr-1 text-zinc-400 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400'>75</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-b-lg p-2 mb-1' style={{display: 'flex', justifyContent: 'center'}}>
                    <div className='w-2/4 p-2 inline-block'>
                        <div className='text-white text-center text-sm absolute font-bold pt-1 pb-1 w-24 mt-4 bg-sky-600 rounded-r-xl z-[100]'>NOTICIA</div>
                        <Image
                            src={imgBacteria}
                            alt='Bacteria'
                            style={{
                                height: '6rem',
                                borderRadius: '12px'
                            }}
                        />
                    </div>
                    <div className='w-2/4 p-1 inline-block'>
                        <div className='w-full mb-1 bg-white'>
                            <Link href='/principal'>
                                <a className='text-sm font-bold text-black hover:text-sky-600'>
                                    Lorem ipsum dolor: Volutpat consequat
                                </a>
                            </Link>
                        </div>
                        <div className='w-full mb-1 bg-white'>
                            <h1 className='text-sm text-gray-400'>Por: Lorem Ipsum Dolor</h1>
                        </div>
                        <hr  style={{
                                backgroundColor: '#F6F6F7',
                                height: 1,
                                width: '100%',
                                borderColor : '#F6F6F7'
                            }}
                        />
                        <div className='w-full p-2'>
                            <StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>50</span>
                            <ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400 mr-3'>40</span>
                            <EyeIcon className="block h-5 w-6 inline-block mr-1 text-zinc-400 hover:text-green-400 cursor-pointer" aria-hidden="true" />
                            <span className='text-zinc-400'>75</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PanelRight;