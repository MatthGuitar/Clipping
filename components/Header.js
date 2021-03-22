import Avatar from './Avatar'
import Logo from './Logo'
import Dotbtn from './Dotbtn'
import Search from './Search'
import HeaderStyles from '../styles/Header.module.scss'


const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <Logo />
      <Search />
      <div className={HeaderStyles.top_menu}>
        <Avatar />
        <Dotbtn />
      </div>
    </header>
  )
}

export default Header
