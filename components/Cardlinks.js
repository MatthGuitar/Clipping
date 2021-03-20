import Link from 'next/link'
import CardStyles from '../styles/CardStyles.module.scss'


const Cardlinks = () => {

  return (
      <ul class={CardStyles.card_links} id='cardlinks'>
        <li>
          <Link href='/'>Perfil</Link>
        </li>
        <li>
          <Link href='/'>Conta</Link>
        </li>
        <li>
          <Link href='/'>Meus Kdernos</Link>
        </li>
        <li>
          <Link href='/'>Favoritos</Link>
        </li>
      </ul>
  )
}

export default Cardlinks
