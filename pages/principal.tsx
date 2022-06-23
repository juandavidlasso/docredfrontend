import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import PanelLeft from '../components/contents/PanelLeft';
import PanelRight from '../components/contents/PanelRight';
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath: any = path.join(process.cwd(), 'article.json');
    const jsonData: any = await fsPromises.readFile(filePath);
    const objectData: any = JSON.parse(jsonData);
  
    return {
      props: objectData
    }
}

const Principal = (props: any) => {    

    return (
        <>
            <Layout>
                <div className={styles.contenedorPrincipal}>
                    <div className='w-full sm:w-full md:w-3/3 lg:w-2/3 xl:w-2/3 mt-8 p-2 inline-block'>
                        <PanelLeft props={props} />
                    </div>

                    <div className='sm:w-full md:w-3/3 lg:w-1/3 xl:w-1/3 mt-8 p-2 inline-block'>
                        <PanelRight />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Principal;