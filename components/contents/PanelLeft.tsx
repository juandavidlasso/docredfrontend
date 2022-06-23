import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { StarIcon, ChatAltIcon, ArrowRightIcon } from '@heroicons/react/outline';

const PanelLeft = () => {

    const id = 1;
    const title = "Lorem ipson dolor sit amet";
    const content = "<h1>Demo article</h1><p>This is a demo article</p><h4>More information</h4><a href=\"https://placeholder.com\"><img src=\"https://via.placeholder.com/150\" width=\"150\" alt=\"placeholder\"/></a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum dolor ac ornare dictum. Nulla sollicitudin eros ex, in condimentum lacus condimentum vel. Nullam dui eros, sagittis eget pellentesque nec, faucibus at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt, justo eget tristique dictum, lorem lorem ultricies enim, ac rhoncus nisl arcu ac tellus. Integer placerat ante dolor, sed tristique lectus ullamcorper sit amet. Proin porta urna ac risus faucibus, vitae viverra magna lobortis. Vivamus fringilla, ipsum sit amet facilisis tempus, sapien nisi gravida augue, vitae vehicula ipsum neque sed mi. Sed vitae ante iaculis, aliquam erat laoreet, tristique tellus. Duis sed neque risus. Mauris commodo blandit leo, non commodo nisi congue ac. Cras nec dignissim felis. Proin viverra molestie porta. Fusce a fermentum ligula. Praesent ac mauris vitae nisi aliquam convallis ac ut enim.</p><p>Pellentesque ornare dui nec tincidunt placerat. Vivamus maximus, lorem sit amet gravida tempor, diam neque pretium nunc, eu tincidunt orci ipsum non libero. Nam ac tellus ac est vestibulum eleifend. Integer fermentum luctus semper. Etiam ullamcorper fringilla nibh, a aliquam libero mollis sed. Suspendisse est nulla, auctor et erat eget, efficitur convallis dui. Integer bibendum diam quis odio mollis volutpat ut egestas risus. In efficitur, sapien nec elementum sodales, lorem quam laoreet felis, vel congue arcu felis in mi. Duis eleifend massa augue, vel faucibus ligula interdum quis. Pellentesque efficitur orci non malesuada pulvinar.</p><p>Integer ac ligula sagittis, vehicula sem a, tincidunt tortor. Maecenas a facilisis tellus. Cras tincidunt augue eget euismod pellentesque. Maecenas ut lacus pretium, facilisis sapien sed, molestie ante. Curabitur porttitor tincidunt dui, ac malesuada elit pretium vitae. Nunc pulvinar aliquet enim id sodales. Pellentesque nec sodales ante. Aliquam erat volutpat. Maecenas accumsan luctus aliquet. Suspendisse ut feugiat erat. Aliquam sodales cursus arcu eget pellentesque. Sed pellentesque est quis leo lacinia, ut commodo turpis volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur nec nibh ut nibh congue pretium et ac felis. Nam hendrerit leo in mi facilisis, et posuere est pulvinar. Nullam a ex at sapien facilisis rutrum.</p><p>Fusce vel velit eu ligula cursus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sit amet sapien a arcu consequat tempor. Sed sed tincidunt nibh. Aenean accumsan ligula non tincidunt sollicitudin. Proin iaculis imperdiet vestibulum.</p><p>Aliquam pharetra pulvinar lectus porttitor rutrum. Ut in lacinia libero, a hendrerit neque. Donec a sollicitudin mi. Aliquam et nulla laoreet, ultricies nulla ac, convallis mi. Vestibulum non libero interdum, fringilla leo at, maximus nibh. Curabitur fringilla in risus vitae ornare. Duis lectus odio, lacinia venenatis lacinia ac, efficitur nec tortor. Aliquam cursus massa massa, sed facilisis justo posuere non. Pellentesque non nulla mauris.</p>";

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
            <div className='w-full mb-2 p-2 bg-red-300'>
                <div className='w-full p-2 bg-yellow-300'>
                    <p className='text-black text-justify font-medium'>
                        {content}
                    </p>
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