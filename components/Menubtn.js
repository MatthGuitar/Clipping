import Image from 'next/image'
import MenuStyle from '../styles/Menu.module.scss'

const Menubtn = () => {
  function slideMenu(event) {
    console.log(event.target)
  }
  return (
    <div class={MenuStyle.menu} id='mobile_menu' onClick={slideMenu}>
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
