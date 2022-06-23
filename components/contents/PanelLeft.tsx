import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { StarIcon, ChatAltIcon, ArrowRightIcon } from '@heroicons/react/outline';

const PanelLeft = ({props}: any) => {

    const {id, title, content} = props

    return (
        <div className='w-full rounded-xl p-4 bg-white' key={id}>
            <div className='w-full mb-2 p-2'>
                <div className={styles.imgNoticia}>img</div>
            </div>
            <div className='w-full mb-2 p-2'>
                <div className='sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 inline-block p-3'>
                    <h1 className='text-lg font-bold'>{title}</h1>
                </div>
                <div className='sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 inline-block p-2'>
                    <button
                        type='button'
                        className='text-white p-2 w-40 ml-6 hover:bg-lime-900 bg-lime-500'
                        style={{
                            borderTopRightRadius: '0px',
                            borderBottomRightRadius: '30px',
                            borderTopLeftRadius: '20px',
                            borderBottomLeftRadius: '0px'
                        }}
                    >
                        Guardar
                    </button>
                </div>
            </div>
            <div className='w-full mb-2 p-2'>
                <div className='w-full p-2'>
                    <h1 className='text-md font-bold'>Noticias DocRed</h1>
                    <p className='text-gray-500'>
                        <span className='mr-3'>Hace 12 h</span> | 
                        <span className='ml-3 mr-3'>Publicado 17/01/18</span> |
                        <span className='ml-3'>Lectura: 3 min.</span>
                        </p>
                </div>
            </div>
            <div className='w-full mb-2 p-2'>
                <div className='w-full p-2'>
                    <button type='button' className='bg-indigo-50 text-sky-500 dark:text-sky-400 rounded-lg pt-2 pb-2 pl-5 pr-5 mr-6 hover:bg-sky-600 hover:text-white'>Medicina interna</button>
                    <button type='button' className='bg-indigo-50 text-sky-500 dark:text-sky-400 rounded-lg pt-2 pb-2 pl-5 pr-5 mr-6 hover:bg-sky-600 hover:text-white'>Pediatría</button>
                    <button type='button' className='bg-indigo-50 text-sky-500 dark:text-sky-400 rounded-lg pt-2 pb-2 pl-5 pr-5 sm:mt-4 mt-4 hover:bg-sky-600 hover:text-white'>Obstreticia</button>
                </div>
            </div>
            <div className='w-full mb-2 p-2'>
                <div className='w-full p-2'>
                    <div dangerouslySetInnerHTML={{__html: content}} className='text-justify'></div>
                </div>
            </div>
            <div className='w-full p-2'>
                <div className='w-full p-2'>
                    <div
                        className='w-3/3 bg-white mx-auto p-2 md:w-2/3'
                        style={{
                            borderTopRightRadius: '0px',
                            borderBottomRightRadius: '30px',
                            borderTopLeftRadius: '20px',
                            borderBottomLeftRadius: '0px',
                            border: '2px solid #1B9CD8'
                        }}
                    >
                        <div className='w-1/3 p-1 inline-block'>
                        <Link href='/principal'>
                            <a className='text-zinc-400 hover:text-sky-600'><StarIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400" aria-hidden="true" />Destacar</a>
                        </Link>
                        </div>
                        <div className='w-1/3 p-1 inline-block'>
                        <Link href='/principal'>
                            <a className='text-zinc-400 hover:text-sky-600'><ChatAltIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400" aria-hidden="true" />Comentar</a>
                        </Link>
                        </div>
                        <div className='w-1/3 p-1 inline-block'>
                        <Link href='/principal'>
                            <a className='text-zinc-400 hover:text-sky-600'><ArrowRightIcon className="block h-5 w-6 inline-block mr-1 text-sky-200 hover:text-green-400" aria-hidden="true" />Compartir</a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelLeft;