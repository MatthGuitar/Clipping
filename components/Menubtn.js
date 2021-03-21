import Image from 'next/image'
import MenuStyle from '../styles/Menu.module.scss'

const Menubtn = () => {
  return (
    <div class={MenuStyle.menu}>
      <Image 
      src='/../public/list.svg'
      alt='menu hamburger'
      width={50}
      height={50}
      />
    </div>
  )
}

export default Menubtn
