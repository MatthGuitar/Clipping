import Avatar from './Avatar'
import Logo from './Logo'
import Search from './Search'
import HeaderStyles from '../styles/Header.module.scss'
import Dotbtn from './Dotbtn'

const Header = () => {
  return (
    <header class={HeaderStyles.header}>
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
