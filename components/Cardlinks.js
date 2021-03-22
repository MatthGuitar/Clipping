import React from 'react'
import Link from 'next/link'
import CardStyles from '../styles/CardStyles.module.scss'


const Cardlinks = () => {


  return (
      <ul class={CardStyles.card_links}>
        <li class={CardStyles.card_links}>
          <Link href='/'>Perfil</Link>
        </li>
        <li >
          <Link href='/'>Conta</Link>
        </li>
        <li>
          <Link href='/'>Meus Kdernos</Link>
        </li>
        <li >
          <Link href='/'>Favoritos</Link>
        </li>
      </ul>
  )
}

export default Cardlinks
