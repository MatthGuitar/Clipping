import Link from 'next/link'
import Image from 'next/image'
import NavStyles from '../styles/Nav.module.scss'


export const Nav = () => {
  return (
    <nav>
      <ul class={NavStyles.nav_list}>
        <li>
          <Image 
          src="/home.svg"
          alt="Ícone home"
          width={15}
          height={15}
          />
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Image 
          src="/journal.svg"
          alt="Ícone de Kderno"
          width={15}
          height={15}
          />
          <Link href=''>Kdernos</Link>
        </li>
        <li>
          <Image 
          src="/star.svg"
          alt="Ícone de Favoritos"
          width={15}
          height={15}
          />
          <Link href=''>Favoritos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav