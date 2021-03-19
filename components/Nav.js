import Link from 'next/link'
import Image from 'next/image'
import NavStyles from '../styles/Nav.module.scss'


export const Nav = () => {
  return (
    <nav>
      <ul class={NavStyles.nav_list}>
        <li>
          <Image 
          src="/../public/home.svg"
          alt="Home Icon"
          width={15}
          height={15}
          />
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Image 
          src="/../public/journal.svg"
          alt="Home Icon"
          width={15}
          height={15}
          />
          <Link href='/'>Kdernos</Link>
        </li>
        <li>
          <Image 
          src="/../public/star.svg"
          alt="Home Icon"
          width={15}
          height={15}
          />
          <Link href='/'>Favoritos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav