import Avatar from './Avatar'
import Logo from './Logo'
import Dotbtn from './Dotbtn'
import Menubtn from './Menubtn'
import Search from './Search'
import HeaderStyles from '../styles/Header.module.scss'


const Header = () => {
  return (
    <header class={HeaderStyles.header}>
      <Menubtn />
      <Logo />
      <Search />
      <div class={HeaderStyles.top_menu}>
      <Avatar />
      <Dotbtn />
      </div>
    </header>
  )
}

export default Header
