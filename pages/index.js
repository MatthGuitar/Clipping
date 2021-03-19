import Head from 'next/head'
import Card from '../components/Card'
import Subcard from '../components/Subcard'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     <Head>
       <title>Kderno</title>
     </Head>

      <Card />
      <Subcard />
     <h1>Teste</h1>
    </div>
  )
}
