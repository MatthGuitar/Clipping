import React from 'react'
import Link from 'next/link'
import CardStyles from '../styles/CardStyles.module.scss'


const Cardlinks = () => {


  return (
      <ul class={CardStyles.card_links}>
        <li id='cardlink'>
          <Link href='/'>Perfil</Link>
        </li>
        <li id='cardlink'>
          <Link href='/'>Conta</Link>
        </li>
        <li id='cardlink'>
          <Link href='/'>Meus Kdernos</Link>
        </li>
        <li id='cardlink'>
          <Link href='/'>Favoritos</Link>
        </li>
      </ul>
  )
}

export default Cardlinks
