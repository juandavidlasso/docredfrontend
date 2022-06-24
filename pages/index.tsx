import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: NextPage = () => {

  const router = useRouter()

  // Hooks UseEffect
  useEffect(() => {
    // Funcion para redireccionar a la pagina principal
    const redireccionar = () => {
      router.pathname === '/' ? router.push('/principal') : null
    }
    
    redireccionar()
  }, [])

  return (
    <div className={styles.container}>
      <Layout />
    </div>
  )
}

export default Home
