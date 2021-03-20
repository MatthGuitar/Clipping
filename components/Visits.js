import Link from 'next/link'
import Image from 'next/image'
import VisitsStyle from '../styles/Visits.module.scss'

const Visits = () => {
  return (
    <div>
      <h2 class={VisitsStyle.view_title}>Vistos recetemente</h2>
        <ul class={VisitsStyle.view_list}>
        <li>
          <Image 
          src="/../public/circle.svg"
          alt="Home Icon"
          width={20}
          height={20}
          />
          <Link href='/'>Tratado de fronteira</Link>
        </li>
        <li>
          <Image 
          src="/../public/circle.svg"
          alt="Home Icon"
          width={20}
          height={20}
          />
          <Link href='/'>Microeconomia I</Link>
        </li>
        <li>
          <Image 
          src="/../public/circle.svg"
          alt="Home Icon"
          width={20}
          height={20}
          />
          <Link href='/'>Melhor bibliografia CA…</Link>
        </li>
        <li>
          <Image 
          src="/../public/circle.svg"
          alt="Home Icon"
          width={20}
          height={20}
          />
          <Link href='/'>Resumos Miltons Sant...</Link>
        </li>
        </ul>
    </div>
  )
}

export default Visits
