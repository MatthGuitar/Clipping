import Link from 'next/link'
import Image from 'next/image'
import VisitsStyle from '../styles/Visits.module.css'

const Visits = () => {
  return (
    <div>
      <ul class={VisitsStyle.view_list}>
      <li>
          <img src />
          <Link href='/'>Kdernos</Link>
        </li>
        <li>
          <img src />
          <Link href='/'>Kdernos</Link>
        </li>
        <li>
          <img src />
          <Link href='/'>Favoritos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Visits
