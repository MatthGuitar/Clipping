import Link from 'next/link'
import Image from 'next/image'
import VisitsStyle from '../styles/Visits.module.scss'

const Visits = () => {
  return (
    <div class={VisitsStyle.view_wrapper}>
      <h2 class={VisitsStyle.view_title}>Vistos recetemente</h2>
      <ul class={VisitsStyle.view_list}>
        <li>
          <Image 
          src="/perfil.jpg"
          alt="Perfil da visita"
          width={24}
          height={24}
          />
          <Link href='/'>Tratado de fronteira</Link>
        </li>
        <li>
          <Image 
          src="/perfil2.jpg"
          alt="Perfil da visita"
          width={24}
          height={24}
          />
          <Link href='/'>Exercise: Syntax, Variat… I</Link>
        </li>
        <li>
          <Image 
          src="/perfil4.jpg"
          alt="Perfil da visita"
          width={24}
          height={24}
          />
          <Link href='/'>Melhor bibliografia CA…</Link>
        </li>
        <li>
          <Image 
          src="/perfil5.jpg"
          alt="Perfil da visita"
          width={24}
          height={24}
          />
          <Link href='/'>Resumos Miltons Sant...</Link>
        </li>
        <li>
          <Image 
          src="/perfil3.jpg"
          alt="Perfil da visita"
          width={24}
          height={24}
          />
          <Link href='/'>Microeconomia I</Link>
        </li>
      </ul>
    </div>
  )
}

export default Visits
