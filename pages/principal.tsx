import { NextPage } from 'next'
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import PanelLeft from '../components/contents/PanelLeft';

const Principal: NextPage = () => {

    return (
        <>
            <Layout>
                <div className={styles.contenedorPrincipal}>
                    <div className='w-full sm:w-full md:w-3/3 lg:w-2/3 xl:w-2/3 mt-8 p-2 inline-block'>
                        <PanelLeft />
                    </div>

                    <div className='sm:w-full md:w-3/3 lg:w-1/3 xl:w-1/3 mt-8 p-2 inline-block'>
                        
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Principal;