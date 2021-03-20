import Head from 'next/head'
import Card from '../components/Card'
import Maintext from '../components/Maintext'
import Subcard from '../components/Subcard'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
     <Head>
       <title>Kderno</title>
     </Head>
      <Card />
      <Subcard />
      <Maintext />
    </div>
  )
}
