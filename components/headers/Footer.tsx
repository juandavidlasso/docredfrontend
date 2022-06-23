import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='w-full pl-1 pr-1 pt-2 pb-2 md:flex md:justify-center md:items-center'>
                <div className='sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 md:inline-block p-1'>
                    <img
                        className="mx-auto w-40"
                        src="https://www.docred.com/images/brand/logo.png"
                        alt="DocRed"
                    />
                </div>
                <div className='sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 md:inline-block p-3'>
                    <Link href='/principal'>
                        <a className='text-white text-sm hover:text-green-400 font-bold'>
                            Preguntas frecuentes
                        </a>
                    </Link>
                </div>
                <div className='sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 md:inline-block p-3'>
                    <Link href='/principal'>
                        <a className='text-white text-sm hover:text-green-400 font-bold'>
                            Contáctanos
                        </a>
                    </Link>
                </div>
                <div className='sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 md:inline-block p-3'>
                    <Link href='/principal'>
                        <a className='text-white text-sm hover:text-green-400 font-bold'>
                            Información
                        </a>
                    </Link>
                </div>
                <div className='sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 md:inline-block p-3'>
                    <p className='text-zinc-300 text-medium text-center'>
                        DocRed 2019. Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;